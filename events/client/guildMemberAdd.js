const { MessageEmbed } = require("discord.js");
const { FOOTER, FOOTERI } = require("../../config");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
  .setTitle(`Bienvenue ${member.user} sur ${member.guild.name}.\n Nous sommes désormais ${member.guild.memberCount} membres`)
  .setColor("#A210EB")
  .setThumbnail("https://i.imgur.com/HNfSGe9.png")
  .setFooter(FOOTER, FOOTERI)
  .setTimestamp();

  client.channels.cache.get('784450986449567795').send(embed);
}