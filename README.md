# HAMBOT

## Getting started

### Discord Setup:
To get started log in to the [Discord developer portal](https://discord.com/developers/applications).

1. Click the New Application button, name your application and click Create.
2. Navigate to the Bot tab in the lefthand menu, and add a new bot.
3. On the bot page click the Reset Token button to reveal your token. Put this token in your `Secrets.toml`. It's very important that you don't reveal your token to anyone, as it can be abused. Create a `.gitignore` file to omit your `Secrets.toml` from version control.
4. For the sake of this example, you also need to scroll down on the bot page to the Message Content Intent section and enable that option.

To add the bot to a server we need to create an invite link.

1. On your bot's application page, open the OAuth2 page via the lefthand panel.
2. Go to the URL Generator via the lefthand panel, and select the `bot` scope as well as the `Send Messages` permission in the Bot Permissions section.
3. Copy the URL, open it in your browser and select a Discord server you wish to invite the bot to.

For more information please refer to the [Discord docs](https://discord.com/developers/docs/getting-started) as well as the [Poise docs](https://docs.rs/poise) for more examples.


### Shuttle
This project uses [shuttle](https://github.com/shuttle-hq/shuttle)

On macOS or Linux:

```bash
curl -sSfL https://www.shuttle.rs/install | bash
```
Install directly with cargo:

```bash
cargo install cargo-shuttle
```

### cargo-make
This project uses (cargo-make)[https://sagiegurari.github.io/cargo-make/#installation] as task runner

Install:
```
cargo install --force cargo-make
```

### Tasks:

Tasks for the project can be found (here)[/Makefile.toml].

To start locally:

```bash
cargo make run
```


