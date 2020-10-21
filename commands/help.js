
const config = require("../config.json");

module.exports = {
    async run(bot, message, args) {
            if(!args[0]) {
          let commands = bot.commands.map(c => `\`${config.prefix}${c.name}${(c.usage)?' '+c.usage:''}\` - ${c.description}`);
      
        const commandsEmbed = new discord.RichEmbed()
        .setDescription(`My prefix is \`${config.prefix}\`\n To run a command do, \`${config.prefix}command\`\n Do \`${config.prefix}help command\` for more info on a command\n\n${commands.join('\n')}`)
        .setColor(config.embed)
        .setFooter(bot.user.tag,bot.user.displayAvatarURL)
        .setTimestamp()
        message.channel.send(commandsEmbed);
            }
      if(args[0]) {
        let command = args[0];
                              if (!bot.commands.has(command))  {
               message.channel.send(
          new discord.RichEmbed()
            .addField('Error',`**Invalid Command!**`)
            .setFooter(bot.user.tag,bot.user.displayAvatarURL)
            .setAuthor(message.author.tag,message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("RED"));
                              }
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            let embedhelp = new discord.RichEmbed()
                .setDescription(`**Command Name: \`${command.name}\`\nUsage: \`${config.prefix}${command.name}${(command.usage)?' '+command.usage:''}\`\nCommand Description: \`\`\`\n${command.description}\`\`\`**`)
                .setColor(config.embed)
        .setFooter(bot.user.tag,bot.user.displayAvatarURL)
                    .setTimestamp()
            message.channel.send(embedhelp);
              }
      }

    },
    name: "help",
    usage: '[command]',
    description: "See a list of commands."
};