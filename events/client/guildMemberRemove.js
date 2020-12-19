const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI } = require('../../config');


module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setTitle(`Arrache ta mère de ${member.guild.name} mec t'es trop nul ${member.user.tag}.\nNous sommes désormais ${member.guild.memberCount} membres`)
    .setThumbnail("https://i.imgur.com/HNfSGe9.png")
    .setTimestamp()
    .setFooter(FOOTER, FOOTERI);

  client.channels.cache.get('784471898498269205').send(embed);
}
