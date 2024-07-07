const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TokenHere';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content === 'Emojis') {
        if (!message.guild) return;

        const emojis = message.guild.emojis.cache;

        if (emojis.size === 0) {
            console.log('No emojis to delete.');
            return;
        }

        let emojisArray = Array.from(emojis.values());

        let deleteInterval = setInterval(() => {
            if (emojisArray.length === 0) {
                clearInterval(deleteInterval);
                console.log('All emojis have been deleted.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * emojisArray.length);
            const randomEmoji = emojisArray.splice(randomIndex, 1)[0];

            randomEmoji.delete('Deleted by a random decision.')
                .then(() => console.log(`${randomEmoji.name} has been deleted.`))
                .catch(err => console.log(`Failed to delete ${randomEmoji.name}.`));
        }, 0.01);
    }
});

client.login(TOKEN);
