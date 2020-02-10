const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(`Avatar.`, {
type: "Playing",
url: "https://www.twitch.tv/ee"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});


client.login(process.env.BOT_TOKEN);
