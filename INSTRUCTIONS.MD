[![Cybrance.png](https://i.postimg.cc/jCVhPrnp/Cybrance.png)](https://postimg.cc/N24TvS4D)

# How to Set Up the Template Bot on Cybrance Using GitHub

## Step-by-Step Instructions

### 1. Log into the Cybrance Panel and _Head over to the Startup page_

- Go to [Cybrance Panel](https://panel.Cybrance.nl/) and log into your account.

### 2. Clone the GitHub Repository

- **GIT REPO ADDRESS**:
  - Enter the GitHub repository link.
  - Repo Link: `https://github.com/Cybrance/Discord-JS-MongoDB-Template`
  - **Description**: This is the GitHub repository to clone.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/git.png" alt="git-Image" width="380" height="100">
</a>

### 3. Select the Install Branch

- **INSTALL BRANCH**:
  - Enter `main`.
  - **Description**: The branch of the bot to install.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/branch.png" alt="branch-Image" width="380" height="100">
</a>

### 4. User Uploaded Files

- **USER UPLOADED FILES**:
  - Disable to skip all the install stuff.
  - **Description**: Skip all the install stuff if you are letting a user upload files. `0 = false` (default), `1 = true`.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/uploadedFiles.png" alt="files-Image" width="380" height="100">
</a>

### 5. Auto Update

- **AUTO UPDATE**:
  - Enable or disable based on your preference.
  - **Description**: Pull the latest files on startup when using a GitHub repo.
    _Note: After manually changing the code in the panel - updates made on the original repository will be blocked._

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/autoUpdate.png" alt="update-Image" width="380" height="100">
</a>

### 6. Specify the Bot Entry Point

- **BOT JS FILE**:
  - Enter `src/index.js`.
  - **Description**: The file that starts the bot.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/src.png" alt="src-Image" width="380" height="100">
</a>

### 7. Install Additional Node Packages

- **ADDITIONAL NODE PACKAGES**:
  - Enter `discord.js axios discord-logs mongodb mongoose@6.0.2 dotenv canvas @napi-rs/canvas os discord-gamecord dotenv`.
  - **Description**: Install additional node packages. Use spaces to separate.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/packages.png" alt="packages-Image" width="380" height="100">
</a>

### 8. GitHub Authentication

- **GIT USERNAME**: - Enter `Cybrance` as the GitHub username. - **Description**: Username to authenticate with Git.
  <a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
  <img src="images/username.png" alt="username-Image" width="380" height="100">
  </a>

- **GIT ACCESS TOKEN** `(Needed)`:
  - Enter your GitHub Personal Access Token if you are using it out of a own private repository.
  - **Description**: Password to use with Git but with a private repository. It's best practice to use a Personal Access Token. [Create a GitHub Personal Access Token](https://github.com/settings/tokens).

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/GITaccess.png" alt="GITaccess-Image" width="380" height="100">
</a>

### 9. Uninstall Node Packages

- **UNINSTALL NODE PACKAGES**:
  - Leave this field empty or enter the packages you want to uninstall.
  - **Description**: Uninstall node packages. Use spaces to separate.

<a href="https://github.com/Cybrance/Discord-JS-MongoDB-Template">
   <img src="images/uninstall.png" alt="uninstall-Image" width="380" height="100">
</a>

Once the Git settings are applied, you will need to reinstall the server.
## MongoDB Setup Instructions

### Step 1: Follow our Cybrance MongoDB Guide

- Go to [MongoDB Guide](https://www.mongodb.com/resources/products/fundamentals/clusters) and follow the prompts to set up a new cluster.

### Step 2: Update Your .env file

- Edit your Discord Bot Token and MongoDB URL in the `.env` file:
  ```env
  token=your_discord_bot_token
  MONGODBURI=your_mongodb_connection_string
  ```

## Need support for setting up your bot?

support@cybrance.nl
