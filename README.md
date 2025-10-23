# Discord JS + MongoDB Template

Minimal Discord bot template using discord.js and Mongoose. Includes environment-driven configuration and instructions for running locally or deploying via the Cybrance panel.

## Features

- discord.js v14
- Mongoose (MongoDB)
- dotenv for configuration
- Simple startup script (src/index.js)

## Requirements

- Node.js >= 18
- A Discord bot token
- A MongoDB connection string

## Quick Setup (local)

1. Clone the repo.
2. Install dependencies:
   - npm install
3. Create a `.env` file in the project root with:
   ```
   token=your_discord_bot_token
   MONGODBURI=your_mongodb_connection_string
   ```
4. Start the bot:
   - npm start

## Environment variables

- token — Discord bot token.
- MONGODBURI — MongoDB connection string (e.g. MongoDB Atlas).
- CLIENT_ID - Bot client ID

## Cybrance deployment notes

- Startup file: `src/index.js`
- Install branch: `main`
- Example additional packages (if needed): `discord.js mongoose dotenv`
- If using the Cybrance panel, follow the panel instructions to set the Git repo, branch, packages, and environment variables. See INSTRUCTIONS.MD for more panel-specific screenshots and guidance.

## MongoDB

- You can use MongoDB Atlas or any accessible MongoDB instance.
- Create a database and update `MONGODBURI` in `.env` with the connection string.

## Contributing

- Make changes on feature branches. Keep .env out of version control (already listed in .gitignore).

## Support

- For help setting up with Cybrance, see INSTRUCTIONS.MD or contact support@cybrance.nl.
