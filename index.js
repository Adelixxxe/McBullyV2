const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
var cli = new Discord.Client({autoReconnect:true});
var servers = {};
var id = 0
var check = false
var insultes = [
/*01*/     "Parle pas !",
/*02*/     "Ferme la gros porc !",
/*03*/     "Ta mère c'est ta soeur.",
/*04*/     "Tous le monde s'en bas les couilles de ce que tu dis :/",
/*05*/     "Je te pousse tu roules.",
/*06*/     "Ta gueule.",
/*07*/     "Au lieu de parler vas faire du sport.",
/*08*/     "Non.",
/*09*/     "Ciao ?",
/*10*/     "Je vais te tacler dans la bouche si tu continues a parler gros tas.",
/*11*/     "Ta soeur la caravane.",
/*12*/     "À part ça, le cholestérol, ça va ? ",
/*13*/     "Ferme-la et va manger.",
/*14*/     "Tu sais faire autre chose a part ouvrir ta gueule ?",
/*15*/     "Mais du coup, en avion tu pars en soute ? :thinking:",
/*16*/     "Arrête de me parler !",
/*17*/     "T'as toujours pas compris ?",
/*18*/     "T'as vraiment le QI d'un tabouret...",
/*19*/     "сука блять",
/*20*/     "Ça fait quoi d'être une sous-race ?",
/*21*/     "Suce mes couilles.",
/*22*/     "Tu es tellement gros qu'il te faut un GPS pour trouver ton nombril.",
/*23*/     "T'es qu'une merde.",
/*24 */     "Arrête de rager.",
/*25*/     "T'es qu'un sanglier humain.",
/*26*/     "Du coup si tu fais le poirier, t u t'étouffes ?",
/*27*/     "C'est pas un peu bizarre d'avoir deux artères bouchées et de rester en vie ?",
/*28*/     "Pourquoi tu gonfles tes joues?",
/*29*/     "T'es grosse Mélissandre",
           "Va crever stp."
];

const maximum = 30;

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log(" McBully https://discordapp.com/oauth2/authorize?client_id=455107086418837524&scope=bot&permissions=104324160")
});

bot.on('ready', () => {
    bot.user.setPresence({game: {name: "Bully Simulator @Adelixxe", type: 0}});
});

bot.on('message', message => {
    if (message.content === "*mcbully" && message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send("C'est quoi l'id du garnement qui t'ennuie ? Tu as 30 secondes pour me donner son ID.")
    .then(() => {
      message.channel.awaitMessages(() => true, {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          id = collected.first().content
          message.channel.send("Bully en Cours !")
          check = true
        })
        .catch(() => {
          message.channel.send("Trop tard.");
          check = false
        });
    });
    }
         if(message.author.id === (id) && (check = true)) {
        j = Math.floor(Math.random() * 11);
        if (j % 2 == 0) {
            i = Math.floor((Math.random() * maximum) + 1);
            console.log(i);
            message.reply(insultes[i]);
        }
    }

    if (message.content === "*mcbully clear" && message.member.hasPermission("ADMINISTRATOR")) {
        check = false
        id = 0
        message.channel.send("ID Clear.");
    }
});



bot.login(process.env.BOT_TOKEN);
