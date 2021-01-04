module.exports = client => {
  console.log(`Connecté à ${client.user.tag}!`);

 client.user.setPresence({
  activity:{
    name: 'WSH LES GENS'
  },
  status: 'dnd'
});
}
