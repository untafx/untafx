const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '/news') {

       message.reply('Last News Update In 14/4/2019 : UntaFx has new post on @untafx Instagram! :)');

       }

});

client.on('message', message => {

    if (message.content === '/about') {

       message.reply('Bot made by UntaFX');

       }

});

client.on('message', message => {

    if (message.content === '/memes') {

       message.reply('Last meme on 2019 = Spotify meme , MasterChef memes');

       }

});

client.on('message', message => {

    if (message.content === 'UwU') {

       message.reply('OwO');

       }

});

client.on('message', message => {

    if (message.content === 'Nigga') {

       message.reply('You just say the N-WORD!!!. I will call 911!');

       }

});

client.on('message', message => {

    if (message.content === 'Oof') {

       message.reply('OOF!');

       }

});

client.on('message', message => {

    if (message.content === 'Ashiap') {

       message.reply('ASHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP UWU XD');

       }

});

client.on('message', message => {

    if (message.content === 'ngeteh') {

       message.reply('Yee.... ngeteh lah');

       }

});






 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
