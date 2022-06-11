/**
 - NEO BASE
**/
 
process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zneo = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const WebPReader = require('node-webpmux');
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
 
// Read Database
global.db = JSON.parse(fs.readFileSync('./data/database.json'))
if (global.db) global.db = {
    users: {},
    ...(global.db || {})
}
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./data/user.json'))

// UCAPAN WAKTU 
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tb2 = 'https://telegra.ph/file/a8a4b034e5c9dc277db5f.jpg'
const tb1 = 'https://telegra.ph/file/a8a4b034e5c9dc277db5f.jpg'
// TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = neo = async (neo, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isCmd = body.startsWith(prefix)
const command = body.toLowerCase().split(' ')[0] || ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await neo.decodeJid(neo.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await neo.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
autoreadsw = true

// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

// UCAPAN WAKTU By Neo
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

if (m.message) {
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}

if (isCmd && !isUser){
pendaftar.push(m.sender)
fs.writeFileSync('./data/user.json', JSON.stringify(pendaftar))
} 
if (command) {
await neo.sendPresenceUpdate('composing', m.chat)
}
if (autoreadsw) {
if (from === 'status@broadcast') {
neo.chatRead(from)
}
}

const hariRaya = new Date('6 1, 2022 00:00:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`

async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
  let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
// Public & Self
if (!neo.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./data/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: neo.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, neo.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
neo.ev.emit('messages.upsert', msg)
}

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'Myneo', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"Lol Lexxy+",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'Lol Lexxy+',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
neo.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Jadi Hengker 😎`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/image/thumb.jpg`),"sourceUrl": "https://chat.whatsapp.com/E3zewfxrc5pKE6Rzb3BuqG"}}}, { quoted: m})
}
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
let SK = "⊳"
let SB = "•"
let HB = "❑"
let K1 = "『"
let K2 = "』"
let YR = "⇒"
let BF = "_"
let P4 = "*"
let GK = "➛"

const tess =`*STATUS BOT ONLINE*\n_${runtime(process.uptime())}_`

const fitr = `${require('./message/help.js').help(prefix, l, pushname)}`
const qtod = m.quoted? "true":"false"

const ttdldk =`
${P4}Hai ${pushname} ${ucapanWaktu}${P4}

${BF}Url : ${q}${BF}
${BF}Time : ${time}${BF}

_Data Berhasil Di Dapatkan !!_
`

const fitur =`
 ${GK} ${K1}  ${P4}SELFBOT-MD${P4}  ${K2}
${P4}Hai ${pushname} ${ucapanWaktu}${P4} 👋
${P4}Saya ${global.namebot}, Bot Ini Adalah Beta Multi Device Whatsapp.${P4}
${P4}Jika Menemukan Fitur Error Atau Bug, Harap Lapor Ke Owner Bot !!${P4}

${GK} ${P4}INFO USER${P4}
${SK} Nama : ${pushname}
${SK} Nomor : @${sender.split("@")[0]}

${GK} ${P4}INFO OWNER${P4}
${SK} Nama : ${global.ownername}
${SK} Nomor : @${global.nomerowner}

${SK} ${P4}INFO BOT${P4}
${SK} Status : ${neo.public? "public" : "self"}
${SK} Aktif : ${runtime(process.uptime())}
${SK} Users : ${pendaftar.length}
${require('./message/help.js').help(prefix, l, pushname)}`

// Case Nye Sini Ngab
switch(command) {
case prefix+'menu': case prefix+'help':
{
let btnR = [{
urlButton: {
displayText: 'Group Bot',
url: 'https://chat.whatsapp.com/GciZhPy6pBbBSVb835alF9'
}
}, {
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/BOTMD'
}
}]
neo.send5ButImg(m.chat, fitur, `Base Ori : Lexxy Official\nNo Encrypt Full Compress\nFitur Full Scrape Dan No Error`, log0, btnR)
}
break
case prefix+'donate': case prefix+'donasi':
{
let btnD = [{
urlButton: {
displayText: 'Group Bot',
url: 'https://chat.whatsapp.com/GciZhPy6pBbBSVb835alF9'
}
}, {
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/BOTMD'
}
}]
neo.send5ButImg(m.chat, `${require('./message/help.js').donate(prefix, l, pushname)}`, fonts, qris, btnD)
}
break
case prefix+'setexif': {
 if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply(`*Example* : #setexif name|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n*Packname* : ${global.packname}\n*Author* : ${global.author}`)
}
break
case prefix+'tes': case prefix+'bot':
m.reply(`${tess}`)
break
case prefix+'sticker':
case prefix+'stiker':{
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await neo.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await neo.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case prefix+'tiktok':{
if (args.length < 1) return m.reply(`*Example* :\n#tiktok https://youtu.be/ethHwzoz8o8`)
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
   neo.sendMessage(from, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  break
case prefix+'tiktokaudio':{
if (args.length < 1) return m.reply(`*Example* :\n#tiktok https://youtu.be/ethHwzoz8o8`)
if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  m.reply(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    neo.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case prefix+'ytmp3':{
  if (args.length < 1) return m.reply(`*Example* :\n#ytmp3 https://youtu.be/ethHwzoz8o8`)
  if (!q.includes('youtube')) return reply('Itu bukan link YouTube!')
  m.reply(mess.wait)
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      neo.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case prefix+'ytmp4':{
  if (args.length < 1) return m.reply(`*Example* :\n#ytmp4 https://youtu.be/ethHwzoz8o8`)
  if (!q.includes('youtube')) return reply('Itu bukan link YouTube!')
  m.reply(mess.wait)
   try{
       await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      neo.sendMessage(from, { video: { url: dl_link }, caption: "Succes\nJangan Lupa Donasi Ya:)" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case prefix+'play': case prefix+'ytplay': {
if (args.length < 1) return m.reply(`*Example* :\n#play dj angel baby`)
 fakey(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
    ]
    let buttonMessage = {
image: { url: anu.thumbnail},
caption: `*── 「 YOUTUBE PLAY 」 ──*

Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Duration : ${anu.timestamp}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Description : ${anu.description}
Url : ${anu.url}`,
footer: `Created By © ${global.namebot}\nPilih Video Apa Audio?`,
buttons: buttons,
headerType: 4
    }
 neo.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case prefix+'mediafire':
if (!q) return m.reply(`*Example* :\n#mediafire link`)
res = await fetchJson(`https://leyscoders-api.herokuapp.com/api/mediafire?url=${q}&apikey=IkyOgiwara`)
anu = await getBuffer(res.result.download)
m.reply(`❑ *Data Berhasil Di Dapatkan !!*\n\n*URL* : ${res.result.download}\n*Size* : ${res.result.size}\n\n_File Media Sedang Dikirim_`)
neo.sendMessage(m.chat, {document: anu, mimetype: 'application/zip', fileName: `By ${global.namebot}.zip`}, {quoted:m})
break
case prefix+'scriptbot
case prefix+'sc':
scbot = fs.readFileSync(`./basemd.zip`)
neo.sendMessage(m.chat, {document: scbot, mimetype: 'application/zip', fileName: `BaseNeoBotz.zip`}, {quoted:m})
break
case prefix+'loli':
case prefix+'neko':
buffer = `https://leyscoders-api.herokuapp.com/api/nekonime?apikey=IkyOgiwara`
m.reply(mess.wait)
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case prefix+'tahta':
if (!q) return m.reply(`*Example* :\n#tahta Lexxy`)
m.reply(mess.wait)
buffer = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case prefix+'teksto':
if (!q) return m.reply(`*Example* :\n#teksto Lexxy`)
m.reply(mess.wait)
buffer = `https://leyscoders-api.herokuapp.com/api/textto-image?text=${q}`
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case prefix+'waifu':
buffer = `https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=IkyOgiwara`
m.reply(mess.wait)
neo.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case prefix+'cowner': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case prefix+'setbiobot':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('*Example* :\n#setbiobot text')
neo.setStatus(`${q}`)
m.reply(`*Sukses Ganti Bio Bot Menjadi:*\n${q}`)
break
case prefix+'ssweb':
if (!q) return m.reply(`*Example* :\n#ssweb https://google.com`)
m.reply(mess.wait)
ssweb = `https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${q}&apikey=IkyOgiwara`
neo.sendMessage(from, {image:{url:ssweb}, caption:"Done!"}, {quoted:m})
break
break
case prefix+'public': {
if (!isCreator) return m.reply(mess.owner)
neo.public = true
m.reply('Sukse Change To Public Usage')
neo.setStatus(`Mode : Public`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'self': {
if (!isCreator) return m.reply(mess.owner)
neo.public = false
m.reply('Sukses Change To Self Usage')
sock.setStatus(`Mode : Self`)
}
break
case prefix+'covidindo':
case prefix+'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
neo.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case prefix+'nulis': {
if (args.length < 1) return m.reply(`*Example* :\n#nulis Bot|13|#ff020a|Saya Robot`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await m.reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/nulis/buku/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/nulis/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./data/hasilnulis.jpg'
])
.on('error', () => m.reply('Error') )
.on('exit', () => {
neo.sendMessage(from, {image:fs.readFileSync('./data/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
case prefix+'creategc':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Example* : #creategc namagroup`)
let cret = await neo.groupCreate(args.join(" "), [])
let response = await neo.groupInviteCode(cret.id)
teks = `  「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case prefix+'bcgc': case prefix+'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\n*Example* : #bcgc ${global.namebot}`
                let getGroups = await neo.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
displayText: 'Group Whatsapp',
url: 'https://chat.whatsapp.com/GciZhPy6pBbBSVb835alF9'
}
}, {
quickReplyButton: {
displayText: 'List Menu Bot',
id: '#menu'
}
}]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      neo.send5ButImg(i, txt, neo.user.name, global.log0, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
case prefix+'bc': case prefix+'bcall': {
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return m.reply(`Text mana?\n\n*Example* : ${prefix + command} ${global.namebot}`)
    let anu = await store.chats.all().map(v => v.id)
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/BOTMD'
}
    }, {
callButton: {
displayText: 'Owner Bot',
phoneNumber: ' +62 822-7991-5237'
}
}, {
quickReplyButton: {
displayText: 'List Menu',
id: '#menu'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
neo.send5ButImg(yoi, txt, `${global.fonts}`, global.log0, btn)
}
m.reply('Sukses Broadcast')
}
break
case prefix+'owner': case prefix+'creator': {
neo.sendContact(m.chat, global.owner, m)
}
m.reply('*Nih Kak Kontak Ownerku*')
break
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
neo.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await neo.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEE\x1b[1;37m]', time, color(`Exe Dari Owner Awog 🗿`, 'cyan'))
exec(budy.slice(2), (err, stdout) => {
if(err) return neo.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return m.reply(stdout)
})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
neo.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
neo.sendMessage("6282279915237@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})