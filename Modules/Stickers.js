const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'TokenHere';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content === 'Stickers') {
        if (!message.guild) return;

        const stickers = await message.guild.stickers.fetch();

        if (stickers.size === 0) {
            console.log('No stickers to delete.');
            return;
        }

        let stickersArray = Array.from(stickers.values());

        let deleteInterval = setInterval(() => {
            if (stickersArray.length === 0) {
                clearInterval(deleteInterval);
                console.log('All stickers have been deleted.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * stickersArray.length);
            const randomSticker = stickersArray.splice(randomIndex, 1)[0];

            randomSticker.delete('Deleted by a random decision.')
                .then(() => console.log(`${randomSticker.name} has been deleted.`))
                .catch(err => console.log(`Failed to delete ${randomSticker.name}.`));
        }, 3000);
    }
});

client.login(TOKEN);
