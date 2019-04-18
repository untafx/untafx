const Discord = require('discord.js');

const client = new Discord.Client();


 

client.on('ready', () => {

    console.log('I am ready!');
    
});

 

client.on('message', message => {

    if (message.content === '//news') {

      var embed = new.Discord.RichEmbed()
        .setDescription("Test");
      message.channel.sendEmbed(embed)

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
