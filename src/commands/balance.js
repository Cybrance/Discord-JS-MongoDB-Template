const { SlashCommandBuilder } = require('discord.js');
const User = require('../models/User');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Check your balance'),
    
    async execute(interaction) {
        try {
            let user = await User.findOne({ 
                userId: interaction.user.id,
                guildId: interaction.guild.id 
            });

            if (!user) {
                user = await User.create({
                    userId: interaction.user.id,
                    guildId: interaction.guild.id
                });
            }

            await interaction.reply(`Your balance is: ${user.balance} coins`);
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while checking your balance');
        }
    }
};
