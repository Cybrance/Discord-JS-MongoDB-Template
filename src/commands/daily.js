const { SlashCommandBuilder } = require('discord.js');
const User = require('../models/User');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Collect your daily reward'),
    
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

            const now = new Date();
            const lastDaily = user.lastDaily;

            if (lastDaily && lastDaily.getTime() + 86400000 > now.getTime()) {
                const timeLeft = Math.ceil((lastDaily.getTime() + 86400000 - now.getTime()) / 1000 / 60 / 60);
                return interaction.reply(`You can collect your daily reward in ${timeLeft} hours`);
            }

            const reward = 100;
            user.balance += reward;
            user.lastDaily = now;
            await user.save();

            await interaction.reply(`You collected your daily reward of ${reward} coins!`);
        } catch (error) {
            console.error(error);
            await interaction.reply('An error occurred while collecting your daily reward');
        }
    }
};
