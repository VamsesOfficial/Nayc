/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Contact Me on wa.me/6285849261085
 * Original https://github.com/DikaArdnt
 * Remake : Pebri
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')

const fs = require('fs')
const util = require('util')
const path = require('path')
const yts = require("yt-search");
const dl = require('@bochilteam/scraper');
const JoApi = require('@phaticusthiccy/open-apis')
const { Configuration, OpenAIApi } = require("openai")
const axios = require('axios')
const cheerio = require('cheerio')
const rmvbg = require('removebg-wrapper')
const ms = require("ms")
const moment = require("moment-timezone");
const { config, createAudioFromText } = require('tiktok-tts')
const { color } = require('./lib/color.js')
const { pinterest } = require("./lib/pinterest.js")
const { webp2mp4File } = require("./lib/cv.js")
const { upload } = require("./lib/uploads.js")
const fetch = require('node-fetch')
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game.js");
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { twitter } = require("./lib/scraper/twitter.js")
const { yta } = require('./lib/yta.js')
const { exec, spawn, execSync } = require("child_process")
const _prem = require("./lib/premium");
const Replicate = require('replicate')
  const replicate = new Replicate({
  auth: "r8_bfR97gOX91GIY1zvWc5c4NneELAwhOp4PDMz4", //Api Gueh
});


// Game
let tebakgambar = []
let tebakkata = []
let siapakahaku = []
let caklontong = []
let tebaklagu = []

//ssession tt
const tiktokresi = "38e8b06bb16922b0829e4a65bce3af7c" //Api Punya Gua anjing


/*const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: `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`,
});
const openai = new OpenAIApi(configuration);*/
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, otpkode, makeid, getRandom, getGroupAdmins } = require('./lib/function')


/// DATABASE
let antilink = JSON.parse(fs.readFileSync('./assets/db/antilink.json'));
let premium = JSON.parse(fs.readFileSync('./assets/db/premium.json'));

module.exports = bob = async (bob, m, chatUpdate, store) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const content = JSON.stringify(m.message)
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix

        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bob.decodeJid(bob.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        const isMedia = /image|video|sticker|audio/.test(mime)

        const chats = m.type === "conversation" && m.message.conversation ? m.message.conversation : m.type === "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : m.type === "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : m.type === "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : m.type === "buttonsResponseMessage" && quotedMsg.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : 
        m.type === "templateButtonReplyMessage" && quotedMsg.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.type === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId : m.type === "listResponseMessage" && quotedMsg.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : "";

        // Group
        const groupMetadata = m.isGroup ? await bob.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = groupAdmins.includes(m.sender)
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false

        //Extensi Media Message
        const isImage = (m.mtype == 'imageMessage')
		const isVideo = (m.mtype == 'videoMessage')
		const isSticker = (m.mtype == 'stickerMessage')
		const isAudio = (m.mtype == 'audioMessage')
		const isDocument = (m.mtype == 'documentMessage')
		const isQuotedMsg = (m.mtype == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    
        //Lain Lain
        const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
        
        //Fake
        const fake = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "status@broadcast" //status@broadcast
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `Hallo ${pushname} 👋\n╰≻ ${prefix + command}`,
                    "title": `Hmm`,
                    'jpegThumbnail': global.thumb
                }
            }
        }


        // Public & Self
        if (!bob.public) {
            if (!m.key.fromMe) return
        }

        //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null
        const time = moment(Date.now()).tz('Asia/Makassar').locale('id').format('DD/MM/YY HH:mm:ss z')
        const dt = moment(Date.now()).tz('Asia/Makassar').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1) + "👋"

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, bob, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command
                })
                } catch (e) {
                   m.reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }

        // function
        async function instagram(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
        // Anti link
        if (m.isGroup && !isCreator && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (body.includes(`https://chat.whatsapp.com`)) {
                bob.sendMessage(m.chat, {text: `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`})
                var number = m.sender
      bob.groupParticipantsUpdate(m.chat, [number], "remove")
            }
        }
        const reply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: m})
		}
        const sendbut = (jid, text, pref, textbut, footer) => {
			let buttons = [{ buttonId: pref, buttonText: { displayText: textbut }, type: 1 }]
            let buttonMessage = {text: text, footer: footer, buttons: buttons, headerType: 2 }
            bob.sendMessage(jid, buttonMessage, { quoted: m })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function ngetag(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = bob.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = bob.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return bob.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}

        async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
        
        const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
    }
    
    // GAME 
    cekWaktuGame(bob, tebakgambar)
    if (isPlayGame(m.chat, tebakgambar) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakgambar)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakgambar)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakgambar`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakgambar.splice(getGamePosi(m.chat, tebakgambar), 1)
    }
    }
    cekWaktuGame(bob, tebakkata)
    if (isPlayGame(m.chat, tebakkata) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakkata)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakkata)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakkata`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakkata.splice(getGamePosi(m.chat, tebakkata), 1)
    }
    }
    cekWaktuGame(bob, siapakahaku)
    if (isPlayGame(m.chat, siapakahaku) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, siapakahaku)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, siapakahaku)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /siapakahaku`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    siapakahaku.splice(getGamePosi(m.chat, siapakahaku), 1)
    }
    }
    cekWaktuGame(bob, caklontong)
    if (isPlayGame(m.chat, caklontong) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, caklontong)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, caklontong)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /caklontong`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    caklontong.splice(getGamePosi(m.chat, caklontong), 1)
    }
    }
    cekWaktuGame(bob, tebaklagu)
    if (isPlayGame(m.chat, tebaklagu) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebaklagu)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebaklagu)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebaklagu`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebaklagu.splice(getGamePosi(m.chat, tebaklagu), 1)
    }
    }
    //Akhir
    
    // Premium
    _prem.expiredCheck(bob, premium)
    let yutu = `https://youtu${m.text.slice(13)}`

if (m.text.includes(yutu)) {
var url = yutu
var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
var dl_url = await yt.audio['128kbps'].download()
bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, mimetype: 'audio/mp4', caption: yt.title}, {quoted: m})
}
let tt = `https://vt.tiktok${m.text.slice(17)}`

if (m.text.includes(tt)) {
var url = tt
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let tt2 = `https://www.tiktok.com/${m.text.slice(23)}`

if (m.text.includes(tt2)) {
var url = tt2
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let tt3 = `https://vm.tiktok${m.text.slice(17)}`

if (m.text.includes(tt3)) {
var url = tt3
dl.savefrom(url).then ( data => {
reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
})
}
let fbdl = `https://www.facebook.com/${m.text.slice(25)}`

if (m.text.includes(fbdl)) {
var url = fbdl
dl.savefrom(url).then ( data => {
reply(`*[ FACEBOOK ]*\n\nTitle : ${ data[0].meta.title}\nSize : HD\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].hd.url}, caption: data[0].meta.title})
})
}
let igdl = `https://www.instagram.com/${m.text.slice(26)}`

if (m.text.includes(igdl)) {
var url = igdl
reply(`*[ INSTAGRAM ]*\n\n_Wait A Minute._`)
instagram(url).then( data => {
for ( let i of data ) {
if (i.type === "video") {
bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
} else if (i.type === "image") {
bob.sendMessage(m.chat, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }})
}
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let twt = `https://twitter.com/${m.text.slice(20)}`

if (m.text.includes(twt)) {
var url = twt
dl.savefrom(url).then( data => {
reply(`*[ TWITTER ]*\n\nTitle : ${data[0].meta.title}\n\n_Wait A Minute._`)
if (data[0].url[1].type === "mp4") {
bob.sendMessage(m.chat, {video: {url: data[0].url[1].url}})
} else if (data[0].url[1].type === "jpg") {
bob.sendMessage(m.chat, {image: { url: data[0].url[1].url }})
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let cp = `https://www.capcut.com/${m.text.slice(23)}`

if (m.text.includes(cp)) {
var url = cp
capcut(url).then ( data => {
reply(`*[ CAPCUT ]*\n\nUsername : ${data.nama}\nUsed : ${data.used} Pemakai\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data.video}, caption: `${data.used} Telah Di Pakai`})
} )
}

let mediafired = `https://www.mediafire.com/${m.text.slice(26)}`

if (m.text.includes(mediafired)) {
var url = mediafired
dl.mediafiredl(url).then ( data => {
reply(`*[ MEDIAFIRE ]*\n\nName : ${data.filename}\nSize : ${data.filesizeH}\nFormat : ${data.ext}\nFileType :  ${data.filetype}\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {document: {url: data.url}, fileName: data.filename, mimetype: 'zip', caption: data.filename}, {quoted: m})
} )
}
    
        // Push Message To Console && Auto Read
        if (m.message) {
            bob.readMessages([m.key])           
        }


        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))

const menuku = 
`*Nama Bot :* ${global.botName}
*Nama Owner :* ${global.ownerName}
*Tanggal :* ${tgl}
*Jam :* ${jam} WIB

_*NOTE* : 🎀 Bot Masih Dalam Pengembangan, Jika Menemukan Bug/Fitur Error Harap Dimaklumi_\n\n➣ https://instagram.com/ketutaguss_

╭─▸ *OTHER MENU*
│⭔${prefix}quotes
│⭔${prefix}delete _< Reply Message Bot >_
│⭔${prefix}pinterest _< Nama Gambar >_
│⭔${prefix}tourl _< Reply Gambar >_
│⭔${prefix}menfess _< 628XX|Text >_
│⭔${prefix}sticker _< Reply Gambar >_
│⭔${prefix}stcmeme _< Text Atas|Text Bawah >_
│⭔${prefix}stcmeme2 _< Text >_
│⭔${prefix}memegen _< Reply Gambar >_
│⭔${prefix}toimg _< Reply Sticker >_
│⭔${prefix}ssweb _< Link >_
│⭔${prefix}infogempa
│⭔${prefix}news
│⭔${prefix}tstik _< Text >_
│⭔${prefix}removebg _< Reply Gambar >_
│⭔${prefix}qc _< Text >_
│⭔${prefix}tohd < Reply Image >
│⭔${prefix}take < PackName|Author >
│⭔${prefix}take < Text >
╰────────────˧

╭─▸ *MAKER MENU*
│⭔${prefix}sketch-logo _< Text >_
│⭔${prefix}comic-logo_< Text >_
│⭔${prefix}water-logo _< Text >_
│⭔${prefix}style-logo _< Text >_
│⭔${prefix}runner-logo _< Text >_
│⭔${prefix}starwars-logo _< Text >_
╰────────────˧

╭─▸ *GAME MENU*
│⭔${prefix}tebakgambar
│⭔${prefix}tebakkata
│⭔${prefix}siapakahaku
│⭔${prefix}tebaklagu
╰────────────˧

╭─▸ *OWNER MENU*
│⭔${prefix}setpp _< Reply Gambar >_
│⭔${prefix}setexif _< PackName|Author >_
│⭔${prefix}join _< Link Gc Wa >_
│⭔${prefix}leave
│⭔${prefix}addplugins
│⭔${prefix}deleteplugins
│⭔${prefix}public
│⭔${prefix}self
│⭔${prefix}block _< 629XXX >_
│⭔${prefix}unblock _< 628XXX >_
│⭔${prefix}clearall
╰────────────˧

╭─▸ *GROUP MENU*
│⭔${prefix}setppgc _< Reply Gambar >_
│⭔${prefix}antilink _< Enable/Disable >_
│⭔${prefix}hidetag _< Text >_
│⭔${prefix}tagall _< Pesan >_
│⭔${prefix}kick _< Reply Chat >_
│⭔${prefix}add _< Reply Chat >_
│⭔${prefix}setname _< Text >_
│⭔${prefix}setdesc _< Text >_
│⭔${prefix}open 
│⭔${prefix}locked
│⭔${prefix}unlocked
│⭔${prefix}close
│⭔${prefix}promote _< Reply Chat >_
│⭔${prefix}demote _< Reply Chat >_
╰────────────˧

╭─▸ *DOWNLOADER MENU*
│⭔${prefix}igstory _< Username >_
│⭔${prefix}mediafire _< Link MediaFire >_
│⭔${prefix}ytsearch _< Judul Lagu >_
│⭔${prefix}ytmp3 _< Link Youtube >_
│⭔${prefix}ytmp4 _< Link Youtube >_
│⭔${prefix}igdl _< Link Instagram >_
│⭔${prefix}play _< Judul Lagu >_
│⭔${prefix}tiktok _< Link TikTok >_
╰────────────˧
`
//_< Link MediaFire >_
/*if (!chats) {
    try {
        var url = chats
    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
    var dl_url = await yt.audio['128kbps'].download()
    bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE MP3 ]*\n\nTitle : ${yt.title}\nSize : 128kbps\n_Audio Sedang Dikirim..._`})
    bob.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: 'audio/mp4'}, {quoted: m})
    } catch (e) {
        console.log(`awok`)
    } 
}*/
        switch (command) {
case 'openai':
case 'ai': {
          if (!q)
            return reply(
              `Yaa? Ada yang bisa saya bantu?\nContoh :\n${
                prefix
              } ai apa itu bot wa`
            );
          await reply('Tunggu Sebentar..');
          try {
            const configuration = new Configuration({
              apiKey: "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",
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: q }],
            });
            reply(response.data.choices[0].message.content);
          } catch (error) {
            if (error.response) {
              console.log(error.response.status);
              console.log(error.response.data);
              console.log(`${error.response.status}\n\n${error.response.data}`);
            } else {
              console.log(error);
              m.reply("Maaf, sepertinya ada yang error :" + error.message);
            }
          }
        }
        break 
            /*case 'menu': {
                const plugins = []
                let pluginFolder = path.join(__dirname, 'command')
                let pluginFilter = filename => /\.js$/.test(filename)
                for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
                    try {
                        plugins.push(plugins[filename] = require(path.join(pluginFolder, filename)))
                    } catch (e) {
                        console.log(e)
                        delete plugins[filename]
                    }
                }           
                const yaml = require('js-yaml')
                const commandsByCategory = {}
                const uncategorizedCommands = []

                plugins.forEach(plugin => {
                    const { CmD, categori } = plugin
                    if (!categori) {
                        uncategorizedCommands.push(...CmD)
                        return
                    }
                    if (!commandsByCategory[categori]) {
                        commandsByCategory[categori] = []
                    }
                    commandsByCategory[categori].push(...CmD)
                })

                const commandList = Object.entries(commandsByCategory).map(([category, commands]) => {
                    const indentedCommands = commands.map(cmd => `  │⭔${cmd}`).join('\n\n')
                    const final = `${category} :\n${indentedCommands}\n`
                    return final;
                })
                const pickRandom = (arr) => {
                    return arr[Math.floor(Math.random() * arr.length)]
                }

                if (uncategorizedCommands.length) {
                    const indentedUncategorizedCommands = uncategorizedCommands.map(cmd => `  │⭔${cmd}`).join('\n')
                    commandList.push(`Uncategorized commands:\n${indentedUncategorizedCommands}`)
                }

                const commandOutput = commandList.join('\n\n')
                const hsl = (yaml.dump(yaml.load(commandOutput)))
                
                var button = [{ buttonId: ".owner", buttonText: { displayText: `Owner 👤` }, type: 1 }]
                        var img = fs.readFileSync('./media/icon.jpg')
                        console.log(img)
                        bob.sendMessage(m.chat, { caption: `*NEW JO ~*\n\n` + menuku, image: img, buttons: button, footer: `~ @arsrfii`}, { quoted : m })
            }
            break */   
           
            case 'addplugins': {
                if (!isCreator) return reply(mess.owner)
                  let name = q.split("|")[0]
                  let isi = q.split("|")[1]
                  if(!name) return reply("plugins name?")
                  if(!isi) return reply("the code?")
const Structure = `//** ${name}

${isi}

`            
            fs.writeFile(`./command/${name}.js`, Structure, (err) => { if (err) throw err; });    
            reply('success')        
            }
            break 
            case 'owner': {
                sendContact(m.chat, global.owner[0], 'Arasyaa')
            }
            break
            case 'deleteplugins': {
                if (!isCreator) return reply(mess.owner)
                if (!q) return reply('masukan nama plugin')
                  try{ 
                    fs.unlinkSync(`./command/${q}.js`) 
                  } catch (e) { 
                    reply('terjadi kesalahan *(⁠>⁠0⁠<⁠；⁠)*\nhallo owner perhatian nama plugins yang ingin di hapus') 
                }
                reply('success')
            }
            break

            case 'btn': {

                result = 'tes'
                let buttons = [{
                    buttonId: `quotesanime`,
                    buttonText: {
                        displayText: 'Next'
                    },
                    type: 1
                }]
                
                bob.send5ButLoc(m.chat, 'anu', 'yah', global.thumb, buttons)
                        
              /*  let buttonMessage = {
                    text: `*>_Tes*`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                bob.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })*/
            }
            break    
            case 'menu': case 'dashboard': case 'help': case 'm': {
            	let send = {
          text: menuku,          
          mimetype: 'application/pdf',
          contextInfo:{
           externalAdReply:{
             title: ucapanWaktu,
             body: `${time}`,
             thumbnail: fs.readFileSync('./media/logo.png'),
             sourceUrl: "https://instagram.com/ketutaguss_",
             mediaUrl: "https://instagram.com/ketutaguss_",
             renderLargerThumbnail: true,
             showAdAttribution: false,
             mediaType: 1
            }
           }
         }
                bob.sendMessage(m.chat, send, {quoted: fake})
                }
                break
            case 'public': {
                if (!isCreator) throw mess.owner
                bob.public = true
                reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                bob.public = false
                reply('Sukses Change To Self Usage')
            }
            break

            case 'otpkode': case 'kodeotp': case 'getotp': {
                var kodeku = otpkode(5)
                
                let buttons = [{ buttonId: `/thx ${kodeku}`, buttonText: { displayText: 'Terima Kasih :>' }, type: 1 }]

                let buttonMessage = {
                    text: "Kode OTP Kamu :\n\n" + `MYOTP${kodeku}`,
                    footer: 'APPM',
                    buttons: buttons,
                    headerType: 2
                }
                bob.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
                break;
                case 'thx': {
                    reply(`${q}`)
                }
                break

                //Flaming Logo
                case 'sketch-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #sketch-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                case 'comic-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #comic-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=comics-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                case 'water-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #water-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                case 'style-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #style-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=style-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                case 'runner-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #runner-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                case 'starwars-logo': {
                    if (!q) throw (`Silahkan Masukan Text\nExample : #starwars-logo arasyaku`)
                    reply('Tunggu Sebentar!\nSedang Membuat 🔃')
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=star-wars-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${q}`}}, {quoted: m})
                }
                    break
                    // Game
                    case 'tebakgambar': {
                    if (isPlayGame(m.chat, tebakgambar)) return reply(m.chat, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(m.chat, tebakgambar)].m)
                    var tg = JSON.parse(fs.readFileSync('./assets/tebakgambar.json'))
                    var data = pickRandom(tg)
                    data.jawaban = data.jawaban.split('Jawaban ').join('')
                    var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nDeskripsi : ${data.deskripsi}\nWaktu : ${global.gamewaktu} Detik`)
                    bob.sendMessage(m.chat, {caption: teks, image: {url: data.img}}, {quoted: m})
                    .then( res => {
                    var jawab = data.jawaban.toLowerCase()
                    addPlayGame(m.chat, 'TEBAK GAMBAR', jawab, global.gamewaktu, res, tebakgambar)
                    })}
                    break
                    case 'tebakkata': {
                    if (isPlayGame(m.chat, tebakkata)) return bob.reply(m.chat, `Masih ada game yang belum diselesaikan`, tebakkata[getGamePosi(m.chat, tebakkata)].m)
                    var tg = JSON.parse(fs.readFileSync('./assets/tebakkata.json'))
                    var data = pickRandom(tg)
                    data.jawaban = data.jawaban.split('Jawaban ').join('')
                    var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nDeskripsi : ${data.soal}\nWaktu : ${global.gamewaktu} Detik`)
                    bob.sendMessage(m.chat, {text: teks}, {quoted: m})
                    .then( res => {
                    var jawab = data.jawaban.toLowerCase()
                    addPlayGame(m.chat, 'TEBAK KATA', jawab, global.gamewaktu, res, tebakkata)
                    })}
                    break
                    case 'siapakahaku': {
                    if (isPlayGame(m.chat, siapakahaku)) return bob.reply(m.chat, `Masih ada game yang belum diselesaikan`, siapakahaku[getGamePosi(m.chat, siapakahaku)].m)
                    var tg = JSON.parse(fs.readFileSync('./assets/siapakahaku.json'))
                    var data = pickRandom(tg)
                    data.jawaban = data.jawaban.split('Jawaban ').join('')
                    var teks = `*SIAPA AKU?*\n\n`+monospace(`Deskripsi : Siapakah aku? ${data.soal}\nPetunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${global.gamewaktu} Detik`)
                    bob.sendMessage(m.chat, {text: teks}, {quoted: m})
                    .then( res => {
                    var jawab = data.jawaban.toLowerCase()
                    addPlayGame(m.chat, 'SIAPAKAH AKU?', jawab, global.gamewaktu, res, siapakahaku)
                    })}
                    break
                    case 'caklontong': {
                    if (isPlayGame(m.chat, caklontong)) return bob.reply(m.chat, `Masih ada game yang belum diselesaikan`, caklontong[getGamePosi(m.chat, caklontong)].m)
                    var tg = JSON.parse(fs.readFileSync('./assets/caklontong.json'))
                    var data = pickRandom(tg)
                    data.jawaban = data.jawaban.split('Jawaban ').join('')
                    var teks = `*CAK LONTONG*\n\n`+monospace(`Deskripsi : ${data.soal}\nPetunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${global.gamewaktu} Detik`)
                    bob.sendMessage(m.chat, {text: teks}, {quoted: m})
                    .then( res => {
                    var jawab = data.jawaban.toLowerCase()
                    addPlayGame(m.chat, 'SIAPAKAH AKU?', jawab, global.gamewaktu, res, caklontong)
                    })}
                    break
                    case 'tebaklagu': {
                    if (isPlayGame(m.chat, tebaklagu)) return bob.reply(m.chat, `Masih ada game yang belum diselesaikan`, tebaklagu[getGamePosi(m.chat, tebaklagu)].m)
                    var tg = JSON.parse(fs.readFileSync('./assets/tebaklagu.json'))
                    var data = pickRandom(tg)
                    data.jawaban = data.judul.split('Jawaban ').join('')
                    var teks = `*TEBAK LAGU*\n\n`+monospace(`Artis : ${data.artis}\nPetunjuk : ${data.judul.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : 5 Menit`)
                    bob.sendMessage(m.chat, {audio: {url: data.url}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
                    bob.sendMessage(m.chat, {text: teks}, {quoted: m})
                    .then( res => {
                    var jawab = data.judul.toLowerCase()
                    addPlayGame(m.chat, 'TEBAK LAGU', jawab, 300, res, tebaklagu)
                    })}
                    break
                    // Akhir Game
                    //Lain Lain
                    case 'removebg': case 'rb':{
                    if (!isQuotedImage && !isImage)return reply(`Kirim Gambar dengan caption ${CmD} atau reply gambar dengan text ${CmD}!`)
                    if (isQuotedImage || isImage ) {
                    reply(global.mess.wait + `\nTunggu 5 Detik`)
                    var tete = await downloadAndSaveMediaMessage('image', 'rmvbg.jpg')
                    var tot = await upload(fs.readFileSync('rmvbg.jpg'))
                    rmvbg.rbFromImageUrl(tot, `k4jvHw9V9kkFEptijkNPUdfc`) //ini api punya guehhhhh
                    await sleep(5000)
                    bob.sendMessage(m.chat, {caption: `AI-` + otpkode(6) + `.png`, image: fs.readFileSync('output-2.png')}, {quoted: m})
                    }
                    fs.unlinkSync('output-2.png')
                    fs.unlinkSync('rmvbg.jpg')
                    }
                    break
                    case 'toimg':{
                        if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
                        m.reply('Wait bang...')
                        let media = await bob.downloadAndSaveMediaMessage(qmsg)
                        let ran = await getRandom('.png')
                        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buffer = fs.readFileSync(ran)
                            bob.sendMessage(m.chat, { image: buffer }, { quoted: m })
                            fs.unlinkSync(ran)
                        })
                    }
                    break
                    case 'quotes': {
                        var kotes2 = JSON.parse(fs.readFileSync('./assets/quotes.json'))
                        var hasil = pickRandom(kotes2)
                        var img = fs.readFileSync('./media/icon.png')
                        console.log(img)
                        bob.sendMessage(m.chat, {text: hasil.quotes + `\n\n` + `~ ${hasil.author}`}, {quoted: m})
                    }
                    break
                    case 'tts': case 'sbot' :{
                        if (!args.length === "12") return reply(`Text Terlalu Panjang`)
                        config(tiktokresi);
                        createAudioFromText(q, 'myAudio', 'id_001')
                        await sleep(3000)
                        bob.sendMessage(m.chat, {audio: fs.readFileSync(`myAudio.mp3`), mimetype: 'audio/mp4', ptt: true}, {quoted: m})
                    }
                    break
                    case 'menfess': {
                        var number = q.split('|')[0] ? q.split('|')[0] : q
                        var textnyaku = q.split('|')[1] ? q.split('|')[1] : ''
                        if (m.isGroup)return reply('Hanya Bisa Di Gunakan Private Message')
                        if (!q) return reply(`Masukan Text!\nExample : ${prefix}menfess no|pesan`)
                        var caption = `*[ FITUR BOT MENFESS/SURAT ]*\n\nDari : Tidak Diketahui\nUntuk : Kamu\nPesan : *${textnyaku}*`
                        var button = [{ buttonId: `.cnfrmmen ${m.sender}`, buttonText: { displayText: `Menfess Confirmasi` }, type: 1 }]
                        var img = fs.readFileSync('./media/surat.jpeg')
                        bob.sendMessage(number.replace(/[-|+| |]/gi, '') + "@s.whatsapp.net", {image: img, caption: caption})
                        reply('Menfess Berhasil Terkirim.')
                    } 
                    break
                    case 'addimg': {
                        if (!isQuotedImage ) return reply('Reply Imagenya!')
                        if (isQuotedImage || isImage ) {
                            var mediaku = await downloadAndSaveMediaMessage("image", "tes.jpg")
                            }
                    }
                    break
                    /*Pin Err
                    case 'pinterest': case 'pin': {
                        if (!q) return reply(`Masukan Text\nExample : ${prefix}pinterest Pegunungan`)
                        var jumlah;
                        if (q.includes('--')) jumlah = q.split('--')[1]
                        pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                          if (q.includes('--')) {
                            if (data.result.length < jumlah) {
                              jumlah = data.result.length
                              reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
                            }
                            for (let i = 0; i < jumlah; i++) {
                                reply('Sedang Mencari 🔎....')
                              bob.sendMessage(m.chat, { image: { url: data.result[i] }})
                            }
                          } else {
                            reply(global.mess.wait)
                            var button = [{ buttonId: `#pinterest ${q}`, buttonText: { displayText: `Next ➡️` }, type: 1 }]
                        bob.sendMessage(m.chat, {image: {url: pickRandom(data.result)}}, {quoted: m})
                          }
                        })
                        
                    }
                    break*/
                    case 'pinterest': case 'pin': {
                        reply(global.mess.wait)
                        if (!q) return reply(`Masukan Text\nExample : ${prefix}pinterest Pegunungan`)
                        dl.pinterest(q).then ( data => {
                            bob.sendMessage(m.chat, {image: {url: data[0]}, caption: `Result : ` + q})
                        }) 
                    }
                    break
                    case 'esrgan': case 'tohd': case 'bagusin':{
                        if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${CmD}`)
                        reply(global.mess.wait + `\nTunggu 1 Menit Kurang`)
                        try {
                            const data = await quoted.download()
                            // Convert the buffer into a base64-encoded string
                            bob.sendMessage(m.chat, {react: { text: '⏳', key: m.key}})
                            const base64 = data.toString("base64");
                             //Set MIME type for PNG image
                            const mimeType = "image/png";
                             //Create the data URI
                            const dataURI = `data:${mimeType};base64,${base64}`;
                            const model = "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b";
                            const input = {
                              image: dataURI,
                            };
                            const output = await replicate.run(model, { input });
                            console.log(output)
                            bob.sendMessage(m.chat, { caption: `Sukses!!`, image: { url: output} })
                            } catch (e) {
                            m.reply(`Eror! ukuran gambar terlalu besar atau tidak ada gambar yang dikirim dengan caption ${CmD}`)
                            }
                    }
                    break
                    case 'ssweb': case 'ss': {
                    if (!q) return reply(`Masukan Text!\nExample ${CmD} https://youtube.com`)
                    if (q.includes('xnxx') && q.includes('pornhub')) return reply("Bokep Mulu Pikiran nya")
                    reply(global.mess.wait)
                    bob.sendMessage(m.chat, {caption: q, image: {url: `https://image.thum.io/get/width/1900/crop/1000/fullpage/` + q}})
                    }
                    break
                    case 'gempa': case 'infogempa': {
                        dl.gempa().then ( data => {
                            var text = `*[ INFO GEMPA TERKINI ]*\n\n*Locate :* ${data[0].locate}\n*Warning :* ${data[0].warning[0]}\n*Tanggal :* ${data[0].date}\n*Magnitude :* ${data[0].magnitude}\n*Jarak :* ${data[0].depth}\n*Desk :* ${data[0].location}`
                            sendbut(m.chat, text, `#dashboard`, `Back To Menu 🔙`, tgl + ' ' + jam)
                            bob.sendMessage(m.chat, {text: text}, {quoted: m})
                        })
                    }
                    break
                    case 'news': case 'liputan6': {
                        if (!m.isGroup) {
                        
                        var teskd = `YOUTUBE SEARCH\n\n`
                        dl.liputan6().then ( data => {
                        var liput = data
                        var jumlah = 15
                        var list = []
                        for (let i = 0; i < jumlah; i++) {
                        list.push({
                        title: liput[i].title, rowId: `.liputanku ${liput[i].title}@${liput[i].link}@${liput[i].description}@${liput[i].label}`, description: liput[i].description})
                        }
                        var sections = [{title: `Hallo ${pushname} 👋`, rows:list}]
                        var listms = { text: `*NEWS BY CHONIX*\n\n` + monospace(`Baca Berita Hari Ini, Untuk Menginformasi Dan Mengupdate Seluruh Berita Indonesia Maupun Diluar Negara.`), footer: tgl + ' ' + jam, buttonText: "Tekan Disini", sections }
                        bob.sendMessage(m.chat, listms, {quoted:m})
                    })
                    } else if (m.isGroup) {
                    dl.liputan6().then( data => {
                        let liputku = data
                        var jumlah = 10
                        if (liputku.length < jumlah) jumlah = liputku.length
                        var no = 0
                        let txt = `*NEWS BY JO*\n\n` + monospace(`Baca Berita Hari Ini, Untuk Menginformasi Dan Mengupdate Seluruh Berita Indonesia Maupun Diluar Negara.`)
                        for (let i = 0; i < jumlah; i++) {
                        no += 1
                        txt += `\n\n\n*ツ No Urutan : ${no.toString()}*\nツ *Title :* ${liputku[i].title}\nツ *Link :* ${liputku[i].link}\nツ *Deskripsi :* ${liputku[i].description}\nツ *Label :* ${liputku[i].label}`
                        }
                        sendbut(m.chat, txt, `/menu`, `Back To Menu 🔙`, tgl + ' ' + jam)
                        })
                    }}
                    break
                    case 'liputanku': {
                    var title = q.split("@")[0]
                    var link = q.split("@")[1]
                    var desk = q.split("@")[2]
                    var label = q.split("@")[3]
                    var textnyah = `*NEWS BY CHONIX*\n\n` + monospace(`Baca Berita Hari Ini, Untuk Menginformasi Dan Mengupdate Seluruh Berita Indonesia Maupun Diluar Negara.\n\n`) + `ツ *Title :* ${title}\nツ *Link :* ${link}\nツ *Deskripsi :* ${desk}\nツ *Label :* ${label}\n`
                    sendbut(m.chat, textnyah, `/menu`, `Back To Menu 🔙`, tgl + ' ' + jam)
                    }
                    break
                    case 'sticker': case 's': case 'stickergif': case 'sgif': {
                        if (/image/.test(mime)) {
                             let media = await bob.downloadMediaMessage(qmsg)
                             let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                             await fs.unlinkSync(encmedia)
                         } else if (/video/.test(mime)) {
                         reply(global.mess.wait)
                             if (qmsg.seconds > 11) return reply('Maksimal 10 detik!')
                             let media = await bob.downloadMediaMessage(qmsg)
                             let encmedia = await bob.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                             await fs.unlinkSync(encmedia)
                         } else {
                             reply(`Kirim/Reply Gambar/Video/Gif Dengan Caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                      }
                         }
                         break
                         case 'take': case 'swm': case 'stickerwm': case 'ambil': {
                        try {
                        if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                            let packnem = q.split("|")[0]
                            let autor = q.split("|")[1]
                            if (/image/.test(mime)) {
                                 let media = await bob.downloadMediaMessage(qmsg)
                                 let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: packnem, author: autor })
                                 await fs.unlinkSync(encmedia)
                             } else {
                                 reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                          }
                             } catch (e) { if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                             let packnem = q.split("|")[0]
                             let autor = q.split("|")[1]
                             if (/image/.test(mime)) {
                                  let media = await bob.downloadMediaMessage(qmsg)
                                  let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: `VamsesOfficial`, author: `@Agus` })
                                  await fs.unlinkSync(encmedia)
                              } else {
                                  reply(`Kirim/Reply Gambar/Reply Sticker Dengan PackName Dan Author\nExample : ${CmD} ${pushname}|Sticker Aku`)
                           }}}
                             break
                    case 'tourl': {
                        if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}tourl`)
                        if ( isImage || isQuotedImage ) {
                            var mek = await downloadAndSaveMediaMessage(`image`, 'upload.jpg')
                            var tot = await upload(fs.readFileSync('upload.jpg'))
                            bob.sendMessage(m.chat, {text: `Sukses Membuat Link\nLink : ${tot}`}, {quoted: m})
                            fs.unlinkSync('upload.jpg')
                            } else if ( isVideo || isQuotedVideo ) {
                            reply(global.mess.wait)
                            var mek = await downloadAndSaveMediaMessage(`video`, 'upload.mp4')
                            var tot = await upload(fs.readFileSync('upload.mp4'))
                            bob.sendMessage(m.chat, {text: `Sukses Membuat Link\nLink : ${tot}`}, {quoted: m})
                            fs.unlinkSync('upload.mp4')
                            } else {
                              reply(`Kirim gambar/video dengan caption: ${command}`)
                            }
                    } 
                    break
                    case 'stcmeme': case 'smeme': {
                        if (!isImage && !isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}stcmeme Kamu|Wibu`)
                        let name = q.split("|")[0]
                        let isi = q.split("|")[1]
                        if (!name) return reply("Masukan Text Atas")
                        if (!isi) return reply("Masukan Text Bawah")
                        reply('Proses Membuat...')
                        if (isImage || isQuotedImage) {
                            var meme = await downloadAndSaveMediaMessage("image", "memegen.jpg")
                            var generator = await upload(fs.readFileSync('memegen.jpg'))
                            var link = await getBuffer(`https://api.memegen.link/images/custom/${name}/${isi}.png?background=${generator}`)
                            let encmedia = await bob.sendImageAsSticker(m.chat, link, m, { packname: global.packname, author: global.author })
                        } 
                        setTimeout( () => {
                            fs.unlinkSync(`memegen.jpg`) // ur cods
                            }, 5000) // 1000 = 1s,
                    } 
                    break
                    case 'stcmeme2': case 'smeme2': {
                        if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}stcmeme Kamu|Wibu`)
                        if (!q) return reply(`Masukan Text!\nExample : ${prefix}stcmeme2 Anjay`)
                        reply('Proses Membuat...')
                        if (isImage || isQuotedImage) {
                            var meme = await downloadAndSaveMediaMessage("image", "memegen.jpg")
                            var generator = await upload(fs.readFileSync('memegen.jpg'))
                            var link = await getBuffer(`https://api.memegen.link/images/custom/%E3%85%A4_/${q}.png?background=${generator}`)
                            let encmedia = await bob.sendImageAsSticker(m.chat, link, m, { packname: global.packname, author: global.author })
                            fs.unlinkSync('memegen.jpg')
                        }
                        setTimeout( () => {
                            fs.unlinkSync(`memegen.jpg`) // ur cods
                            }, 5000) // 1000 = 1s,
                    } 
                    break
                    case 'memegen': case 'memeg': {
                        if (!isImage && !isQuotedImage) return reply(`Reply Gambar Atau Kirim Gambar dengan caption ${prefix}memegen Kamu|Wibu`)
                        reply(global.mess.wait)
                        let name = q.split("|")[0]
                        let isi = q.split("|")[1]
                        if (!name) return reply("Masukan Text Atas")
                        if (!isi) return reply("Masukan Text Bawah")
                        if (isImage || isQuotedImage) {
                            var meme = await downloadAndSaveMediaMessage("image", "memeg.jpg")
                            var generator = await upload(fs.readFileSync('memeg.jpg'))
                            var link = await getBuffer(`https://api.memegen.link/images/custom/${name}/${isi}.png?background=${generator}`)
                            bob.sendMessage(m.chat, {image: link, caption: `${name} ${isi}`}, {quoted: m})
                            setTimeout( () => {
                                fs.unlinkSync(`memeg.jpg`) // ur cods
                                }, 5000) // 1000 = 1s,
                        }
                    } 
                    break
                    case 'tstik': case 'tstick': case 'ttp':{
                        if (!q) return reply(`Masukan Text!\nExample : ${CmD} Aku`)
                        reply(`Bentar`)
                        let encmedia = await bob.sendImageAsSticker(m.chat, `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=comics-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=160&text=${q}`, m, { packname: global.packname, author: global.author })
                    }
                    break
                    //GROUP MENU
                    case 'setppgc': case 'setppgrup':{
                    if (!isGroupAdmins) return reply(global.mess.admin)
                    if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    let mediaa = await quoted.download()
                    var { img } = await pepe(mediaa)
                    await bob.query({
                    tag: 'iq',
                    attrs: {
                    to: m.chat,
                    type:'set',
                    xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                    tag: 'picture',
                    attrs: { type: 'image' },
                    content: img
                    }
                    ]
                    })
                    reply(`Done`)
                    }
                    break
                    case 'antilink': {
                    if (!m.isGroup) return reply(global.mess.group)
                    if (!isGroupAdmins) return reply(global.mess.admin)
                    if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                if (q.toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Status Sudah Aktif.`)
                    antilink.push(m.chat)
					fs.writeFileSync('./assets/db/antilink.json', JSON.stringify(antilink))
					reply('Sukses Menyalakan Antilink Grup, Jika Ada Member Yg Send Link GC, BOT Akan KICK!')
                } else if (q.toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(m.chat)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./assets/db/antilink.json', JSON.stringify(antilink))
                    reply('Nonaktif.')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
                }
            }
                break
                case 'chat': case 'qc': case 'fm': {
                    try{
                        if (!q) return m.reply('Missing parameter text')
                        const name = pushname
                        let q1 = m.quoted ? m.quoted : m
                        let teks = q 
                        const avatar = await bob.profilePictureUrl(quoted.sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png")
                        let mime = (q1.m || q1).mimetype || '' 
                        
                        if (/image\/(jpe?g|png)/.test(mime)) { 
                        let media = await bob.downloadAndSaveMediaMessage(quoted,getRandom())
                        let anu = await upload(media)
                        const json = { type: "quote", format: "png", backgroundColor: "#4e4e4e", width: 512, height: 768,  scale: 3, messages: [{ entities: [], media: { url: anu.url }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replyMessage: {} }]}
                         const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
                            headers: {
                              "Content-Type": "application/json"
                            }
                          }).catch(e => e.response || {})
                          if(!data.ok) throw data
                        const buffer = Buffer.from(data.result.image, "base64")
                        
                        let encmedia2 = await bob.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })

                        sleep(1000)
                        fs.unlinkSync(media)
                        
                        } else {
                        const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: teks, replyMessage: {} }]}
                        const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
                            headers: {
                              "Content-Type": "application/json"
                            }
                          }).catch(e => e.response || {})
                          if(!data.ok) m.reply( data)
                        const buffer = Buffer.from(data.result.image, "base64")
                        let encmedia3 = await bob.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author })
                        }
                        } catch (e){
                            m.reply (`${e}`)
                            console.log(e)
                            return
                            }
                }
                break
                    case 'hidetag': {
                        if (!q) return reply(`Masukan Text\nExample : ${prefix}hidetag Hallo`)
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        let mem = [];
		        participants.map( i => mem.push(i.id) )
				bob.sendMessage(m.chat, { text: q ? q : '', mentions: mem }, {quoted: m})
                    }
                    break
                     case 'tagall': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        var mems = []
                        var teks = `╔══ *TAG MEMBER*\n╠ Pesan : ${q !== undefined ? q : `Pesan Tidak Ada`}\n║\n`
                        for (let i of participants) {
                            teks += `╠ ≻ @${i.id.split("@")[0]}\n`
                            mems.push(i.id)
                        }
                        bob.sendMessage(m.chat, { text: teks, mentions: mems}, { quoted: m })
                     }
                     break
                     case 'promote': case 'admin': case 'pm': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!quoted) return reply('Reply Pesan')
                         if (quoted) {
                        number = quoted.sender
                        bob.groupParticipantsUpdate(m.chat, [number], "promote")
                        .then( res => bob.sendMessage(m.chat, {text: `Sukses Admin Baru : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                        .catch( err => bob.sendMessage(m.chat, {text: `Sukses Admin Baru : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                        } else {
                        reply(`balas pesan member yang ingin dijadikan admin grup`)
                        }
                     }
                     break
                     case 'demote': case 'unadmin': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!quoted) return reply('Reply Pesan')
                         if (quoted) {
                        number = quoted.sender
                        bob.groupParticipantsUpdate(m.chat, [number], "demote")
                        .then( res => bob.sendMessage(m.chat, {text: `Sukses Menyingkirkan Admin : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                        .catch( err => bob.sendMessage(m.chat, {text: `Sukses Menyingkirkan Admin : @${quoted.sender.split("@")[0]}`, mentions: [quoted.sender]}, {quoted: m}))
                        } else {
                        reply(`balas pesan member yang ingin dijadikan admin grup`)
                        }
                     }
                     break
                     case 'closegc': case 'close': case 'tutup': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        bob.groupSettingUpdate(m.chat, 'announcement')
                        reply('Sukses Menutup Grup')
                     }
                     break
                     case 'opengc': case 'open': case 'buka': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        bob.groupSettingUpdate(m.chat, 'not_announcement')
                        reply('Sukses Membuka Grup')
                     }
                     break
                     case 'lock': case 'locked': case 'kunci': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        bob.groupSettingUpdate(m.chat, 'locked')
                        reply('Sukses Mengunci Edit Setting')
                     }
                     break
                     case 'unlock': case 'unlocked': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        bob.groupSettingUpdate(m.chat, 'unlocked')
                        reply('Sukses Membuka Edit Setting')
                     }
                     break
                     case 'setname': case 'setnamegc': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!q) return reply(`Masukan Text Nama Group!\n${prefix}setname Dia kekasih mu yang Baru`)
                        bob.groupUpdateSubject(m.chat, q)
                        reply(`Nama Grup DiGanti :\n${q}`)
                     }
                     break
                     case 'setdesc': case 'setdesk': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!q) return reply(`Masukan Text Deskripsi Group!\n${prefix}setdesc Dia kekasih mu yang Baru`)
                        bob.groupUpdateDescription(m.chat, q)
                        reply(`Deskripsi DiGanti :\n${q}`)
                     }
                     break
                     case 'delete': case 'd': case 'del': {
                        if (!quoted) return
                        bob.sendMessage(m.chat, { delete: { fromMe: true, id: quoted.id, remoteJid: m.chat }})
                     }
                     break
                     case 'kick': case 'keluar': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!quoted) return reply('Reply Pesan')
                        bob.groupParticipantsUpdate(
                            m.chat, 
                            [quoted.sender],
                            "remove" // replace this parameter with "remove", "demote" or "promote"
                        )
                        ngetag(`Sukses Mengeluarkan @${quoted.sender.split("@")[0]}`, [quoted.sender])
                     }
                     break
                     case 'add': case 'tambahkan': {
                        if (!m.isGroup) return reply(global.mess.group)
                        if (!isBotGroupAdmins) return reply(global.mess.botAdmin)
                        if (!isGroupAdmins) return reply(global.mess.admin)
                        if (!quoted) return reply('Reply Pesan')
                        bob.groupParticipantsUpdate(
                            m.chat, 
                            [quoted.sender],
                            "add" // replace this parameter with "remove", "demote" or "promote"
                        )
                        ngetag(`Hallo @${quoted.sender.split("@")[0]} Selamat Datang`, [quoted.sender])
                     }
                     break
                    //AKHIR GROUP
                    // DOWNLOADER 
                     /*case 'ytv480p': {
                        if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                        if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                        reply(global.mess.wait)
                        var url = q
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.video['480p'].download()
                        setTimeout( () => {
                            bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 480p`})
                            }, 3000)
                    }
                    break*/
                     case 'ytmp4': case 'ytv': {
                        try {
                            if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                            if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                            reply(global.mess.wait)
                            var url = q
                            var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                            var dl_url = await yt.video['720p'].download()
                            setTimeout( () => {
                                bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 720p`})
                            }, 3000)
                        } catch (e) {
                            if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                            if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                            reply(global.mess.wait)
                            var url = q
                            var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                            var dl_url = await yt.video['360p'].download()
                            setTimeout( () => {
                                bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 360p`})
                            }, 3000)
                        }
                    }
                    break
                     /*case 'ytv1080p': {
                        if (!q) return reply(`Masukan Text\nExample ${prefix}ytv https://youtu.be/GDND88fqt1o`)
                        if (!q.includes('youtu.be') && !q.includes('youtube.com')) return reply(global.mess.linkinv)
                        reply('Sedang mendownload.\nTunggu 1 menit dikarenakan resolusi tinggi!\nJika Eror Kemungkinan Video Tersebut Tidak Tersedia Dengan Resolusi : 1080p')
                        var url = q
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.video['1080p'].download()
                        setTimeout( () => {
                            bob.sendMessage(m.chat, {video: {url: dl_url}, caption: `*${yt.title}*\nResolusi : 1080p`})
                        }, 3000)
                    }
                    break*/
                    case 'ytmp3': case 'yta': case'ytaudio': {
                        if (!q) return reply(`Masukan Text\nExample ${CmD} https://youtu.be/GDND88fqt1o`)
                        if (!q.includes('yout')) return reply(global.mess.linkinv)
                        reply(global.mess.wait)
                        var url = q
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.audio['128kbps'].download()
                        bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE MP3 ]*\n\nTitle : ${yt.title}\nSize : 128kbps\n_Audio Sedang Dikirim..._`}, {quoted: m})
                        bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, mimetype: 'audio/mp4', caption: `*${yt.title}*\nhttps://my.arsrfii.repl.co`}, {quoted: m})
                    }
                    break
                    case 'tt': case 'tiktok':  {
                        if (!q) return reply(`Masukan Text\nExample ${prefix}tiktok https://vm.tiktok.com/ZS8CoY9UX/`)
                        if (!q.includes('tiktok')) return reply(global.mess.linkinv)
                        reply(global.mess.wait)
                        dl.tiktokdl(q).then ( data => {
                            bob.sendMessage(m.chat, {caption: "✅ SUKSES", video: {url: data.video.no_watermark_hd}}, {quoted: m})
                        })
                    }
                    break
                    case 'igdl': case 'instagram': case 'ig':
                    if (!q)return reply(`Berikan Link\nExample : ${CmD} link`)
                    if (!isUrl(q)) return reply(`Link Ga Sesuai`)
                    if (!q.includes('instagram.com')) return reply(`Link Ga Sesuai`)
                    reply(global.mess.wait)
                    instagram(q).then( data => {
                    for ( let i of data ) {
                    if (i.type === "video") {
                    bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
                    } else if (i.type === "image") {
                    bob.sendMessage(m.chat, { caption: `✅ SUKSES`, image: { url: i.url }}, {quoted: m})
                    }
                    }
                    }).catch(() => reply(`ERORR. Postingan tidak Tersedia`))
			    break
                    case 'igstory': case 'igs':
                    if (!q)return reply(`Berikan Username nya\nExample : ${CmD} arsrfii`)
                    reply(`Scanning Username ${q}`)
                    var storis = `https://instagram.com/stories/` + q
                    instagram(storis.replace('@', '')).then( data => {
                    for ( let i of data ) {
                    if (i.type === "video") {
                    bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
                    } else if (i.type === "image") {
                    bob.sendMessage(m.chat, { image: { url: i.url }}, {quoted: m})
                    }
                    }
                    }).catch(() => reply(`Story Eror!, Mungkin karena di private atau username tidak ada dan mungkin bisa saja dia tidak buat story`))
			    break
                    case 'mediafire': {
                        if (!q) return reply(`Masukan Text\nExample ${CmD} https://www.mediafire.com/file/l8b3te4g1p8z354/module.zip/file`)
                        if (!q.includes('mediafire.com')) return reply(global.mess.linkinv)
                        reply(global.mess.wait)
                        dl.mediafiredl(q).then ( data => {
                            reply(`*[ MEDIA FIRE DOWNLOADER ]*\n\nName File : ${data.filename}\nSize : ${data.filesizeH}\n\n_Media Sedang Dikirim!_`)
                            bob.sendMessage(m.chat, {document: {url: data.url}, mimetype: 'zip', fileName: data.filename})
                        })
                    }
                    break
                    case 'play': {
                        if (!q) return reply(`Masukan Text Setelah Perintah!\n\n*Example For Voice Not* : ${CmD} Jakarta Hari Ini - For revenge --vn\n*Example For Document :* ${CmD} Jakarta Hari Ini - For revenge -doc\n*Example For Video :* ${CmD} Jakarta Hari Ini - For revenge --video`)
                        reply(global.mess.wait)
                        var pasu = `ptt`
                        if (q.includes('--vn')) {
                        var ytserc = await yts(q.replace('--vn', ''))
                        var url = ytserc.all[0].url
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.audio['128kbps'].download()
                        bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE PLAY ]*\n\nTitle : ${yt.title}\nSize : 128kbps\nType : Voice Not\n_Audio Sedang Dikirim..._`}, {quoted: m})
                        bob.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: `audio/mp4`, ptt: true}, {quoted: m})
                    } else 
                    if (q.includes('--doc')) {
                        var ytserc = await yts(q.replace('--doc', ''))
                        var url = ytserc.all[0].url
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.audio['128kbps'].download()
                        bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE PLAY ]*\n\nTitle : ${yt.title}\nSize : 128kbps\nType : Document\n_Audio Sedang Dikirim..._`}, {quoted: m})
                        bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, caption: yt.title + `\nhttps://my.arsrfii.repl.co`, mimetype: `audio/mp3`})
                    } else 
                    if (q.includes('--video')) {
                        var ytserc = await yts(q.replace('--video', ''))
                        var url = ytserc.all[0].url
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.video['720p'].download()
                        bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE PLAY ]*\n\nTitle : ${yt.title}\nSize : 128kbps\nType : Video\nVideo Sedang Dikirim..._`}, {quoted: m})
                        bob.sendMessage(m.chat, {video: {url: dl_url}, caption: yt.title + `\nhttps://my.arsrfii.repl.co`}, {quoted: m})
                    } else {
                        var ytserc = await yts(q)
                        var url = ytserc.all[0].url
                        var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
                        var dl_url = await yt.audio['128kbps'].download()
                        bob.sendMessage(m.chat, {image: {url: yt.thumbnail}, caption: `*[ YOUTUBE PLAY ]*\n\nTitle : ${yt.title}\nSize : 128kbps\nType : Default ( Audio )\n_Audio Sedang Dikirim..._`}, {quoted: m})
                        bob.sendMessage(m.chat, {audio: {url: dl_url}, mimetype: `audio/mp4`}, {quoted: m})
                    }}
                    break
                    case 'yts': case 'ytsearch': {
                    if (!m.isGroup) {
                    if (!q) return reply(`Masukan Text\nExample ${prefix}yts Jakarta Hari Ini - For Revenge`)
                    var teskd = `YOUTUBE SEARCH\n\n`
                    yts(q).then( data => {
                        let yt = data.all
                        var jumlah = 15
                        if (yt.length < jumlah) jumlah = yt.length
                        var no = 0
                        let txt = `*YOUTUBE SEARCH*\n\n*Data berhasil didapatkan*\n*Hasil pencarian dari : ${q}*`
                        for (let i = 0; i < jumlah; i++) {
                        no += 1
                        txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
                        }
                        bob.sendMessage(m.chat, { image: { url: yt[0].image }, caption: txt }, { quoted: m })
                        })
                    }}
                    break
                    //Akhir Downloader
                    /*Premium Cuy
                    case 'cekprem':
                    case 'cekpremium': {
                    if (!isPremium) return reply(`Maaf!, Kamu Bukan User Premium Untuk Saat Ini :(\nUpgrade Fitur Premium Yuk!. Ketik ${prefix}owner`)
                    if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                    let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
                    let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                    reply(premiumnya)
                    break
                    }
                    */
                    // Owner Menu


                    case 'setpp': case 'setppbot':{
                    if (!isCreator) return reply(global.mess.owner)
                    if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                    let mediaa = await quoted.download()
                    var { img } = await pepe(mediaa)
                    await bob.query({
                    tag: 'iq',
                    attrs: {
                    to: botNumber,
                    type:'set',
                    xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                    tag: 'picture',
                    attrs: { type: 'image' },
                    content: img
                    }
                    ]
                    })
                    reply(`Done`)
                    }
                    break
                    
                    case 'setexif': case 'exif': {
                    if (!q) return reply(`Masukan Text!\nExample : ${CmD} StickerKu|Sticker Bersama`)
                    if (!isCreator) return reply(mess.owner)
                    var packname = q.split("|")[0]
                    var author = q.split("|")[1]
                    if (!packname) return reply(`Masukan Text Packname!`)
                    if (!author) return reply(`Masukan Text Author!`)
                    global.packname = packname
                    global.author = author
                    reply(`Sukses Mengganti!\nPackname : *${packname}*\nAuthor : *${author}*`)
                    }
                    break
                    case 'block': {
                        if (!isCreator) return reply(mess.owner)
                        if (!q && !isQuotedMsg) return reply(`Reply Atau Masukan Nomor Yang Mau Di Block`)
                        if (q) {
                            bob.updateBlockStatus(q + "@s.whatsapp.net", "block")
                            reply(`Sukses Block Beliau`)
                            } else if (isQuotedMsg) {
                                if (quoted.sender === global.owner + "@s.whatsapp.net") return reply(`Tidak bisa block Owner`)
                                bob.updateBlockStatus(quoted.sender, "block")
                                reply(`Sukses Block Beliau`)
                            }
                    }
                    break
                    case 'clearall': {
                    for (let i of store.chats.all()) {                        
                    await bob.chatModify({
                    delete: true,
                    lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
                    },
                    i.id)
                    reply(`Sukses Membersihkan Chat.`)
                    }
                }
                    break
                    
                    case 'unblock': {
                        if (!isCreator) return reply(global.mess.owner)
                        if (q) {
                            bob.updateBlockStatus(q + "@s.whatsapp.net", "unblock")
                            reply(`Sukses Buka Block Beliau`)
                        } else if (isQuotedMsg) {
                        if (quoted.sender === global.owner + "@s.whatsapp.net") return reply(`Tidak bisa block Owner`)
                        bob.updateBlockStatus(quoted.sender, "unblock")
                        reply(`Sukses Buka Block Beliau`)
                    }
                    }
                    break
                    case 'bc': {
                    if (!q) return reply(`Masukan Text\nExample ${CmD} Hallo Mas Bro`)
                    if (!isCreator) return reply(global.mess.owner)
                    for ( let i of store.chats.all()) {
                    setTimeout( () => {
                        var judule = `*[ BROADCAST ]*\n\n`
                        bob.sendMessage(i.id, {image: fs.readFileSync(`media/logo.png`), caption: judule + q})
                    }, 1000) // 1000 = 1s,
                    }
                    }
                    break
                    //Akhir owner menu
                    default:
                    /*if (!chats && !m.isGroup) {
                    console.log("->[\x1b[1;32mNew\x1b[1;37m]", color('Question From', 'yellow'), color(pushname, 'lightblue'), `: "${chats}"`)
                    bob.sendPresenceUpdate("composing", m.chat);
                    
                    const response = await openai.createCompletion(
                    {
                    model: "text-davinci-003",
                    prompt: chats,
                    },
                    {
                      timeout: 1000,
                      headers: {
                        "Example-Header": "example",
                      },
                    })
                    reply(response.data.choices[0].text.trim())
                    
                    }  */ 
                    if (body && !m.isGroup) {
                        var apisim = await fetchJson(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
                        config(tiktokresi);
                        await sleep(1000)
                        createAudioFromText(apisim.success, 'simsimi', 'id_001')
                        await sleep(1000)
                        bob.sendMessage(m.chat, {audio: fs.readFileSync(`simsimi.mp3`), mimetype: 'audio/mp4', ptt: true}, {quoted: m})
                        } 
                    
                        if (budy.startsWith('x')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(2)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }


                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }

        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})