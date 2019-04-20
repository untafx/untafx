const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'luciddream') {

       message.reply('No, no, no
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you so I must replace you (oh)
Easier said than done
I thought you were the one
Listening to my heart instead of my head
You found another one, but
I am the better one
I won't let you forget me
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you so I must replace you (oh)
Easier said than done
I thought you were the one
Listening to my heart instead of my head
You found another one, but
I am the better one
I won't let you forget me
You left me falling and landing inside my grave
I know that you want me dead
I take prescriptions to make me feel a-okay
I know it's all in my head
I have these lucid dreams where I can't move a thing
Thinking of you in my bed
You were my everything
Thoughts of a wedding ring
Now I'm just better off dead
I'll do it over again
I didn't want it to end
I watch it blow in the wind
I should've listened to my friends
Did this shit in the past
But I want it to last
You were made outta plastic (fake)
I was tangled up in your drastic ways
Who knew evil girls have the prettiest face?
You gave me a heart that was full of mistakes
I gave you my heart and you made heart break
You made my heart break
You made my heart ache (I still see your shadows in my room)
You made my heart break
You made my heart ache (can't take back the love that I gave you)
You made my heart break (were made outta plastic, fake)
You made my heart ache (I still see your shadows in my room)
You made my heart break again (I was tangled up your drastic ways)
(Who knew evil girls have the prettiest face?)
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you so I must replace you (oh)
Easier said than done
I thought you were the one
Listening to my heart instead of my head
You found another one, but
I am the better one
I won't let you forget me
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you so I must replace you (oh)
Easier said than done
I thought you were the one
Listening to my heart instead of my head
You found another one, but
I am the better one
I won't let you forget me
Did this shit in the past but I want it to last
You were made outta plastic (fake)
I was tangled up in your drastic ways
Who knew evil girls have the prettiest face?
Easier said than done
I thought you were
(Instead of my head, you found another)
I won't let you forget me');

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

client.on('message', message => {

    if (message.content === 'gak tau males') {

       message.reply('Pengen beli truck!');

       }

});

client.on('message', message => {

    if (message.content === 'nolife') {

       message.reply('No life sendiri terdiri dari dua kata yang terdapat di dalam bahasa inggris. Kata tersebut yakni "No" dan juga kata "life". Kata no sendiri didalam bahasa indonesia dapat diartikan sebagai "tidak", dan kata life dapat diartikan sebagai "hidup / kehidupan". Jadi kedua kata tersebut, secara bahasa, secara kasar dapat diartikan sebagai "Tidak hidup" atau lebih mudahnya "Tidak memiliki kehidupan". Nah, dari arti kata nolife saja kita sudah mengetahui secara kasar mengenai definisi kata nolife yang sebenarnya.');

       }

});

client.on('message', message => {

    if (message.content === 'sabar') {

       message.reply('Orang sabar pantatnya lebar :v');

       }

});







 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
