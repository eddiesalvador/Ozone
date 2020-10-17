const Discord = require('discord.js'); // Imports the module into an object called Discord
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 });	// 

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
 });

client.on('message', msg => {
    if (msg.content === 'hey bot') {
        msg.reply('you suck! ◡ ヽ(`Д´)ﾉ ┻━┻');
    }
});

client.login('token');
