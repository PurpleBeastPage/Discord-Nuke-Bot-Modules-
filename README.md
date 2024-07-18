### `README.md`

# Nuke Bot

This repository contains a Discord bot with various "nuke" functionalities. Each function can be used individually or all together by using the `index.js` file. These functionalities include banning members, deleting channels, deleting roles, deleting emojis, and deleting stickers.

## Features

- **Mass Ban**: Bans random members from the server.
- **Delete Channels**: Deletes all channels in the server one by one.
- **Delete Roles**: Deletes all roles that are below the bot's highest role.
- **Delete Emojis**: Deletes all custom emojis from the server.
- **Delete Stickers**: Deletes all custom stickers from the server.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PurpleBeastPage/Discord-Nuke-Bot-Modules-.git
   cd nuke-bot
   ```

2. Install the necessary dependencies:
   ```bash
   npm install discord.js
   ```

3. Replace `'TokenHere'` in each module file with your actual bot token.

## Usage

### Running Individual Modules

Each functionality is implemented in a separate file inside the `Modules` directory. You can run each file individually if you only need a specific function.

For example, to run the `MassBan` functionality:
```bash
node Modules/MassBan.js
```

### Running All Modules Together

To run all functionalities together, use the `index.js` file. This will load and execute all modules in the `Modules` directory.
```bash
node index.js
```

## File Structure

```
nuke-bot/
├── index.js
├── README.md
└── Modules/
    ├── MassBan.js
    ├── DeleteChannels.js
    ├── Roles.js
    ├── Emojis.js
    └── Stickers.js
```

## Important Notes

- Ensure your bot has the necessary permissions for each functionality (e.g., `BAN_MEMBERS`, `MANAGE_CHANNELS`, `MANAGE_ROLES`, `MANAGE_EMOJIS_AND_STICKERS`).
- Use these scripts responsibly. They can cause significant changes to your Discord server.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
