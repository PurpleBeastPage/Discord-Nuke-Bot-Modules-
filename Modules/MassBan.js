const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TokenHere';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content === 'massban') {
        if (!message.guild) return;

        const members = await message.guild.members.fetch();
        const bannableMembers = members.filter(member => member.bannable);

        if (bannableMembers.size === 0) {
            console.log('No bannable members found.');
            return;
        }

        let membersArray = Array.from(bannableMembers.values());

        let banInterval = setInterval(() => {
            if (membersArray.length === 0) {
                clearInterval(banInterval);
                console.log('All bannable members have been banned.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * membersArray.length);
            const randomMember = membersArray.splice(randomIndex, 1)[0];

            randomMember.ban({ reason: 'Banned by a random decision!' })
                .then(() => console.log(`${randomMember.user.tag} has been banned.`))
                .catch(err => console.log(`Failed to ban ${randomMember.user.tag}.`));
        }, 0.01);
    }
});

client.login(TOKEN);

