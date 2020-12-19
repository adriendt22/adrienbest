const { MessageReaction } = require("discord.js");

module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '784473250167521330');
  const photoRole = message.guild.roles.cache.get("788116884867776522");
  const videoRole = message.guild.roles.cache.get("788117323260755968");
  const fondRole = message.guild.roles.cache.get("788117858604285972");
  const logoRole = message.guild.roles.cache.get("788118008321015809");
  const introRole = message.guild.roles.cache.get("788118170015236117");
  if (member.user.bot) return;

  if(["photo", "camxra", "fond", "logo", "intro"].includes(emoji) && message.channel.id === channel.id){
    switch (emoji) {
      case "photo":
        member.roles.remove(photoRole);
        client.channels.cache.get('788716620418646036').send(`Le rôle ${photoRole.name} a été supprimé avec succès à ${user}!`);
        break;

        case "camxra":
        member.roles.remove(videoRole);
        client.channels.cache.get('788716620418646036').send(`Le rôle ${videoRole.name} a été supprimé avec succès à ${user}!`);
        break;

        case "fond":
        member.roles.remove(fondRole);
        client.channels.cache.get('788716620418646036').send(`Le rôle ${fondRole.name} a été supprimé avec succès à ${user}!`);
        break;

        case "logo":
        member.roles.remove(logoRole);
        client.channels.cache.get('788716620418646036').send(`Le rôle ${logoRole.name} a été supprimé avec succès à ${user}!`);
        break;

        case "intro":
        member.roles.remove(introRole);
        client.channels.cache.get('788716620418646036').send(`Le rôle ${introRole.name} a été supprimé avec succès à ${user}!`);
        break;
    };
  };
}