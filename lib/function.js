const moment = require('moment-timezone')
const jimp = require('jimp')
const fs = require("fs");
const Crypto = require('crypto')
const https = require('https')
const http = require('http')
const axios = require('axios')
const util = require('util')
const { defaultMaxListeners } = require('stream')
const { proto, delay, getContentType } = require('@adiwajshing/baileys')
const chalk = require("chalk");
const { sizeFormatter } = require('human-readable')
const PhoneNumber = require('awesome-phonenumber') 

exports.formatp = sizeFormatter({
std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.tanggal = function tanggal(){
myMonths = ["1","2","3","4","5","6","7","8","9","10","11","12"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${day}-${myMonths[bulan]}-${year}` 
return tanggal
}

exports.wib = function wib(){
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
return wib
}

exports.wit = function wit(){
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
return wit
}

exports.wita = function wita(){
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
return wita
}

exports.ucapan = function ucapan(){
ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
return ucapan
}

exports.clockString = clockString = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.parseMention = parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.isUrl = isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.bytesToSize = function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };
  
exports.sleep = sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

exports.jsonformat = jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

exports.smsg = (conn, m, store) => {
    if (!m) return m
    let M = proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
        if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
    }
    if (m.message) {
        m.mtype = Object.keys(m.message)[0]
        m.msg = m.message[m.mtype]
        if (m.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(m.mtype)) m.chat = m.sender
        // if (m.mtype === 'ephemeralMessage') {
        //     exports.smsg(conn, m.msg)
        //     m.mtype = m.msg.mtype
        //     m.msg = m.msg.msg
        //   }
        if (m.mtype == 'protocolMessage') {
            if (m.msg.key.remoteJid == 'status@broadcast') m.msg.key.remoteJid = m.chat
            if (!m.msg.key.participant || m.msg.key.participant == 'status_me') m.msg.key.participant = m.sender
            m.msg.key.fromMe = conn.decodeJid(m.msg.key.participant) === conn.decodeJid(conn.user.id)
            if (!m.msg.key.fromMe && m.msg.key.remoteJid === conn.decodeJid(conn.user.id)) m.msg.key.remoteJid = m.sender
        }
        m.text = m.msg.text || m.msg.caption || m.msg.contentText || m.msg || ''
        m.mentionedJid = m.msg && m.msg.contextInfo && m.msg.contextInfo.mentionedJid && m.msg.contextInfo.mentionedJid.length && m.msg.contextInfo.mentionedJid || []
        let quoted = m.quoted = m.msg && m.msg.contextInfo && m.msg.contextInfo.quotedMessage ? m.msg.contextInfo.quotedMessage : null
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
            m.quoted = m.quoted[type]
            if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
            m.quoted.chat = conn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
            m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
            m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
            m.quoted.fromMe = m.quoted.sender === conn.user.jid
            m.quoted.text = m.quoted.text || m.quoted.caption || ''
            m.quoted.mentionedJid = m.quoted.contextInfo && m.quoted.contextInfo.mentionedJid && m.quoted.contextInfo.mentionedJid.length && m.quoted.contextInfo.mentionedJid || []
            m.getQuotedObj = m.getQuotedMessage = async () => {
			if (!m.quoted.id) return false
			let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    fromMe: m.quoted.fromMe,
                    remoteJid: m.quoted.chat,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            /**
             * 
             * @returns 
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
              *
              * @returns
            */
            m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/
    m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })
    /**
	* Copy this message

	*/
	m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

    return m
}

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

exports.runtime = function runtime(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.getRandom = function getRandom(ext){
return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.ucapan = () => {
ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
return ucapan
}

exports.getBuffer = async(url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}

exports.getWeb = async function (url, options) {
    let ress
    try {
        options ? options : {}
        const res = await axios({
            url,
            ...options
        })
        ress = res.data
    } catch (e) {
        console.log(e)
        ress = JSON.parse(JSON.stringify(e, null, '\t'))
    } finally {
        return ress
    }
};


exports.getJSON = async function (url, options) {
    let res;
    try {
        res = await axios({
            url,
            ...options
        })
    } catch (e) {
        console.log(e)
        res = JSON.parse(JSON.stringify(e, null, '\t'))
    }
    if (res.headers && res.headers['content-type'] == 'application/json') {
        return res.data
    } else {
        return {}
    }
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.ppwa = async function ppwa(conn, m) { 

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
randomnya = gambar[Math.floor(Math.random() * gambar.length)]
resultnya = randomnya.result
return resultnya
}

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
await welcome.print(font, 650, 255, pushName.slice(0, 25)) 
await welcome.print(font, 550, 340, 'About:') 
await welcome.print(font, 650, 415, status) 
await welcome.print(font, 550, 500, 'Number:') 
await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

exports.color  = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

exports.pickRandom = (list) => {
  return list[Math.floor(list.length * Math.random())]
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Sip, File Diupdate (Gak Usah Restart) => ${__filename}`));
delete require.cache[file];
require(file);
});