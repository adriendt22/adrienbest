const { MessageEmbed } = require ("discord.js");
const { FOOTER, FOOTERI } = require('./../../config');

module.exports.run = (client, message, args) => {
  const photoRole = message.guild.roles.cache.get("788116884867776522");
  const videoRole = message.guild.roles.cache.get("788117323260755968");
  const fondRole = message.guild.roles.cache.get("788117858604285972");
  const logoRole = message.guild.roles.cache.get("788118008321015809");
  const introRole = message.guild.roles.cache.get("788118170015236117");
  const photoEmoji = message.guild.emojis.cache.get("788404145329668186");
  const videoemoji = message.guild.emojis.cache.get("788415821692928052");
  const fondemoji = message.guild.emojis.cache.get("788416132326883329");
  const logoemoji = message.guild.emojis.cache.get("788416941365788723");
  const introemoji = message.guild.emojis.cache.get("788417665681063970");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquez sur une des réactions ci-dessous pour y recevoir le rôle")
    .setColor("dc143c")
    .addField(
      "Les rôles disponnibles:",
      `
      ${photoEmoji} - ${photoRole.toString()}
      ${videoemoji} - ${videoRole.toString()}
      ${fondemoji} - ${fondRole.toString()}
      ${logoemoji} - ${logoRole.toString()}
      ${introemoji} - ${introRole.toString()}
      `
    );

      message.delete();  

      client.channels.cache.get('788113313174913024').send(embed).then(async msg => {
        await msg.react(photoEmoji);
        await msg.react(videoemoji);
        await msg.react(fondemoji);
        await msg.react(logoemoji);
        await msg.react(introemoji);
      })
};

module.exports.help = {
  name: "roles",
  aliases: ['roles'],
  category: 'react',
  description: "Réactions roles",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
};