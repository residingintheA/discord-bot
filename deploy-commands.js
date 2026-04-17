import { REST, Routes, SlashCommandBuilder } from "discord.js";

const commands = [
  new SlashCommandBuilder()
    .setName("vc")
    .setDescription("Create a private voice channel")
].map(c => c.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

await rest.put(
  Routes.applicationCommands("cYfapHyatevOK6CXIKHaNxHQyL50yj6c"),
  { body: commands }
);

console.log("Commands registered");
