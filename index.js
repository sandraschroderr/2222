import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("ready", () => {
  console.log("bot logged in");
});

client.on("messageCreate", (message) => {
  console.log("Message received: " + message.content);
  if (!message?.author.bot) {
    message.reply("Hello World!");
  }
});
client.login(process.env.DISCORD_TOKEN);
