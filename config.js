const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6282125039170']
global.fake = 'Zero-Bot'
global.multiplier = 69
global.openaikey = "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" //kalo apikey expired register di website open a
global.mongodb = "mongodb+srv://eko830381:7bFmMOG0PTr0o1pb@cluster0.qpep4mr.mongodb.net/?retryWrites=true&w=majority"
global.packname = 'Zero-Bot'
global.author = '081288896549\n\nBot create by: WandyGans'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Sedang di proses...',
nsfw: 'Nsfw belum di aktifkan di chat ini!',
register: `Anda belum terdaftar di database, sihlakan signup terlebih dahulu!`,
endLimit: `Maaf limit anda sudah habis, untuk mendapatkan limit sihlakan ketik .buylimit!`,
banned: `「 *BANNED* 」\n\n*Maaf nomor anda sudah terbanned oleh bot!*`
}
global.limitawal = {
premium: "Unlimited",
free: 100
}
global.toxic = [
  'bangsat',   'brengsek',  'babi',    'bejat',    'bego',
  'bodoh',     'cukimai',   'cuki',    'dajal',    'dongok',
  'durjana',   'fuck',      'fucker',  'fuckface', 'tytyd',
  'goblok',    'babi', 'idiot',   'jancuk',   'keparat',
  'kntl',      'kontol',    'lonte',   'tai',      'taek',
  'ngentot',   'ngewe',     'ngocok',  'nyolot',   'pntk',
  'pantek',    'pecun',     'perek',   'qimax',    'qontol',
  'qontolnya', 'qimak',     'ngentd',  'nigga',    'sinting',
  'tlol',      'tai',       'tolol',   'kentod',   'kemtod',
  'peler',     'vagina',    'pler',    'wasuk',    'asu',
  'ngntd',     'kntd',      'lanjiao', 'pukima',   'mmk',
  'memek',     'bokep',     'bkep',    'ngocok',   'ngcok',
  'coli',      'colay',     'mmk',     'bgst',     'kntol',
  'mmek',      'memk',      'bokp',    'ngceng',   'ngaceng',
  'ngntot',    'ange',      'tete',    'snge',     'cibay', 'titit', 'dancok', 'ewe', 'itil', 'entot', 'dientot',
  'bkp', 'wasu', 'bgsat', 'bangst', 'pepek', 'ppek', 'pepk', 'gblk', 'gblok', 'anjeng',
'bajingan', 'sepong', 'spong', 'sepng', 'spng', 'pantat', 'pntat', 
'payudara', 'bool', 'dncok', 'sange', 'pap tt', 'pap tete',
'kimak', 'pukimak', 'memekk', 'kontoll', 'tititt', 'itill', 'pukimakk',
'ngontol', 'sangee', 'biba', 'bbi', 'titid', 'jembut', 'jembud', 'jembutt', 
'open bo', 'anj'
]

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Sip, File Diupdate (Gak Usah Restart) => ${__filename}`));
delete require.cache[file];
require(file);
});