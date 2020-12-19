const dbd = require("dbd.js")

 

const bot = new dbd.Bot({

token: "Nzg1MTU2MTQwNzQ5MDI5Mzg3.X8zvow.kSWl1ipjBSMohvS2o2nyqVCm2_g", 

prefix: "." 

})

 

bot.onMessage()

 

bot.command({

name: "ping", 

code:  `Pong! \`$ping\`` 

})

bot.status({

      text: "YOU",

      type: "WATCHING",

      time: 60
   

})

bot.status({

      text:  ".help",

      type: "PLAYING",

      time: 60

})

bot.status({

      text:  "Over $allmemberCount Members",

      type: "WATCHING",

      time: 60

})


bot.command({

 name: "stop",

aliases: [`s`],

 code: `🎶Stopped playing $songInfo[title]🔴. $stopSong

$onlyIf[$voiceID!=;🎶To stop music, please join a vc.. ]`

});

bot.command({

 name: "pause",

code: `🎶Successfully paused the song $pauseSong

$onlyIf[$voiceID!=;To pause music, please join a VC.]`

});

bot.command({

 name: "resume",

aliases: [`r`],

 code: `$resumeSong Successfully🎶 resumed the song .

$onlyIf[$voiceID!=;To resume music, please join a VC.]`

});

bot.command({

 name: "play",

aliases: [`p`],

 code: `Now playing🎶🎶 $songInfo[title]

 $playSong[$message;No song found.]

$onlyIf[$voiceID!=;To play music, please join a VC.]`

});

bot.command({

 name: "queue",

aliases: [`q`],

 code: `$title[Queue]

$description[$queueLength songs in queue 

$queue[1]

$queue[2]

$queue[3]

$queue[4]

$queue[5]

$queue[6]

$queue[7]

$queue[8]

$queue[9]

$queue[10]]

$footer[For more songs to show, use the longqueue command😇.]

$color[RANDOM]

$suppressErrors[😭Couldn't find songs. Or there are no songs in the queue. ]`

});

bot.command({

 name: "volume",

aliases: [`vol`],

 code: `🔊Successfully set (Take Care Of Your Hears) 🎶the volume to $message🎼.

$volume[$message]

$suppressErrors[What do you want your volume set as?🔈 use a number .]`

});

bot.command({

 name: "now playing",

aliases: [`np`],

 code: `Currently playing🎶: $songInfo[title], Requested by🎼 $username[$songInfo[userID]].

Description: $songInfo[description]

Duration: $parseDate[$multi[$songInfo[duration];1000];time]

URL to Video: $songInfo[url] 🎶`

});
bot.command({

name: "help", 

code: `$title[🎶🎶🎶HELP COMMAND🎶🎶🎶]

$description[

BOT COMMANDS:

Prefix (.)


1.**play p**
  To Play Music Or YouTube Link(no playlists)
2.*stop s**
  To Stop Music

3.**resume r**
  To Resume Paused Song

4.**pause**
  To Pause The Song

5.**now playing np**
  Info About Now Playing Song

6.**volume vol**
  To Increase Volume

7.**Queue q**
  To Know Songs In Queue

8.**skip**
   To Skip Songs
9.**loop**
    To Loop The Queue]

$footer[Aᴘᴘᴜᴋᴜᴛᴛᴀɴ#0666 ]
$addTimestamp

$color[83C492]`

})


bot.command({

  name: "say",

  code: `$message

$deletecommand

$onlyPerms[admin;only Admin can use this command]`

});
bot.command({
 name: "loop",
 code: `
 $title[Loop]
 $thumbnail[$userAvatar[$authorID]]
 $color[f1f0f0]
 $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop Enabled!];false;Loop disabled!]]
 $onlyIf[$voiceID!=;You are not in a VC!]`
 });
bot.command({

name: "skip",

code: `

**✅ Skiped**

$skipSong

$onlyIf[$voiceID!=;**❌ | You are not in voice channel.**]

`

})
bot.command({
    name: "an",
    code:
`$thumbnail[$serverIcon]
$title[**Tony StarK GaminG|Announcement**]
 $description[$message]
 $image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
 $footer[TonY StarK• Announced by: $username] 
$onlyPerms[admin;only admin command]

 $addTimestamp
 $deletecommand`
})