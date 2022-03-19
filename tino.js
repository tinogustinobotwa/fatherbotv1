/* SC PREMIUM BY TINO GUSTINO
THANKS TO ZAKY YANG SELALU SUPPORT PAS EROR
MHANBARBAR.
BALEIS*/

const {                                             
WAConnection: _WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const Client = require('./res/simple')
const WAConnection = Client.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const ban = []
const tele = require('telegraph-uploader')
//--------------STICKER CONTROL----------------//
const Exif = require('./res/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./res/autoresp');
//--------------VOTING----------------//
const { addVote, deleteVote } = require("./res/vote");
//--------------FILE CONTROL----------------//
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./res/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./res/fetch')
const { color, bgcolor } = require('./res/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./res/Toxic.js')
const { cmdadd } = require('./res/totalcmd.js')
const { simih } = require('./res/functionss')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./res/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./res/limit");
const { onGoing, dadu, asupan } = require("./res/otakudesu.js")
const { mediafireDl } = require('./res/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./res/gif.js")
const { y2mateA, y2mateV } = require('./res/y2mate')
const { ythd } = require('./res/ytdl')
//-------------FUNCTION LIMIT---------------//
const limit = JSON.parse(fs.readFileSync('./_db/limit.json'))
//-------------FUNCTION LIMIT---------------//
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./res/badword");
const premium = require("./res/premium");
const afk = require("./res/afk");
const level = require("./res/level");
const atm = require("./res/atm");
const _sewa = require("./res/sewa");
//--------------END CONTROL----------------//
//--------------SET----------------//
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./res/gameGelud.js')
const game = require("./res/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const simple = require('./res/simple.js')
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
banChats = true;
owner = setting.owner
ownerNumber = setting.ownerNumber
gamewaktu = setting.gamewaktu
ppbot = setting.ppbot
qris = setting.qris
//--------------END----------------//

//--------------OPTION PREFIX----------------//
let multipref = false;
let oneprefix = true;
let noprefix = false;
let preff = "!"
//--------------END PREFIX----------------//

//--------------DATABASE OPTION----------------//
let antivo = JSON.parse(fs.readFileSync('./metadata/antiviewonce.json'));
let antidel = JSON.parse(fs.readFileSync("./metadata/antidelete.json"));
let badword = JSON.parse(fs.readFileSync('./metadata/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./metadata/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./metadata/senbadword.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./metadata/commands.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
//Function RPG & LEVEL By Pebri Ori
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");
//Database RPG Mode By Pebri!! Ori No
let _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./lib/rpg/healt.json'))
//let _potion = JSON.parse(fs.readFileSync('./lib/rpg/potion.json'))
//--------------HINT----------------//
global.hit = {}
let _registered = JSON.parse(fs.readFileSync('./metadata/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./metadata/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./metadata/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./metadata/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./metadata/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./metadata/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./metadata/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./metadata/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./metadata/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./metadata/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./metadata/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./metadata/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./metadata/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./metadata/bot/scommand.json'))
//--------------END HINT----------------//

//--------------DATA GAME----------------//
let tebakanime = JSON.parse(fs.readFileSync('./metadata/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./metadata/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./metadata/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./metadata/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./metadata/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./metadata/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./metadata/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./metadata/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./metadata/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./metadata/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./metadata/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./metadata/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./metadata/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./metadata/tebaktebakan.json'))
let family100 = [];
//--------------END GAME----------------//


//--------------STICKER CMD----------------//
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./metadata/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return _scommand[position].chats
}
  
}

//--------------END CMD----------------//

//--------------CHECK CMD----------------//
const checkSCommand = (id) => {
let status = false
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
status = true
}
})
return status
}
const getRespon = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return _respon[position].resp
    }
}

const getResponPosition = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getAllRespon = () => {
    const array = []
    Object.keys(_respon).forEach((i) => {
        array.push(_respon[i].txt)
    })
    return array
}

//--------------END CMD----------------//

//IS GROUP PARTICIPANT

/*tino.on('group-participants-update', async (anu) => {

		if (!welkom.includes(anu.jid)) return

		try {
			const mdata = await tino.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await tino.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				try {
                var pp_group = await tino.getProfilePicture(anu.jid)

            } catch (e) {
                var pp_group = 'https://i.ibb.co/D1jr9sP/4d1ee76b1d98.jpg'
            }
            
        ini_user = tino.contacts[num].notify || tino.contacts[num].vname
        ini_user = encodeURI(ini_user)
        
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
						let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${ini_user}&descriminator=${_registered.length}&memcount=${_registered.length}&gcname=${mdata.subject}&gcicon=${pp_group}&pp=${ppimg}&bg=https://i.ibb.co/Sw5SzgM/c5ce68f75328.jpg`)
				tino.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tino.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}`
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${ini_user}&descriminator=${_registered.length}&memcount=${_registered.length}&gcname=${mdata.subject}&gcicon=${pp_group}&pp=${ppimg}&bg=https://i.ibb.co/Sw5SzgM/c5ce68f75328.jpg`)
				tino.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})*/
			
			
			

//--------------MODULE EXPORT----------------//
module.exports = tino = async (tino, tin) => {
try {
if (!tin.hasNewMessage) return
tin = tin.messages.all()[0]
if (!tin.message) return
if (tin.key && tin.key.remoteJid == 'status@broadcast') return
if (tin.key.id.startsWith('3EB0') && tin.key.id.length === 12) return
const { Functions }= require('./res/functions.js');
global.ky_ttt
global.blocked
tin.message = (Object.keys(tin.message)[0] === 'ephemeralMessage') ? tin.message.ephemeralMessage.message : tin.message
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const content = JSON.stringify(tin.message)
const from = tin.key.remoteJid
let isGroup = from.endsWith('@g.us')

//--------------VOTE OPTION----------------//
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
const isAntidel = isGroup ? antidel.includes(from) : false;
const type = Object.keys(tin.message)[0]        
const cmd = (type === 'conversation' && tin.message.conversation) ? tin.message.conversation : (type == 'imageMessage') && tin.message.imageMessage.caption ? tin.message.imageMessage.caption : (type == 'videoMessage') && tin.message.videoMessage.caption ? tin.message.videoMessage.caption : (type == 'extendedTextMessage') && tin.message.extendedTextMessage.text ? tin.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
//--------------END VOTE OPTION----------------//



 const prefix = /^[.#&]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'

/*  if (multipref) {
 var prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_•\/\\Â©^<+]/.test(cmd) ? cmd.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_+•\/\\Â©^<+]/gi)[0]: '!'
  } else if (noprefix) {
  prefix = ""
} else if (oneprefix) {
 prefix = preff
  }
  */
    
body = (type === 'conversation' && tin.message.conversation.startsWith(prefix)) ? tin.message.conversation : (type == 'imageMessage') && tin.message[type].caption.startsWith(prefix) ? tin.message[type].caption : (type == 'videoMessage') && tin.message[type].caption.startsWith(prefix) ? tin.message[type].caption : (type == 'extendedTextMessage') && tin.message[type].text.startsWith(prefix) ? tin.message[type].text : (type == 'listResponseMessage') && tin.message[type].singleSelectReply.selectedRowId ? tin.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && tin.message[type].selectedButtonId ? tin.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(tin.message[type].fileSha256.toString('base64')) !== null && getCmd(tin.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(tin.message[type].fileSha256.toString('base64')) : ""

if (prefix != "") {
  if (!body.startsWith(prefix)) {
    isCmdd = false
    comm = ""
  } else {
    isCmdd = true
    comm = body.slice(1).trim().split(" ").shift().toLowerCase()
  }
} else {
  isCmdd = false
  comm = body.trim().split(" ").shift().toLowerCase()
}
    
budy = (type === 'conversation') ? tin.message.conversation : (type === 'extendedTextMessage') ? tin.message.extendedTextMessage.text : ''
const command = comm
const args = body.trim().split(/ +/).slice(1)
hit_today.push(command)
const arg = body.substring(body.indexOf(' ') + 1)
const ar = args.map((v) => v.toLowerCase())
const argz = body.trim().split(/ +/).slice(1)
const isCmd = isCmdd
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./metadata/totalcmd.json'))[0].totalcmd
const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
const botNumber = tino.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const botDes = setting.botDes
const kodeverify = setting.kodeverify
const promo = setting.promo
const buktiTf = setting.buktiTf
const linkDana = setting.linkDana
limitawal = setting.limitawal
const desDana = setting.desDana
const desPulsa = setting.desPulsa
const linkWa = setting.linkWa
const lolhumanapi = setting.lolhumanapi 
const nomorDesPulsa = setting.nomorDesPulsa
const linkImageDana = setting.linkImageDana
let sender = isGroup ? tin.participant : tin.key.remoteJid
let senderr = tin.key.fromMe ? tin.user.jid : tin.key.remoteJid.endsWith('@g.us') ? tin.participant : tin.key.remoteJid
const totalchat = await tino.chats.all()
const groupMetadata = isGroup ? await tino.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = tin.key.fromMe ? tino.user.jid : tino.contacts[sender] || '-'
const pushname = tin.key.fromMe ? tino.user.name : conts.notify || conts.vname || conts.name || '-'
const mentionByTag = type == "extendedTextMessage" && tin.message.extendedTextMessage.contextInfo != null ? tin.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && tin.message.extendedTextMessage.contextInfo != null ? tin.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
idttt = []
players1 = []
players2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
players1.push(t.player1)
players2.push(t.player2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer2 = isGroup ? players2.includes(sender) : false
const isBadword = isGroup ? grupbadword.includes(from) : false
const isOwner = ownerNumber.includes(senderr)
const isRegister = register.includes(sender)
const isBanned = ban.includes(sender)
const isPremium = premium.checkPremiumUser(sender, _premium)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isAfkOn = afk.checkAfkUser(sender, _afk)
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isMuted = isGroup ? mute.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })

//--------------BUTTON OPTION----------------//
selectedButton = (type == 'buttonsResponseMessage') ? tin.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? tin.message.listResponseMessage.title : ''

const gcount = setting.gcount
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = tino.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return tino.relayWAMessage(po, {waitForAck: true})
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

const reply = (teks) => {
  var ids = teks.includes('@') ? teks.split('@'): []
  let semdertag = []
  for (var con of ids) {
    semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')
  }
  tino.sendMessage(from, teks, MessageType.text, {
    quoted: tin, thumbnail: fakeimage, contextInfo: {
      mentionedJid: semdertag }});
}


const sendMess = (hehe, teks) => {
tino.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tino.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : tino.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: freply, contextInfo: { "mentionedJid": memberr } })
}
const sendText = (from, text) => {
tino.sendMessage(from, text, MessageType.text)
}
const textImg = (teks) => {
return tino.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./media/wpmobile.png')})
}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
}}}
const math = (teks) => {
return Math.floor(teks)
}
const kick = function(from, orangnya){
for (let i of orangnya){
tino.groupRemove(from, [i])
}
}
const kickMember = async(id, target = []) => {
let group = await tino.groupMetadata(id)
let owner = group.owner.replace("c.us", "s.whatsapp.net")
let me = tino.user.jid
for (i of target) {
if (!i.includes(me) && !i.includes(owner)) {
await tino.groupRemove(to, [i])
} else {
await tino.sendMessage(id, "Not Premited!", "conversation")
break
}
}
}
const add = function(from, orangnya){
tino.groupAdd(from, orangnya)
}
const sendKontak = (from, nomor, nama, org = "") => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
tino.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
const hideTag = async function(from, text){
let anu = await tino.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
tino.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')},
'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('selesai');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
tino.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:tin})
fs.unlinkSync(asw)
});
});
});
}

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./metadata/user/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

//--------------BUTTON OPTION END----------------//

//--------------CONS BUTTON----------------//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await tino.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
tino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//--------------END CONS BUTTON ----------------//

//--------------BUTTON LOCATION----------------//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tino.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
tino.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const isRegistered = checkRegisteredUser(sender)
//--------------END BUTTON LOCATION----------------//

//--------------BUTTON TEXT----------------//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
tino.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
tino.sendMessage(to, media, type, {quoted: freply, mimetype: mime, caption: text, thumbnail:fakeimage, contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tino.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tino.sendMessage(from, hasil, type, options).catch(e => {
tino.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
const promoteAdmin = async function(to, target=[]){
if(!target.length > 0) { return  reply("No target..") }
let g = await tino.groupMetadata(to)
let owner = g.owner.replace("c.us","s.whatsapp.net")
let me = tino.user.jid
for (i of target){
if (!i.includes(me) && !i.includes(owner)){
const res = await tino.groupMakeAdmin(to, [i])
}else{
reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
if (isRegistered) {
hayuk0 = '[√ VERIFIED]'
}
}


//-----------CONST LIMIT-------////
const checkLimit = (sender) => {
          	let found = false
            for (let lmt of limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return tino.sendMessage(from,`MAAF USER ${codename} LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`, text,{ quoted: tin })
            tino.sendMessage(from, `${limitCounts}`, text, { quoted : tin })
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            limit.push(obj)
            fs.writeFileSync('./_db/limit.json', JSON.stringify(limit))
            tino.sendMessage(from, `${limitCounts}`, text, { quoted : tin })
            }
			} 
			const limitAdd = (sender) => {
            if (isOwner) {
                return;
            }
            if (isPremium) {
                return;
            }
            var position = false;
            Object.keys(limit).forEach((i) => {
            if (limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit += 1;
            fs.writeFileSync('./_db/limit.json', JSON.stringify(limit));
            }
            }   
            const isLimit = (sender) =>{  
		    let position = false
            for (let i of limit) {
            if (i.id === sender) {
         	let limits = i.limit
            if (limits >= limitawal ) {
            position = true
            reply(`MAAF LIMIT KAMU TELAH HABIS, SILAHKAN GET/DAPATKAN LIMIT DENGAN CARA KETIK COMMAND ${prefix}claim`)
            return true
            } else {
          	limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	let obj = { id : sender, limit : 1 }
            limit.push(obj)
            fs.writeFileSync('./_db/limit.json',JSON.stringify(limit))
            return false
            }
            }
            const bayarLimit = (userid, amount) => {
         	let position = false
            Object.keys(limit).forEach((i) => {
            if (limit[i].id === userid) {
            position = i
            }
            })
            if (position !== false) {
            limit[position].limit -= amount
            fs.writeFileSync('./_db/limit.json', JSON.stringify(limit))
            }
            }
//-----------END LIMIT------/
const demoteAdmin = async function(to, target=[]){
if(!target.length > 0) { return  reply("No target..") }
let g = await tino.groupMetadata(to)
let owner = g.owner.replace("c.us","s.whatsapp.net")
let me = tino.user.jid
for (i of target){
if (!i.includes(me) && !i.includes(owner)){
const res = await tino.groupDemoteAdmin(to, [i])
}else{
reply("NOT PREMITED")
}
}
}
let authorname = tino.contacts[from] != undefined ? tino.contacts[from].vname || tino.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
return `./sticker/${name}.exif`	
})	
}
const isImage = (type === 'imageMessage')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'ɢᴏᴏᴅ ɴɪɢʜᴛ'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'ɢᴏᴏᴅ ɴɪɢʜᴛ'
}
const levelRole = level.getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = '*JENDERAL🌟 🌟 🌟 *'
}
//--------------END BUTTON TEXT----------------//

//--------------DaFTAR BUTTON----------------//
const daftar1 = `Hai kak  ${pushname}, ${ucapanWaktu} \n\nSebelum Menggunakan ${botName} Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nFather-Bot```'
const daftar3 = [{buttonId: noprefix ? "verify" : "!"+"verify",buttonText: {displayText: `⬡ DAFTAR `,},type: 1,},]
const nomenu = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText: {displayText: `⬡ MENU `,},type: 1,},]
//--------------END DaFTAR BUTTON----------------//

//--------------PREMIUM BUTTON----------------//
const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\n Fitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `
const prem2 = '```KLIK TOMBOL DI BAWAH UNTUK MELIHAT LIST PREMIUM\n Father-Bot```'
const prem3 = [{buttonId: noprefix ? "sewabot" : "!"+"sewabot",buttonText: {displayText: `⬡ BUY PREMIUM `,},type: 1,},]
//--------------END PREMIUM BUTTON----------------//

//--------------FUNC LEVELING---------------//
if (isGroup && !tin.key.fromMe && !level.isGained(sender) && isLevelingOn) {
try {
level.addCooldown(sender)
const checkATM = atm.checkATMuser(sender, _uang)
if (checkATM === undefined) atm.addATM(sender, _uang)
const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
atm.addKoinUser(sender, uangsaku, _uang)
const currentLevel = level.getLevelingLevel(sender, _level)
const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
level.addLevelingXp(sender, amountXp, _level)
if (requiredXp <= level.getLevelingXp(sender, _level)) {
level.addLevelingLevel(sender, 1, _level)
const userLevel = level.getLevelingLevel(sender, _level)
const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
} catch (err) {
console.error(err)
}
}
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const { quotedMsg, isQuotedMsg, isBaileys } = tin
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
//--------------END FUNC LEVELING---------------//
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
reply(`*「 GROUP LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group!`)
tino.groupRemove(from, [sender])
}
}
 
  if (fs.existsSync('./res/vote/' + from + '.json') && fs.existsSync('./res/' + from + '.json') && isGroup) {
    if (budy.toLowerCase() === "vote") {
    var vote = JSON.parse(fs.readFileSync(`./res/${from}.json`));
    var _votes = JSON.parse(fs.readFileSync(`./res/vote/${from}.json`));
    var fil = vote.map((v) => v.participant);
    if (fil.includes(sender)) {
      return mentions(
        "@" + sender.split("@")[0] + " Anda sudah vote",
        fil,
            true
          );
      } else {
        vote.push({
          participant: sender,
          voting: "✅",
          voted: sender
        });
        fs.writeFileSync(`./res/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        var vote = JSON.parse(fs.readFileSync(`./res/${from}.json`));
       var _votes = JSON.parse(fs.readFileSync(`./res/vote/${from}.json`));
       var fil = vote.map((v) => v.participant);
        if (fil.includes(sender)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: sender,
            voting: "❌",
            devote: sender
          });
          fs.writeFileSync(`./res/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    /** end vote **/
    
if (isGroup && isAntiviewonce && type == "viewOnceMessage") {
  tino.sendMessage(from, `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`, text, {quoted: tin, contextInfo: { mentionedJid: [sender]}});
  var msg = { ...tin };
  msg.tin = tin.message.viewOnceMessage.message;
  msg.tin[Object.keys(msg.tin)[0]].viewOnce = false;
  tino.copyNForward(from, msg);
}
                // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        tino.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
        if (isGroup && isBaileys) {
            if (mentioned.length >= groupMembers.length){
                if (!chats.match(/(@)/gi)) {
                    mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)
                }
            }
        }
  //// kontol 
async function uptotele(path){
var linknya = await tele.uploadByBuffer(fs.readFileSync(path))
return linknya.link
         }
////////< Sewa > ////////
_sewa.expiredCheck(tino, sewa)
///////< MUTE > /////////
if (isMuted){
if (!isGroupAdmins && !isPremium) return
 }
const getWin = (userId) => {
let position = false
Object.keys(_win).forEach((i) => {
if (_win[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _win[position].win
}
}
// GAME 
game.cekWaktuFam(tino, family100)
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var http = randomNomor(100)
atm.addKoinUser(sender, http, _uang)
await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakgambar.json", JSON.stringify(tebakgambar))
}
}
if (game.isfam(from, family100)) {
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (budy.toLowerCase().includes(i)){
var htgmp = Math.floor(Math.random() * 20) + 1
atm.addKoinUser(sender, htgmp, _uang)
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
tino.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakanime[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmu = randomNomor(100)
atm.addKoinUser(sender, htgmu, _uang)
await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
delete tebakanime[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakanime.json", JSON.stringify(tebakanime))
}
}
if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklagu[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htpl = randomNomor(100)
atm.addKoinUser(sender, htpl, _uang)
await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
delete tebaklagu[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebaklagu.json", JSON.stringify(tebaklagu))
}
}
if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htpu = randomNomor(100)
atm.addKoinUser(sender, htpu, _uang)
await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
delete tebaktebakan[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
}
if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = kuismath[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htcc = randomNomor(100)
atm.addKoinUser(sender, htcc, _uang)
await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
delete kuismath[sender.split('@')[0]]
fs.writeFileSync("./metadata/kuismath.json", JSON.stringify(kuismath))

}  
}
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = asahotak[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgm = randomNomor(100)
atm.addKoinUser(sender, htgm, _uang)
await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
delete asahotak[sender.split('@')[0]]
fs.writeFileSync("./metadata/asahotak.json", JSON.stringify(asahotak))
}
}
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmi = randomNomor(100)
atm.addKoinUser(sender, htgmi, _uang)
await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync("./metadata/caklontong.json", JSON.stringify(caklontong))
}
}
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmuu = randomNomor(100)
atm.addKoinUser(sender, htgmuu, _uang)
await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
}
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmii = randomNomor(100)
atm.addKoinUser(sender, htgmii, _uang)
await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebaklirik.json", JSON.stringify(tebaklirik))
}
}
if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmcc = randomNomor(100)
atm.addKoinUser(sender, htgmcc, _uang)
await reply(`*_🎮 Tebak Kimia ??_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
delete tebakimia[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakimia.json", JSON.stringify(tebakimia))
}
}
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaksiapaaku[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htgmk = randomNomor(100)
atm.addKoinUser(sender, htgmk, _uang)
await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
delete tebaksiapaaku[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
}
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var html = randomNomor(100)
atm.addKoinUser(sender, html, _uang)
await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakbendera.json", JSON.stringify(tebakbendera))
}
}
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = susunkata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htmp = randomNomor(100)
atm.addKoinUser(sender, htmp, _uang)
await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
delete susunkata[sender.split('@')[0]]
fs.writeFileSync("./metadata/susunkata.json", JSON.stringify(susunkata))
}
}
if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakata[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
var htmu = randomNomor(100)
atm.addKoinUser(sender, htmu, _uang)
await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
delete tebakata[sender.split('@')[0]]
fs.writeFileSync("./metadata/tebakata.json", JSON.stringify(tebakata))
}
}
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./res/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
tino.sendMessage(to, media, sticker)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}
////////// level nye
let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
tc = `MAAF KA NOMER KAMU BLOM TERDAFTAR DI DATABASE SILAHKAN KETIK !verify UNTUK MENDAFTAR DI SAYU BOTZ`
ind = {
wait: `⌛ Sedang di Prosess ⌛`,
success: `✔️ Berhasil ✔️`,
}
///// < lanjut massss > ////
let ikyads = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
return {"externalAdReply": { "title": tekslink, "thumbnail": ikyads, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
// AFK
if (isGroup) {
for (let x of mentionUser) {
if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
mentions(cptl, x, true)
}}
if (afk.checkAfkUser(sender, _afk) && !isCmd) {
const getTime = afk.getAfkTime(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
const ittung = ms(await Date.now() - getTime)
const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
reply(pep)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./metadata/user/afk.json', JSON.stringify(_afk))
}
}

if (!isCmd && from.endsWith('@s.whatsapp.net')) {
  tino.anonymous = tino.anonymous ? tino.anonymous: {}
  let room = Object.values(tino.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
  if (room) {
    if (/^.*(next|leave|start)/.test(body)) return
    if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
    let other = [room.a,
      room.b].find(user => user !== sender)
    if (type === "conversation") {
      tino.sendMessage(other, tin.message.conversation, text);
    } else {
      tino.sendMessageFromContent(other, tin.message)
    }
  }
}
ByReply2 = type == "extendedTextMessage" && tin.message.extendedTextMessage.contextInfo != null ? tin.message.extendedTextMessage.contextInfo.stanzaId|| "": ""
 ByReply = type == "extendedTextMessage" && tin.message.extendedTextMessage.contextInfo != null ? tin.message.extendedTextMessage.contextInfo.stanzaId || "": ""
const typeImage = ByReply ? ByReply.startsWith('IMAGE'): false
const typePdf = ByReply ? ByReply.startsWith('PDF'): false
const noCode = ByReply2 ? ByReply2.startsWith('PDF'): false
 
if (!isCmd && typePdf) {
  if (ByReply2.match(/^[0-9]/)) return reply("Reply with number!")
  reply("Wait a moment, the data is being processed")
  var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=${lolhumanapi}`)
  var capt = `• Title : ${a.data.result.title_romaji}\n\n`
  for (let i in a.data.result.info) {
    capt += `• ${i} : ${a.data.result.info[i].toString()}\n\n`
  }
  await tino.sendMessage(from, {
    url: a.data.result.image[0]}, image, {
    caption: capt, quoted: tin
  })
  var pdf = await axios.get(`https://api.lolhuman.xyz/api/nhentaipdf/${budy}?apikey=${lolhumanapi}`)
  tino.sendMessage(from, {url: pdf.data.result}, document, {
    thumbnail: await getBuffer(a.data.result.image[0]), quoted: tin, filename: a.data.result.title_romaji, mimetype: "application/pdf"
  })
} else if (!isCmd && typeImage) {
  if (body.match(/^[0-9]/)) return reply("Reply with number!")
  reply("Wait a moment, the data is being processed")
  var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=${lolhumanapi}`)
  for (let i of a.data.result.image) {
    tino.sendMessage(from, {url: i}, image, {thumbnail: Buffer.alloc(0)})
    await sleep(600)
  
  }
  
  } else if (!isCmd && noCode) {
if (body.match(/^[0-9]/)) return reply("Reply with number!")
reply("Wait, sis, I'll help you find it")
  a = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolhumanapi}&query=${budy}`)
   teks = ``
  b = a.data.result
  for (let c of b) {
    for (let i in c) {
      teks += `• ${i} :  ${c[i].toString()}\n\n`
    }
  }
  tino.sendMessage(from, teks, "conversation", {
    quoted: tin })
    }
    
   
  ///Verify
 if (budy.toLowerCase() === `5678`){
	if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
             try {
				ppimg = await tino.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			    }
            veri = sender
            _registered.push(sender)
            fs.writeFileSync('./metadata/user/registered.json', JSON.stringify(_registered))
            addRegisteredUser(sender, serialUser)
             const anuu = `*🔖 Verifikasi sukses 🔖*

*🔖 Nama :* ${pushname}
*🔖 API :* +${sender.split('@')[0]}
*🔖 Serial:* ${serialUser}
*🔖 Total:* ${_registered.length} Pengguna

*[ • F A T H E R B O T • ]*`
         ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `🏷️MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText:'ミ★ Father-Bot Whatsapp ★彡', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
             console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
        // console.log(e)
            setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)
	    reply(`*Terimakasih Telah Terdaftar Di [ • F A T H E R B O T • ]*`)
	}, 2000)
	}

 
 
 
  
///// Auto Read
tino.chatRead(from, "read")
//// CMD

if (isCmd && !isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//////// < lanjut mas > ////////////
if (budy.toLowerCase() === `8473`){
if (isRegister) return 
register.push(sender)
fs.writeFileSync('./metadata/user/registered.json', JSON.stringify(register))
teks = `Verification success\n\nPlease send *!menu* to view menu`
atm.addKoinUser(sender, randomNomor(100), _uang)
tino.sendMessage(from, teks, text, {quoted: freply })
}
if (!tin.key.fromMe && banChats === false) return
switch (command) {
	case 'hacked':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Teksnya?')
reply('Otw Kudeta')
tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
tino.updateProfilePicture (from, tessgc)
await sleep(1000)
tino.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
await sleep(1000)
tino.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)
await sleep(1000)
tino.sendMessage(from, 'Succes Hacked', text, {quoted: tin})
break
case 'sendbug':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (args.length < 1) return reply(`Penggunaan ${command} idgroup`)
tino.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
tino.sendBugGC(args[1], 0)
tino.sendBugGC(args[1], 999)
textImg('done owner')
break
case "typepdf":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
  tino.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: tin, messageId: "PDF"+createSerial(8)})
break
case "nocode":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
  tino.sendMessage(from, "Reply this text with nhentai gotoubun example title\n\nNote : Reply this text !", text, {quoted: tin, messageId: "NOCODE"+createSerial(8)})
break
case "cadangan":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
reply('Cari kode nhentai dengan ciri ciri yg kamu cari contoh !ns gotoubun ')
break
case "typeimage":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
  tino.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: tin, messageId: "IMAGE"+createSerial(8)})
break
case "nhentai1":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
buttons = [{buttonId: noprefix ? "typepdf" : "!"+"typepdf",buttonText:{displayText: 'PDF'},type:1},{buttonId:noprefix ? "typeimage" : "!"+"typeimage", buttonText:{displayText:'IMAGE'},type:1}]
buttonsMessage = {
contentText: `Choose your type, your want i send image or pdf?`,
footerText: 'Nhentai Downloader',
buttons: buttons,
headerType: 1
}
prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{})
tino.relayWAMessage(prep)
break
case "ns":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
reply (`Wait, sis, I can help you find the code, okay `)
 a = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolhumanapi}&query=${q}`)
   teks = ``
  b = a.data.result
  for (let c of b) {
    for (let i in c) {
      teks += `• ${i} :  ${c[i].toString()}\n\n`
    }
  }
  tino.sendMessage(from, teks, "conversation", {
    quoted: tin })
    break
case "nhentai":
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
buttons = [{buttonId: noprefix ? "cadangan" : "!"+"cadangan",buttonText:{displayText: 'NO'},type:1},{buttonId:noprefix ? "nhentai1" : "!"+"nhentai1", buttonText:{displayText:'YES'},type:1}]
buttonsMessage = {
contentText: `Do you have the code or not?`,
footerText: 'Nhentai Downloader',
buttons: buttons,
headerType: 1
}
prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{})
tino.relayWAMessage(prep)
break
case 'owner': case 'creator':
sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
await sleep(1000)
txtt =`ʜᴀɪ!! ${pushname}\nɪᴛᴜ ᴏᴡɴᴇʀᴋᴜ, ᴍᴀᴜ ᴛᴀᴜ ꜱᴏᴀʟ ᴀᴘᴀ ʏᴀ?`
buttons = [{buttonId: '!sourcecode',buttonText:{displayText: 'SC BOT'},type:1},{buttonId:'!infoig',buttonText:{displayText:'YOUTUBE'},type:1}]
buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Sungkan Chat Ya Kak',
buttons: buttons,
headerType: 1
}
prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{})
tino.relayWAMessage(prep)
break      
case 'spamcall':{
	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return reply(mess.OnlyPrem)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=chika-key&no=${args[1]}`)
.then((data) => {
    textImg(data.result.logs)
    })
               .catch((err) => {
            sendMess(ownerNumber, `${command} Error:` + err)
            reply(mess.error.api)
        })
}
break
case 'next': case 'leave': case "stop": {
	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  tino.anonymous = tino.anonymous ? tino.anonymous: {}
  let room = Object.values(tino.anonymous).find(room => room.check(sender))
  if (!room) {
    await tino.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${tino.user.name}`, 'Cari Partner', prefix+'start')
    return false
  }
  reply('_You stopped matchmaking_')
  let other = room.other(sender)
  if (other) await tino.sendButton(other, '_Partner meninggalkan chat_', `${tino.user.name}`, 'Cari Partner', prefix+'start')
  delete tino.anonymous[room.id]
  if (command === 'leave' || command === "stop") break
  }
  
  case 'mulai': case 'start': case "anonymous": case "mutual": {
  	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
    tino.anonymous = tino.anonymous ? tino.anonymous: {}
    if (Object.values(tino.anonymous).find(room => room.check(sender))) {
      await tin.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${tino.user.name}`, 'Keluar', `${prefix}leave`)
      return false
    }
    let room = Object.values(tino.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
    if (room) {
      await tino.sendButton(room.a, '_Partner ditemukan!_', `${tino.user.name}`, 'Next', prefix+'next')
      room.b = sender
      room.state = 'CHATTING'
      await tino.sendButton(room.b, '_Partner ditemukan!_', `${tino.user.name}`, 'Next', prefix+'next')
    } else {
      let id = + new Date
      tino.anonymous[id] = {
        id,
        a: sender,
        b: '',
        state: 'WAITING',
        check: function (who = '') {
          return [this.a,
            this.b].includes(who)
        },
        other: function (who = '') {
          return who === this.a ? this.b: who === this.b ? this.a: ''
        },
      }
      await tino.sendButton(from, '_Menunggu partner..._', `${tino.user.name}`, 'Keluar', prefix+'leave')
    }
    break
  }
           case 'bucinstick':
           case'bucinsticker':{
         if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
    var wifegerak = ano.split('\n')
    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
    var isGif = wifegerakx.endsWith('.gif') ? true : false
    if (!isGif) {
    var ngebuff = await getBuffer(wifegerakx)
    var media = getRandom('.png')
    fs.writeFileSync(media, ngebuff)
    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
    if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    } else {
     var ngebuff = await getBuffer(wifegerakx)
 	let media = `./sticker/${sender}.gif`
    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    }
    }
    break
            case 'spamsms':{
            	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isPremium) return reply(`khusus premium`)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
   
  
try {
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhumanapi}&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhumanapi}&nomor=${args[1]}`)
    reply("Success")
               } catch (err) {
            sendMess(ownerNumber, `${command} Error:` + err)
            reply(mess.error.api)
               }
}
break
   
       case '!':
       case '#':
       case 'z':
       case '.':
       
       
       break
                      ////NEW UPDATE COPAS DARI XINZ
                      case 'threats':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'buriq': case 'burik':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'getstory':
               if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
          if (!args.length) return reply(from, "Urutan keberapa? #getstory urutan", lin)
          quotedText = tin.message.extendedTextMessage.contextInfo.quotedMessage.conversation
          var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')
          var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)
          
          if (!q.match(/^[0-9]/)) return reply(from, "Pastikan urutan hanya angka", tin)
          var typemsgg = image
          if (a.data.data[q - 1].type === "mp4") typemsgg = video
          await tino.sendMessage(from, {url: `${a.data.data[q - 1].url}`}, typemsgg)
        
      break
      case 'igstory':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

      if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
        var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${args.join(" ")}`)
        var teks = `*Instagram story downloader*\n\n👱🏻‍♂️ *Username :* ${a.data.username}\n🖼️ *Count :* ${a.data.stories_count}\n\nreply pesan dan ketik *${prefix}getstory urutan* untuk mengambil media\n\n`
        var urut = 1
        for (let i = 0; i < a.data.data.length; i++) {
        var ab = await axios.get(`https://megayaa.herokuapp.com/api/short/tiny?url=${a.data.data[i].url}`)
          teks += `*Urutan : ${urut++}*\n💻 *Type :* ${a.data.data[i].type === "mp4" ? "video 🎥" : "foto 📸"}\n📑 *Url :* ${ab.data.result}\n\n`
        }
        tino.sendMessage(from, teks, text,{ quoted: tin})
        
        
        break
            case 'deep': case 'deepfry':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'magik': case 'magic':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'blurpify':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'captcha':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'glass':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'greyscale':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'invert':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'tagme':
               if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case 'invertgrey':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    tino.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
                      case 'nulishelp':
                      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case 'nuliskiri':{
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    tino.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'nuliskanan':{
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    tino.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokiri':{
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    tino.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokanan':{
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    tino.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
     case 'slap':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
                    tino.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'pat':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
                    tino.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'baka':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
                    tino.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
  
                 case 'semoji2': {
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
                    if (args.length === 2) {
                    fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (var x in res.result.emoji) {
                        let yy = {title: 'Model ke-' + startnum++,
                        rows: [
                           {
                            title: `${x}`,
                            description: `${x} model`,
                            rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    tino.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)
                    })
                   .catch((err) => {
                            tino.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (args.length === 3) {
                    tino.sendSticker(from, args[2], msg)
             		
                    }
                    }
                    break
                 case 'ceritasex': case 'cersex':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
                    fetchJson('http://docs-jojo.herokuapp.com/api/cersex')
                    .then((res) => tino.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))
                    .catch((err) => {
                            tino.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                    case 'aspan': case 'ptl': case 'ptlvid':{
                    	
                if (!isPremium) return reply(mess.OnlyPrem)
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        tino.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)
                })
                }
                break
                case 'spamcall2':{
                	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)
                .then((data) => {
                    textImg(data.result)
                    })
               .catch((err) => {
                            tino.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
                case 'hug':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
                    tino.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'cium':
                    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
                    tino.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
case 'bokep': case 'bkp': case 'randombokep':{
	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isPremium) return reply(mess.OnlyPrem)

fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
    var bokepp = JSON.parse(JSON.stringify(data))
    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
    textImg(bokep2.teks)
})
}
break
////Anti delete
case 'antidelete':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./metadata/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./metadata/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./metadata/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./metadata/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./metadata/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./metadata/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./metadata/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./metadata/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
				//
				case 'setname':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
               await tino.updateProfileName(q)
                    reply(`Success`)
	            break
	case 'revoke':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

			    case 'revokegroup':
				case 'revokelink': {
					
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		        var linkgc = await tino.revokeInvite(from)
                mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
            }
					break
					//------------------< Enable / Disable >-------------------
            case 'antibadword':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./metadata/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (args[1].toLowerCase() === 'disable'){
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./metadata/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    testqq(from, `antibadword`)
                }
                break
            case 'listbadword':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                 bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case 'addbadword':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'delbadword':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
   case 'antiviewonce':
  case 'antivo':
  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntiviewonce) return reply(`Udah aktif`)
      antivo.push(from)
      fs.writeFileSync('./metadata/antiviewonce.json', JSON.stringify(antivo))
      reply('Antiview Once grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antivo.indexOf(from)
      antivo.splice(anu, 1)
      fs.writeFileSync('./metadata/antiviewonce.json', JSON.stringify(antivo))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    case 'antidelete':
    case 'antidel':
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntidel) return reply(`Udah aktif`)
      antidel.push(from)
      fs.writeFileSync('./metadata/antidelete.json', JSON.stringify(antidel))
      reply('anti delete grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./metadata/antidelete.json', JSON.stringify(antidel))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    case 'exampleid':
    case 'contoh':
    case 'carapakai':
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    tutor = `
*TERDETEKSI INDONESIA*

Ini adalah bot WhatsApp yg bisa membantu anda !
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*
    
# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytdl di teruskan judul/link YouTube*
    
# *!tahta* yaitu untuk membuat logo *kirim perintah !tahta di lanjut nama request terserah kalian*
    
# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*
    
# *!pinterest* yaitu untuk membantu mencari gambar *kirim perintah !pinterest lanjut dengan gambar yg kalian cari*
    
# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto *kirim perintah !nulis di lanjut dengan teks yg akan di tulis*
    
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*
    
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*
    
*Warning*
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik
-dilarang masukan bot sembarang grup (izin owner,)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
    
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !command* `
    
    reply(tutor)
    
    break
    
    case 'exampleen':
    case 'methoden':
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    tutor1 = 
`*ENGLISH DETECTED*

This is a WhatsApp bot that can help you!
simple command example 

# *!sticker* is to make a sticker on WhatsApp *send/reply a photo* with the caption *!sticker* 

# *!ytdl* that is to download video/audio from YouTube *send command !ytdl in forward YouTube title/link* 

# *!tahta* that is to make a logo *send orders! throne in advance the name of the request is up to you* 

# *!anime* that is for stalk anime *send command !anime continues anime title*

# *!pinterest*, which is to help you find images *send a command! further pinterest with the image you are looking for*

# *!write/nulis* that is to help you write something in the form of a photo *send a command !write further with the text to be written*

# *!alquran*, which is to see the contents of the letter you are looking for and its meaning *send orders!Alquran is continued with the verse and surah you are looking for* 

*Please try other features that have been provided by the bot*

*Warning* 
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules* 
You can see other menus for yourself by typing !command `
    reply(tutor1)
    break
    case "astetick":
    case "videoanime":
    case "storyanime2":
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


    reply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     tino.sendMessage(from, Iki, video, {quoted: freply, thumbnail: fakeimage })
     break
      case 'help':
       case 'menu':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


thu = await tino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

       groups = tino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = tino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await tino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menu =`${botName}
      
 ${ucapanWaktu} ${pushname} 👋
╭─❒ 「 ⚠️ *${botName}* 」 ❒  
│                *ᴄᴀʟᴇɴᴅᴇʀ*
│ ♨️ *ᴅᴀʏ* : ${week} ${weton}
│ ♨️ *ᴅᴀᴛᴇ* : ${date}

│ ♨️ *ᴛᴏᴛᴀʟ ᴜsᴇʀ* : 569
└─❏        
╭─❒ 「 ⚠️ *User Info* 」 ❒
│ ♨️ *ᴜꜱᴇʀɴᴀᴍᴇ* : ${pushname}
│ ♨️ *ʙɪᴏ ɪɴꜰᴏ* : ${thu.status}
│ ♨️ *ᴘʀᴇᴍɪᴜᴍ* : ${isPremium ? 'ʏᴀ' : 'ɴᴏ'}
│ ♨️ *ᴀᴅᴍɪɴ* : ${isGroupAdmins ? 'ʏᴀ' : 'ɴᴏ'}
│ ♨️ *ʟᴇᴠᴇʟ*: ${Levelnye}
│ ♨️ *ᴇxᴘ*: ${Xpluu} / ${requiredXplu}
└─❏
╭─❒ 「 ⚠️ *𝙱𝚘𝚝 𝙸𝚗𝚏𝚘* 」 ❒
│♨️ *ꜱᴘᴇᴇᴅ* : *${latensie.toFixed(4)} _Second_*
│♨️ *ᴀᴄᴛɪᴠᴇ* : *${runtime(process.uptime())}*
│♨️ *ᴘʟᴀᴛꜰᴏʀᴍ* : *${os.platform()}*
└─❏
    🔖 ᴘʀᴇᴍɪᴜᴍ ʟᴏɢᴏ
    🏷️ ғʀᴇᴇ ʟᴏɢᴏ
    
    sᴇᴡᴀ ʙᴏᴛ ᴛʏᴘᴇ (ᴋᴇᴛɪᴋ) ${prefix}sewabot
  ʙᴏᴛ ғᴀsᴛ ʀᴇsᴘᴏɴ ᴀɴᴅ ᴀᴘɪᴋᴇʏ ʟᴀɴᴄᴀʀ

       =======||||======
 *ꜰᴀᴛʜᴇʀ-ʙᴏᴛ ᴀᴅᴀʟᴀʜ ʟᴀʏᴀɴᴀɴ ʙᴏᴛ*
 *ᴏʀᴅᴇʀ ʙᴏᴛ ꜱᴄʀɪᴘᴛ ʙᴏᴛ ʜᴜʙᴜɴɢɪ ᴀᴅᴍɪɴꜱ*
`

              
    tino.sendMessage(from, { contentText: `${menu}`, footerText: `🐣 Day : ${week} ${weton}\n🐥 Date : ${date}`,buttons: [{ buttonId: noprefix ? "command" : "!"+"command", buttonText: { displayText: '⚠️ ʟɪꜱᴛ ᴍᴇɴᴜ ʙᴏᴛ' }, type: 1 },{ buttonId: noprefix ? "curhat" : "!"+"curhat", buttonText: { displayText: '⚠️ ᴄᴜʀʜᴀᴛ ᴋᴇ ʙᴏᴛ' }, type: 1 },{ buttonId: noprefix ? "menu" : "!"+"botanon", buttonText: { displayText: '⚠️ ᴀɴᴏɴʏᴍᴏᴜꜱ ᴄʜᴀᴛ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
              case "botanon":
              if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


              tutor2 = 
`                      *ANONYMOUS BOT*
Fitur Chat Random Yang Sebelumnya Ada Di Telegram ,Sekarang Bisa di akses di WhatsApp*
*CARA PENGGUNAAN
*⚠️ !start -> Untuk memulai mencari pathner*

*⚠️ !next  -> Untuk Skip pathner Yang sedang terhubung*

*⚠️ !stop -> Untuk Berhenti mencari pathner*

*⚠️⚠️PERHATIAN⚠️⚠️*
🚫 Spam Bot
🚫 Telefon Bot
🚫 Toxic`

    reply(tutor2)
              break
              
case 'f':
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
tino.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: ikymemek})
           break
   case 'kalender':
              reply(`
🐣Day ${week} ${weton} 
🐥Date : ${date}
`)
break
              
case 'textpro':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*


▹🏷️ ${prefix}「 Text Pro Me 」
▹🏷️${prefix} blackpink text
▹🏷️ ${prefix} neon text
▹🏷️ ${prefix} greenneon text
▹🏷️ ${prefix} advanceglow text
▹🏷️ ${prefix} futureneon text
▹🏷️ ${prefix} sandwriting text
▹🏷️${prefix} sandsummer text
▹🏷️ ${prefix} sandengraved text
▹🏷️ ${prefix} metaldark text
▹🏷️ ${prefix} neonlight text
▹🏷️ ${prefix} holographic text
▹🏷️ ${prefix} text1917 text
▹🏷️ ${prefix} minion text
▹🏷️ ${prefix} deluxesilver text
▹🏷️ ${prefix} newyearcard text
▹🏷️ ${prefix} bloodfrosted text
▹🏷️ ${prefix} halloween text
▹🏷️ ${prefix} jokerlogo text
▹🏷️ ${prefix} fireworksparkle text
▹🏷️ ${prefix} natureleaves text
▹🏷️ ${prefix} bokeh text
▹🏷️ ${prefix} toxic text
▹🏷️ ${prefix} strawberry text
▹🏷️ ${prefix} box3d text
▹🏷️ ${prefix} roadwarning text
▹🏷️ ${prefix} breakwall text
▹🏷️ ${prefix} icecold text
▹🏷️ ${prefix} luxury text
▹🏷️ ${prefix} cloud text
▹🏷️ ${prefix} summersand text
▹🏷️ ${prefix} horrorblood text
▹🏷️ ${prefix} thunder text
▹🏷️ ${prefix} pornhub text1 text2
▹🏷️ ${prefix} glitch text1 text2
▹🏷️ ${prefix} avenger text1 text2
▹🏷️ ${prefix} space text1 text2
▹🏷️ ${prefix} ninjalogo text1 text2
▹🏷️ ${prefix} marvelstudio text1 text2
▹🏷️ ${prefix} lionlogo text1 text2
▹🏷️ ${prefix} wolflogo text1 text2
▹🏷️ ${prefix} steel3d text1 text2
▹🏷️ ${prefix} wallgravity text1 text2
 `
sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'fitnah':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					if (!isGroup) return reply('ONLY GRUP')
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = tin.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 tino.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'wibu2':
case 'nsfwanime':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*

[ ɴsғᴡ ᴀɴɪᴍᴇ ᴍᴇɴᴜ ]
▹ 🔖${prefix} chiisaihentai
▹ 🔖${prefix} trap
▹ 🔖${prefix} blowjob
▹ 🔖${prefix} yaoi
▹ 🔖${prefix} ecchi
▹ 🔖${prefix} hentai
▹ 🔖${prefix} ahegao
▹ 🔖${prefix} hololewd
▹ 🔖${prefix} sideoppai
▹ 🔖${prefix} animefeets
▹ 🔖${prefix} animebooty
▹ 🔖${prefix} animethighss
▹ 🔖${prefix} hentaiparadise
▹ 🔖${prefix} animearmpits
▹ 🔖${prefix} hentaifemdom
▹ 🔖${prefix}lewdanimegirls
▹ 🔖${prefix} biganimetiddies
▹ 🔖${prefix} animebellybutton


`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'randomimage':
case 'randomimage':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*

[ ʀ ᴀ ɴ ᴅ ᴏ ᴍ  ɪ ᴍ ᴀ ɢ ᴇ ]
▹ 🏷️${prefix} bj
▹ 🏷️${prefix} ero
▹ 🏷️${prefix} ppcp
▹ 🏷️${prefix} cum
▹ 🏷️${prefix} feet
▹ 🏷️${prefix} yuri
▹ 🏷️${prefix} trap
▹ 🏷️${prefix} lewd
▹ 🏷️${prefix} feed
▹ 🏷️${prefix} eron
▹ 🏷️${prefix} solo
▹ 🏷️${prefix}gasm
▹ 🏷️${prefix} poke
▹ 🏷️${prefix} anal
▹ 🏷️${prefix} holo
▹ 🏷️${prefix} tits
▹ 🏷️${prefix} kuni
▹ 🏷️${prefix} kiss
▹ 🏷️${prefix} erok
▹ 🏷️${prefix} smug
▹ 🏷️${prefix} baka
▹ 🏷️${prefix} solog
▹ 🏷️${prefix} feetg
▹ 🏷️${prefix} lewdk
▹ 🏷️${prefix} waifu
▹ 🏷️${prefix} pussy
▹ 🏷️${prefix} femdom
▹ 🏷️${prefix} cuddle
▹ 🏷️${prefix} hentai
▹ 🏷️${prefix} eroyuri
▹ 🏷️${prefix} cum_jpg
▹ 🏷️${prefix} blowjob
▹ 🏷️${prefix} erofeet
▹ 🏷️${prefix} holoero
▹ 🏷️${prefix} classic
▹ 🏷️${prefix} erokemo
▹ 🏷️${prefix} fox_girl
▹ 🏷️${prefix} futanari
▹ 🏷️${prefix} lewdkemo
▹ 🏷️${prefix}wallpaper
▹ 🏷️${prefix} pussy_jpg
▹ 🏷️${prefix} kemonomimi
▹ 🏷️${prefix} nsfw_avatar
▹ 🏷️${prefix} cecan

`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        
        case 'photoxy':
case 'photooky':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*

▹ 🏷️${prefix} shadow text
▹ 🏷️${prefix} cup text
▹ 🏷️${prefix} cup1 text
▹ 🏷️${prefix} romance text
▹ ??️${prefix} smoke text
▹ 🏷️${prefix} burnpaper text
▹ 🏷️${prefix} lovemessage text
▹ 🏷️${prefix} undergrass text
▹ 🏷️${prefix} love text
▹ 🏷️${prefix} coffe text
▹ 🏷️${prefix} woodheart text
▹ 🏷️${prefix} woodenboard text
▹ 🏷️${prefix} summer3d text
▹ 🏷️${prefix} wolfmetal text
▹ 🏷️${prefix} nature3d text
▹ 🏷️${prefix} underwater text
▹ 🏷️${prefix} golderrose text
▹ 🏷️${prefix} summernature text
▹ 🏷️${prefix} letterleaves text
▹ 🏷️${prefix} glowingneon text
▹ 🏷️${prefix} fallleaves text
▹ 🏷️${prefix} flamming text
▹ 🏷️${prefix} harrypotter text
▹ 🏷️${prefix} carvedwood text
▹ 🏷️${prefix} tiktok text1 text2
▹ 🏷️${prefix}arcade8bit text1 text2
▹ 🏷️${prefix} battlefield4 text1 text2
▹ 🏷️${prefix} pubg text1 text2

`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'simi':
        

					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break 
					case 'simih':
					
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'darkjoke': 
				

				buff = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${lolhumanapi}`, {method: 'get'})
				buttons = [{buttonId: noprefix ? "infoig" : "!"+"infoig",buttonText:{displayText: ` ©WhatsApp bot`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
break
        case 'ephoto':
case 'ephotomenu':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*


「 Ephoto 360 」
▹ 🏷️${prefix} wetglass text
▹ 🏷️${prefix} multicolor3d text
▹ 🏷️${prefix} watercolor text
▹ 🏷️${prefix} luxurygold text
▹ 🏷️${prefix} galaxywallpaper text
▹ 🏷️${prefix} lighttext text
▹ 🏷️${prefix} beautifulflower text
▹ 🏷️${prefix} puppycute text
▹ 🏷️${prefix} royaltext text
▹ 🏷️${prefix} heartshaped text
▹ 🏷️${prefix} birthdaycake text
▹ 🏷️${prefix} galaxystyle text
▹ 🏷️${prefix} hologram3d text
▹ 🏷️${prefix} greenneon text
▹ 🏷️${prefix} glossychrome text
▹ 🏷️${prefix} greenbush text
▹ 🏷️${prefix} metallogo text
▹ 🏷️${prefix}noeltext text
▹ 🏷️${prefix} glittergold text
▹ 🏷️${prefix} textcake text
▹ 🏷️${prefix} starsnight text
▹ 🏷️${prefix} wooden3d text
▹ 🏷️${prefix} textbyname text
▹ 🏷️${prefix} writegalacy text
▹ 🏷️${prefix} galaxybat text
▹ 🏷️${prefix} snow3d text
▹ 🏷️${prefix} birthdayday text
▹ 🏷️${prefix} goldplaybutton text
▹ 🏷️${prefix} silverplaybutton text
▹ 🏷️${prefix} freefire text

`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'randomvideo':
        
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*
「 Random Video 」
▹ ${prefix} lolivid
▹ ${prefix} asupan
▹ ${prefix} storyanime
▹ ${prefix} astetick
▹ ${prefix} videoanime

`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'wasted':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
					}
					break
					case 'tahta':
					
					buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
		      buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: ` ©WhatsApp bot`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
break
				case 'quotesmaker':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyOgiwara`)
					tino.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})
				case 'tinyurl':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
					tino.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
				case 'cuttly':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
					tino.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: freply})
					break
				case 'shorturl':
				
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
					tino.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
        case 'imagemani':
case 'imageefek':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isRegistered) return reply(ind.only.daftarB)
wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*
 *IMAGE MANIPULATION*
 
▹ ${prefix} darkjoke
▹ ${prefix} meme
▹ ${prefix} joke
▹ ${prefix} wasted
▹ ${prefix} hitler
▹ ${prefix} wanted
▹ ${prefix} greyscale
▹ ${prefix} trash
▹ ${prefix} circle
▹ ${prefix} blur
▹ ${prefix} tinyurl
▹ ${prefix} cuttly
▹ ${prefix} affect
▹ ${prefix} picture


`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        
        case '18+':
        case 'porno':
case '18':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*
MENU INI BERISI FITUR 18+
SEBELUM MELANJUTKAN PASTIKAN ANDA BERUMUR 18+
`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: `${prefix}pornmenu`,
            buttonText: {
              displayText: `⬡ LANJUTAN `,
            },
            type: 1,
          },]);
        break;
        
   // Random Text //
  ///// LOLHUMAN API
  case 'spam':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					tino.sendMessage(from, argsi[0], MessageType.text)
				}
				break
				

	
  case 'picture':
  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
					}
					break
					
				case 'affect':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)
					}
					break
				case 'invert':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
					}
					break
				case 'firework':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyOgiwara`)
						buff = await getBuffer(anu.result.url)
						tino.sendMessage(from, buff, video, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)
					}
					break
				case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
					}
					break
			case 'blur':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
					}
					break
				case 'circle':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
					}
					break
  case 'trash':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
					}
					break
					case 'wiki':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					tino.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: freply})
					break
  case 'wanted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
					}
					break
					case 'joke':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
						owgi = await tino.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
						tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
					}
					break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'neko':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhumanapi}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhumanapi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
       

    break


case 'ppcp':
case 'ppcouple':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©WhatsApp bot`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
             setTimeout( async () => {
 tino.relayWAMessage(prep)
}, 5000)
break

case 'meme':
case 'memek':


 buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
    
break
    // Textprome //
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':

if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
reply (mess.wait)
    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
    ini_txt = args.join(" ")
  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumanapi}&text=${ini_txt}`)
 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
    txt1 = args[0]
    txt2 = args[1]
 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhumanapi}&text1=${txt1}&text2=${txt2}`)
          buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break

    // Photo Oxy //
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
    ini_txt = args.join(" ")
  buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhumanapi}&text=${ini_txt}`)
          buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break
case 'ttlogo':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':

if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
reply (mess.wait)
    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
    txt1 = args[0]
    txt2 = args[1]

buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolhumanapi}&text1=${txt1}&text2=${txt2}`)
          buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break

    // Ephoto 360 //
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
    ini_txt = args.join(" ")
             buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumanapi}&text=${ini_txt}`)
               buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break
   
  case 'cecan':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=fatherbot`)
               buttons = [{buttonId: noprefix ? "cecan" : "!"+"cecan",buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        
    break
    
             
  
   case 'setwelcome':
					  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
    tino.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					tino.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
         case 'public':
        	  if (!tin.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              textImg(`Sukses mode publik gan`)
              break
case "set":
case "mode":
        if (!tin.key.fromMe) return;
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `⬡ SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `⬡ PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
        case "example":
case "contoh":
        sendButMessage(from, `Please select the language you use`, `Choose a language below`, [
          {
            buttonId: `${prefix}exampleid`,
            buttonText: {
              displayText: `⬡ INDONESIA `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}exampleen`,
            buttonText: {
              displayText: `⬡ ENGLISH`,
            },
            type: 1,
          },
        ]);
        break;
	      case 'self':
              if (!tin.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Success mode self gan`)
              break
case 'quotes':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolhumanapi}`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*â€• ${author}*`)
    break
case 'quotesanime':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhumanapi}`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
    break
case 'quotesdilan':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhumanapi}`)
     reply(get_result.result)

   break
    break
case 'quotesimage':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (mess.wait)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolhumanapi}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
              break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`)
   titid = get_result.result
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
    break
case 'randomnama':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolhumanapi}`)
    tini = anu.result
   sendButMessage(from, tini, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
    break
       // Movie & Story
case 'lk21':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolhumanapi}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Link : ${get_result.link}\n`
    ini_txt += `Genre : ${get_result.genre}\n`
    ini_txt += `Views : ${get_result.views}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Tahun : ${get_result.tahun}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
    ini_txt += `Location : ${get_result.location}\n`
    ini_txt += `Date Release : ${get_result.date_release}\n`
    ini_txt += `Language : ${get_result.Language}\n`
    ini_txt += `Link Download : ${get_result.link_dl}`
    thumbnail = await getBuffer(get_result.thumbnail)
    await tino.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
    break
case 'drakorongoing':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = "Ongoing Drakor\n\n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n`
        ini_txt += `Year : ${x.category}\n`
        ini_txt += `Total Episode : ${x.total_episode}\n`
        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
    }
    reply(ini_txt)
    break
case 'wattpad':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
    ini_url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolhumanapi}&url=${ini_url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Motify date : ${get_result.modifyDate}\n`
    ini_txt += `Create date: ${get_result.createDate}\n`
    ini_txt += `Word : ${get_result.word}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Vote : ${get_result.vote}\n`
    ini_txt += `Reader : ${get_result.reader}\n`
    ini_txt += `Pages : ${get_result.pages}\n`
    ini_txt += `Description : ${get_result.desc}\n\n`
    ini_txt += `Story : \n${get_result.story}`
    thumbnail = await getBuffer(get_result.photo)
    await tino.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
    break
case 'wattpadsearch':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolhumanapi}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case 'cerpen':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
    break
case 'ceritahoror':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Desc : ${get_result.desc}\n`
    ini_txt += `Story :\n${get_result.story}\n`
    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        break

                 case 'grupmenu':
            case 'groupmenu':
            case 'menugroup':
            case 'menugrup':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

   wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*
             
  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ 🏷️${prefix} ɢʀᴏᴜᴘ *ᴇɴᴀʙʟᴇ/ᴅɪꜱᴀʙʟᴇ*
▹ 🏷️${prefix} ʟᴇᴠᴇʟɪɴɢ *ᴇɴᴀʙʟᴇ/ᴅɪꜱʙʟᴇ*
▹ 🏷️${prefix} ᴡᴇʟᴄᴏᴍᴇ *ᴇɴᴀʙʟᴇ/ᴅɪꜱᴀʙʟᴇ*
▹ 🏷️${prefix} ᴀɴᴛɪʟɪɴᴋ *ᴇɴᴀʙʟᴇ/ᴅɪꜱᴀʙʟᴇ*
▹ 🏷️${prefix} ᴍᴜᴛᴇ *ᴇɴᴀʙʟᴇ/ᴅɪꜱᴀʙʟᴇ*
▹ 🏷️${prefix}  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
▹ 🏷️${prefix}  ᴄᴇᴋꜱᴇᴡᴀ
▹ 🏷️${prefix}  ɪɴꜰᴏɢʀᴜᴘ
▹ 🏷️${prefix}  ᴘʀᴏᴍᴏᴛᴇall
▹ 🏷️${prefix}  ʟɪꜱᴛᴏɴʟɪɴᴇ
▹ 🏷️${prefix}  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
▹ 🏷️${prefix}  BANGROUP
▹ 🏷️${prefix}  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
▹ 🏷️${prefix}  ᴀᴅᴅ *+62xxxxxx*
▹ 🏷️${prefix}  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
▹ 🏷️${prefix}  ꜱᴇᴛᴘᴘɢʀᴜᴘ
▹ 🏷️${prefix}  ꜱᴇᴛᴅᴇꜱᴄ
▹ 🏷️${prefix}  antidel *enable/disable*
▹ 🏷️${prefix}  antiviewonce *enable/disable*
▹ 🏷️${prefix}  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
▹ 🏷️${prefix}  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*

`
   sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        case 'storymenu':
        case 'moviemenu':
        case 'menumovie':
        
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*

  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹🏷️${prefix} drakorongoing
▹🏷️${prefix} lk21 query
▹🏷️${prefix} wattpad url_wattpad
▹🏷️${prefix} wattpadsearch query
▹🏷️${prefix} cerpen
▹🏷️${prefix} ceritahoror

`
sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
               
        case 'randomtext':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

   
   wibu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*


  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍U
▹ 🏷️${prefix} quotes
▹ 🏷️${prefix}quotesdiLan
▹ 🏷️${prefix} quotesanime
▹ 🏷️${prefix} quotesimage
▹ 🏷️${prefix} faktaunik
▹ 🏷️${prefix} katabijak
▹ 🏷️${prefix} pantun
▹ 🏷️${prefix} bucin
▹ 🏷️${prefix} randomnama
`
sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
        
                  case 'ownermenu':
        case  'menuowner':
              if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

 wibu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}bc *teks*
▹ ${prefix}term
▹ ${prefix}self
▹ ${prefix}public
▹ ${prefix}eval
▹ ${prefix}reset
▹ ${prefix}clearall
▹ ${prefix}leaveall
▹ ${prefix}addvn
▹ ${prefix}getvn
▹ ${prefix}addimage
▹ ${prefix}getimage
▹ ${prefix}addvideo
▹ ${prefix}getvideo
▹ ${prefix}slow
▹ ${prefix}leaveall
▹ ${prefix}join *link gc*
▹ ${prefix}shutdown
▹ ${prefix}getquoted
▹ ${prefix}addupdate *fiturnya*
▹ ${prefix}exif *nama|author*
▹ ${prefix}sewa add/del *waktunya*
▹ ${prefix}premium add @tag|nomor
▹ ${prefix}premium del @tag|nomor
▹ ${prefix}ban nomor 62
▹ ${prefix}unban nomor 62
▹ ${prefix}setprefix

`

               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
       case 'wibumenu':
        case  'menuwibu':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

  wibu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ 🏷️${prefix}loli
▹ 🏷️${prefix}manga
▹ 🏷️${prefix}anime 
▹🔖${prefix}lolivideo
▹ 🏷️${prefix}husbu
▹ 🏷️${prefix}waifu
▹ 🏷️${prefix}milf
▹ 🏷️${prefix}neko
▹ 🏷️${prefix}kanna
▹ 🏷️${prefix}sagiri
▹ 🏷️${prefix}hentai
▹ 🏷️${prefix}cosplay
▹ 🏷️${prefix}wallnime
▹ 🏷️${prefix}kusonime
▹ 🏷️${prefix}megumin
▹ 🏷️${prefix}otakudesu
▹ 🏷️${prefix}doujindesu
▹ 🏷️${prefix}storyanime
▹ 🏷️${prefix}nakanomiku
▹ 🏷️${prefix}nakanotino
▹ 🏷️${prefix}nakanoitsuki
▹ 🏷️${prefix}otakuongoing
▹ 🏷️${prefix}nhentai *code*
▹ 🏷️${prefix}nekopoi *link*
▹ 🏷️${prefix}nekopoisearch
`

               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
               
        
       case 'downloadmenu':
        case  'menudownload':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

 wibu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹🔖 ${prefix}fb 
▹🔖 ${prefix}igdl 
▹🔖 ${prefix}igdl2 
▹🔖 ${prefix}twitter 
▹🔖 ${prefix}tiktok
▹🔖 ${prefix}tiktoknowm
▹🔖 ${prefix}tiktokmp3
▹🔖 ${prefix}play 
▹🔖 ${prefix}ythd 
▹🔖 ${prefix}ytmp3 
▹🔖 ${prefix}ytmp4 
▹🔖 ${prefix}soundcloud 
▹🔖 ${prefix}mediafire 
▹🔖 ${prefix}linedl
▹🔖 ${prefix}teledl
▹🔖 ${prefix}getstory
▹🔖 ${prefix}igstory
▹🔖 ${prefix}nhentaipdf *code*
`

               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;

   
     case 'othermenu':
        case  'menuother':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              wibu =`
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}brainly *query*
▹ ${prefix}shopee *product*
▹ ${prefix}playstore *query*
▹ ${prefix}ssweb *query*
▹ ${prefix}google *query*
▹ ${prefix}image *query*
▹ ${prefix}pinterest *query*
▹ ${prefix}nulis *teks*
▹ ${prefix}iguser *ussername*
▹ ${prefix}igstalk *username*
▹ ${prefix}githubstalk *username*
▹ ${prefix}tiktokstalk *ussername*
▹ ${prefix}img2url *reply foto*
▹ ${prefix}ytsearch *query*
▹ ${prefix}translate *text* hanya Translate 1 kata ke Inggris
`

               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
   
   case 'gamemenu':
        case  'menugame':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              wibu =`
 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔

▹ ${prefix}voting
▹ ${prefix}limitgame
▹ ${prefix}gelud @tag
▹ ${prefix}tictactoe @tag
▹ ${prefix}siapaaku
▹ ${prefix}family100
▹ ${prefix}asahotak
▹ ${prefix}tebaklirik
▹ ${prefix}tebaklagu
▹ ${prefix}tebakkata
▹ ${prefix}susunkata
▹ ${prefix}kimiakuis
▹ ${prefix}caklontong
▹ ${prefix}tebakjenaka
▹ ${prefix}tebakanime
▹ ${prefix}tebaktebakan
▹ ${prefix}tebakgambar
▹ ${prefix}tebakbendera
▹ ${prefix}suit *batu/kertas/gunting*
`


               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
               case 'stickermenu':
        case  'stikermenu':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ 🏷️${prefix}dadu
▹ 🏷️${prefix}bucinstick
▹ 🏷️${prefix}doge
▹ 🏷️${prefix}toimg
▹ 🏷️${prefix}patrick
▹ 🏷️${prefix}ttg *teks*
▹ 🏷️${prefix}attp *teks*
▹ 🏷️${prefix}stickeranime
▹ 🏷️${prefix}semoji *emoji*
▹ 🏷️${prefix}sticker *reply foto/video*
▹ 🏷️${prefix}smeme *teks|teks*
▹ 🏷️${prefix}swm *pack|author*
▹ 🏷️${prefix}take *pack|author* 
▹ 🏷️${prefix}tovideo *reply sgif*
▹ 🏷️${prefix}triggered *reply image*


`



               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
    case 'funmenu':
        case  'menufun':
        
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*


 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ 🏷️${prefix}mining
▹ 🏷️${prefix}cekwatak
▹ 🏷️${prefix}cekmati [nama]
▹ 🏷️${prefix}wangy [nama]
▹ 🏷️${prefix}citacita
▹ 🏷️${prefix}toxic
▹ 🏷️${prefix}truth
▹ 🏷️${prefix}dare
▹ 🏷️${prefix}apakah
▹ 🏷️${prefix}bisakah
▹ 🏷️${prefix}kapankah
▹ 🏷️${prefix}rate
▹ 🏷️${prefix}jadian
▹ 🏷️${prefix}cantik
▹ 🏷️${prefix}ganteng
▹ 🏷️${prefix}beban
▹ 🏷️${prefix}babi
▹ 🏷️${prefix}cekganteng
▹ 🏷️${prefix}cekcantik

`
               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
    case "delvote":
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

        if (fs.existsSync('./res/vote/' + from + '.json') && fs.existsSync('./res/' + from + '.json')) {
        deleteVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        } else {
          reply("Belum ada sesi yang dimulai")
        }
        break;
      case "voting": // tambahin if (!isGroupAdmins) return; kalau mau khusus admin
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

        if (!isGroup) return reply(mess.only.group);
        if (fs.existsSync('./res/vote/' + from + '.json') && fs.existsSync('./res/' + from + '.json')) {
          reply("Sesi vote sedang berlangsung")
        } else {
          if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          tin.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          tin.message.extendedTextMessage.contextInfo == null
        ) {
          let id = tin.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = q.replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
          }
        }
        break;
   case 'infomenu':
        case  'menuinfo':
        
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*


 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ ${prefix}update
▹ ${prefix}level
▹ ${prefix}rules
▹ ${prefix}profile
▹ ${prefix}waktu
▹ ${prefix}botstat
▹ ${prefix}sewabot
▹ ${prefix}listsewa
▹ ${prefix}owner
▹ ${prefix}ping
▹ ${prefix}runtime
▹ ${prefix}donasi
▹ ${prefix}leaderboard
▹ ${prefix}cekpremium
▹ ${prefix}listpremium
▹ ${prefix}sourcecode
▹ ${prefix}bugreport *keluhan*

 `

               sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
case 'pornmenu':
        case  '181+':
        
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              groups = tino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = tino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await tino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



⬡ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹🔖 ${prefix} bkp *random*
▹🔖 ${prefix} bokep1
▹🔖 ${prefix} bokep2
▹🔖 ${prefix} bokep3
▹🔖 ${prefix} bokep4
▹🔖 ${prefix} bokep5
▹🔖 ${prefix} bokep6
▹🔖 ${prefix} bokep7
▹🔖 ${prefix} bokep8
▹🔖 ${prefix} bokep9
▹🔖 ${prefix} bokep10
▹🔖 ${prefix} bokep11
▹🔖 ${prefix} bokep12
▹🔖 ${prefix} bokep13
▹🔖 ${prefix} bokep14
▹🔖 ${prefix} bokep15
▹🔖 ${prefix} bokep16
▹🔖 ${prefix} bokep17
▹🔖 ${prefix} bokep18
▹🔖 ${prefix} bokep19
▹🔖 ${prefix} bokep20
▹🔖 ${prefix} bokep21
▹🔖 ${prefix} bokep22
▹🔖 ${prefix} bokep23
▹🔖 ${prefix} bokep24
▹🔖 ${prefix} bokep25
 `

               sendButMessage(from, menu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;
   //addfiturbokep
case 'bokep1':				
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' , text, {quoted: freply})
				   break
				   case 'bokep2':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' , text, {quoted: freply})
				   break
				   case 'bokep3':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file', text, {quoted: reply })				    
				   break
				   case 'bokep4':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep5':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep6':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' , text, {quoted: freply})				   
				   break
   case 'bokep7':
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' , text, {quoted: freply})				   
				   break
		           case 'bokep8':	
		if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' , text, {quoted: freply})				   
				   break
	
				   case 'bokep10':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep11':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep12':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
			    if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep13':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep14':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' , text, {quoted: freply})				   
				   break
	               case 'bokep15':
	if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' , text, {quoted: freply})				   
				   break
    	           case 'bokep16':
    if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep17':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep18':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep19':				
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep20':			
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep21':				
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep22':		
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep23':	
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' , text, {quoted: freply})				   
				   break
				   case 'bokep24':				
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				qute = fs.readFileSync('media/Menu.jpg') 
				   tino.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' , text, {quoted: freply})				   
				   break
				   
		 
break
   case 'islammenu':
        case  'islamimenu':
              if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

      
 menu =`ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹🏷️${prefix}listsurah
▹🏷️${prefix}alquran
▹🏷️${prefix}alquranaudio
▹🏷️${prefix}asmaulhusna
▹🏷️${prefix}kisahnabi
▹🏷️${prefix}jadwalsholat
▹🏷️${prefix}niatsholat (subuh,ashar,magrib,isya,dzuhur)
▹🏷️${prefix}asmaulhusna


`
               sendButMessage(from, menu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;        
   case 'command':
   if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               list = []
               listmenu = [`kodepos`,`darkmeme`,`playstore`,`tempuhjarak`,`randomgroupweha`,`groupmenu`,`photoxy`,`ephoto`,`randomimage`,`wibu2`,`storymenu`,`porno`,`randomtext`,`islammenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`music`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`tinogroup`,`sewabot`]
               listmenuu = [`ᴍᴇɴᴄᴀʀɪ ᴋᴏᴅᴇ ᴘᴏs`,`ᴅᴀʀᴋ ᴍᴇᴍᴇ ɴᴇᴡ`,`ᴘʟᴀʏsᴛᴏʀᴇ ᴅᴏᴡɴʟᴏᴀᴅ`,`ᴜᴋᴜʀ ᴊᴀʀᴀᴋ ᴛᴇᴍᴘᴜʜ`,`ʀᴀɴᴅᴏᴍ ɢʀᴏᴜᴘ ᴡʜᴀᴛsᴀᴘᴘ`,`ᴍᴇɴᴜ ɢʀᴏᴜᴘ`,`ᴘʜᴏᴛᴏ ᴏᴋʏ`,`ᴍᴇɴᴜ ᴇ-ᴘʜᴏᴛᴏ`,`ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ`,`ɴsғᴡ ᴀɴɪᴍᴇ`,`ᴍᴏᴠɪᴇ ᴀɴᴅ sᴛᴏʀʏ`,`ᴍᴇɴᴜ ᴅᴇᴡᴀsᴀ (18)`,`ʀᴀɴᴅᴏᴍ ᴛᴇxᴛ`,`ɪsʟᴀᴍ ᴍᴇɴᴜ`,`ᴍᴇɴᴜ ᴡɪʙᴜ`,`ᴍᴇɴᴜ sᴛɪᴄᴋᴇʀ`,`ᴍᴇɴᴜ ᴏᴡɴᴇʀ`,`ᴍᴇɴᴜ ɢᴀᴍᴇ`,`ᴍᴇɴᴜ ᴍᴜsɪᴄ`,`ᴍᴇɴᴜ ғᴜɴ`,`ᴍᴇɴᴜ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,`ᴍᴇɴᴜ ɪɴғᴏ`,`ᴍᴇɴᴜ ʟᴀɪɴɴʏᴀ`,`ᴏᴡɴᴇʀ ʙᴏᴛ`,`ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ`,`ɪs ʙᴏᴛ`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'ᴍᴇɴᴜ ᴋᴇ' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu} ${pushname} 👋
               
I Am ${botName}
ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*
`,`🐣 Day : ${week} ${weton}\n🐥 Date : ${date}              `, list, { quoted: freply})
               break
   
   ///ISLAMI MENU  

// Islami //
case 'listsurah':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    break
case 'alquran':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhumanapi}`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)
    break
case 'alquranaudio':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhumanapi}`)
    await tino.sendMessage(from, ini_buffer, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })
    break
case 'asmaulhusna':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply(ini_txt)
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    
    
    break
case 'kisahnabi':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)
    break
    case 'translate':
  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Kamu Lagi Ngapain?`)
    txt1 = args[0]
    txt2 = args[1]
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/en?apikey=fatherbot&text=${txt1}`)
    get_result = get_result.result
    ini_txt = `Dari Bahasa : ${get_result.from}\n`
    ini_txt += `Translate To : ${get_result.to}\n`
    ini_txt += `Original : ${get_result.original}\n`
    ini_txt += `Translate: ${get_result.translated}\n`

    reply(ini_txt)
    break
   
  case 'niatsholat':
  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


    if (args.length == 0) return reply(`Example: ${prefix + command} Subuh,Dzuhur,Ashar,Magrib,Isya?`)
    txt1 = args[0]
    txt2 = args[1]
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${query}?apikey=fatherbot`)
    get_result = get_result.result
    ini_txt = `NIAT : ${get_result.name}\n`
    ini_txt += `ARAB  : ${get_result.ar}\n`
    ini_txt += `LATIN : ${get_result.latin}\n`
    ini_txt += `INDO : ${get_result.id}\n`
    

    reply(ini_txt)
    break
   
   
   case 'kodepos':
   if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

   
if (args.length == 0) return reply(`Example: ${prefix + command} Jakarta`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=fatherbot&query=${query}`)
    get_result = get_result.result
    ini_txt = "Kode Pos Seach : \n"
    for (var x of get_result) {
        ini_txt += `Provinsi : ${x.province}\n`
        ini_txt += `Kabupaten : ${x.city}\n`
        ini_txt += `Kecamatan : ${x.subdistrict}\n`
        ini_txt += `Desa  : ${x.urban}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `*KODE POS* : ${x.postalcode}\n\n`
    }
    reply(ini_txt)
    break
   
//////=====MENU BARU=========////////
case 'tempuhjarak':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


if (args.length == 0) return reply(`Example: ${prefix + command} JAKARTA BALI`)
    txt1 = args[0]
    txt2 = args[1]
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=fatherbot&kota1=${txt1}&kota2=${txt2}`)
    get_result = get_result.result
    ini_txt = `*Jarak Tempuh* : ${get_result.jarak}\n`
    ini_txt += `*Naik Kereta* : ${get_result.kereta_api}\n`
    ini_txt += `*Naik Pesawat* : ${get_result.pesawat}\n`
    ini_txt += `*Naik Mobil*: ${get_result.mobil}\n`
ini_txt += `*Naik Motor*: ${get_result.motor}\n`
ini_txt += `*Jalan Kaki*:${get_result.jalan_kaki}\n`
ini_txt += `*DATA TIDAK SEPENUHNYA VALID*`
    reply(ini_txt)
    break
    
case 'darkmeme':
case 'memedark':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


buff = await getBuffer ('https://api.lolhuman.xyz/api/meme/darkjoke?apikey=fatherbot')

buttons = [{buttonId: `${prefix}darkmeme`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
    
break

case 'playstore':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


if (args.length == 0) return reply(`Example: ${prefix + command} Pubg`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=fatherbot&query=${query}`)
    get_result = get_result.result
    ini_txt = "Playstore Search: \n"
    for (var x of get_result) {
        ini_txt += `Nama Aplikasi : ${x.title}\n`
        ini_txt += `ID APP  : ${x.appId}\n`
        ini_txt += `Link Download : ${x.url}\n`
        }
    reply(ini_txt)
    break
   
   case 'randomgroupweha':
   if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


if (args.length == 0) return reply(`Example: ${prefix + command} contoh nama group`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp2?apikey=fatherbot&query=${query}`)
    get_result = get_result.result
    ini_txt = "Group Whatsapp Search: \n"
    for (var x of get_result) {
        ini_txt += `Nama Aplikasi : ${x.title}\n`
        ini_txt += `Link  : ${x.link}\n`
        ini_txt += `COBA AJA\n\n`
        }
    reply(ini_txt)
    break
 //CASE PRIMBON

case 'artinama':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (args.length == 0) return reply(`Example: ${prefix + command} Farhan`)
    arti_nama = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolhumanapi}&nama=${arti_nama}`)
    arti_name = `_*Arti Nama*_ : *${get_result.result}*`
    reply(arti_name)
    break
   
case 'jodoh':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
if (args.length == 0) return reply(`Example: ${prefix + command} Farhan Erika`)
    jodoh1 = args.join(" ")
    jodoh2 = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${jodoh1}/${jodoh2}?apikey=${lolhumanapi}`)
    get_result = get_result.result

    arti_jodoh = `*Positif :* ${get_result.positif}\n`
    arti_jodoh += `*Negatif :* ${get_result.negatif}\n`
    arti_jodoh += `*Pengertian :* ${get_result.deskripsi}\n`
    reply(arti_jodoh)
    break
   

    
  
  
    
    
   
  
 

//////end

 
case 'jadwalsholat':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhumanapi}`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)
    break
      case 'rules':
             tino.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})
             break

      
      
     
    ////SPORTAGE MENU
               if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               case 'slow':
					encmedia = JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await tino.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
					break
				case 'stickerlist':
			case 'liststicker':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } }, contextInfo: { "mentionedJid": setiker } })
				tino.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
			case 'addsticker':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tino.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				tino.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })
				tino.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
				
				
			case 'stickerlist':
			case 'liststicker':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
				tino.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'addsticker':
				
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tino.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				tino.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
				tino.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
				
			case 'addvn':
			      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tino.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				tino.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				tino.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
			case 'getsticker':
			case 'gets':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				tino.sendMessage(from, result, sticker)
				break
           case 'liststicker':
           if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tino.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				tino.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				
				break
			case 'getimage':
            case 'getimg':
            if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				tino.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
				
			case 'addvideo':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tino.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				tino.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				tino.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'listvideo':
			case 'videolist':
			if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				tino.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break
				   
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
         

               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (tin.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!tin.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               tino.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (tin.message.extendedTextMessage === undefined || tin.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = tin.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
           tino.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
     
     gameAdd(sender, glimit)
     break
     case 't':
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
   sendButMessage(from, titid, `crated tino ads`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break
       case 'family100':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolhumanapi}`)
              titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
          
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}family100`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
            
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolhumanapi}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebakanime`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              tino.sendMessage(from, ini_buffer, audio, {quoted: freply}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaklagu`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              tino.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}kuismath`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./metadata/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              buff = await getBuffer(ini_image)
              
            tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
           titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}tebakgambar`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              tino.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=fatherbot`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              tino.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              tino.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

      
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              tino.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              tino.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              tino.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./metadata/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              tino.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./metadata/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              tino.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./metadata/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolhumanapi}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              tino.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./metadata/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./metadata/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : ?? : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./metadata/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
              
              case 'verify':

reply('BOT TELAH MENGIRIMKAN LINK VERIFICATION DI CHAT PRIBADI')
tino.sendMessage(sender, "Link kode verifikasi : https://wa.me/16067160381?text=5678", text, {quoted: freply})
break
case 'sfire1':{
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    tino.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))
                  	
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await tino.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    tino.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))
                  	
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
                    case 'findsticker': case 'findstiker': case 'stickerwa':{
                
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.result))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of bokep2.stickers) {
                            tino.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'linedl': case 'linestickerdl':{
                if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)
                if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.stickers) {
                        tino.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'teledl': case 'telegramdl': case 'telesticker':{
                if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)
                if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.sticker) {
                            tino.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
    break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner || tin.key.fromMe) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (tin.message.extendedTextMessage != undefined) {
              mentioned = tin.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (tin.message.extendedTextMessage != undefined) {
              mentioned = tin.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./metadata/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./metadata/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
       case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              gopeynya = `${qris}`
            buff = await getBuffer(gopeynya)
            teksnya = `
┏━━⬣ ᴘʀɪᴄᴇ ʟɪꜱᴛ 1
┃⬡ *Sewa 5k/1 Minggu* [Premium 3h]
┃⬡ *Sewa 10k/1 Minggu* [Premium Full]
┃⬡ *Sewa + Premium 1 bulan* [20k]
┃⬡ *Permanent* [25k No Premium]
┃⬡ ᴘᴇʀᴍᴀɴᴇɴ + ᴘʀᴇᴍ 30ᴋ
┃⬡ ᴀʟʟ ᴘᴇʀᴍᴀɴᴇɴ 35ᴋ
┗━━⬣

┏━━⬣ ᴘʀɪᴄᴇ ʟɪꜱᴛ 2
┃⬡ ᴊᴀᴅɪ ʙᴏᴛ 10ᴋ
┃⬡ ᴊᴀᴅɪ ʙᴏᴛ + ᴏᴡɴᴇʀ 30ᴋ
┃⬡ ꜱᴄ ʙᴏᴛ ᴛᴀɴʏᴀ ᴏᴡɴᴇʀ
┗━━⬣

┏━━⬣ ᴍɪɴᴀᴛ? ᴘᴍ
┃⬡ wa.me/6281535365496
┗━━⬣

`
  buttons = [{buttonId: noprefix ? "menu" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
      break
       case 'gopay':
              gopeynya = `${qris}`
            buff = await getBuffer(gopeynya)
            teksnya =`
Hai kak ${pushname}
${promo}


${buktiTf}
`
  buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ミ★ Father-Bot Whatsapp ★彡', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
      break
         case 'dana':
              gopeynya = `${linkImageDana}`
            buff = await getBuffer(gopeynya)
            teksnya = `
Hai kak ${pushname}

${desDana}

${linkDana}

${buktiTf}


`
buttons = [{buttonId: `${prefix}bukti`,buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: `${prefix}payment`,buttonText:{displayText: `PAYMENT LAIN`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'ミ★ Father-Bot Whatsapp ★彡', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
              break
case 'pulsa':
       
       thu = await tino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

       groups = tino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = tino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await tino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
       menu =`
      
 ${ucapanWaktu} Kak ${pushname} 👋
  
 ${desPulsa}
 
 ${nomorDesPulsa}
`

              


    tino.sendMessage(from, { contentText: `${menu}`, footerText: 'Tino', buttons: [{ buttonId: `!bukti`, buttonText: { displayText: 'KIRIM BUKTI TF' }, type: 1 },{ buttonId: `!payment`, buttonText: { displayText: 'GANTI PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
              break
              case 'bukti':
    titid = `
Hai kak ${pushname}

${buktiTf}
              
${linkWa}
`
   sendButMessage(from, titid, `Tino `, [
          {
            buttonId: `!infoig`,
            buttonText: {
              displayText: `⬡ YOUTUBE`,
            },
            type: 1,
          },]);
        break;
 
              
      case 'payment':
               list = []
               listmenu = [`gopay`,`dana`,`pulsa`,`scan`]
               listmenuu = [`BAYAR DENGAN GOPAY`,`BAYAR DENGAN DANA`,`BAYAR DENGAN PULSA`,`INFO BISNIS`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'payment ke' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `*ʜᴀɪ ᴋᴀᴋ* ${pushname} \n\n*ꜱɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴍᴇᴛᴏᴅᴇ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴅɪ ʙᴀᴡᴀʜ ʏᴀ !*`,`  `, list)
               break
   
      case 'inibug':
      list = await tino.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
"productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "MINAT? PC OWNER"
    }
  }, {quoted: freply})
  tino.relayWAMessage(list, {waitForAck: true})
       
  
  break
  case 'scan':
     list = await tino.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "🛒 INFO BUSINIS ",
      "description": "LIST PRODUCT CLICK DI SINI                                     ",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST HARGA",
            "products": [
              {
                 "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "productId": "6431678466857362",
          "productId": "4392524570816732",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "\nPowered follow @nan.kyy_.                                        "
    }
  }, {quoted:tin})
  tino.relayWAMessage(list, {waitForAck: true})
  break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = tin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = tin.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./metadata/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       
       
        
       case 'scplay': 
       case 'soundcloud':
       

       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${lolhumanapi}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, tin) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

            if (args.length < 1) return reply('Link?')         
          reply(mess.wait)     
          v = args.join(" ")
          get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/ytaudio?url=${v}`)
          get_result = get_result.result
          ini_vid = await getBuffer(get_result.download_audio)
          await tino.sendMessage(from, ini_vid, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: tin})          
          break          
     case 'ytmp4':
     case 'ytmp4hd':
     case 'ythd':
     if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
            if (args.length < 1) return reply('Link?')     
          reply(mess.wait)
          v = args.join(" ")
          get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/ytvideo?url=${v}`)
          get_result = get_result.result
          ini_vid = await getBuffer(get_result.download_video)
          await tino.sendMessage(from, ini_vid, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: tin })
          break
           

       
           
     
        case 'google':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               tino.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : tin})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Nama : ${res[0].nama}\`\`\`
\`\`\`🐤 Ukuran : ${res[0].size}\`\`\`
\`\`\`🐣 Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: freply})
             break
       
       case 'tt':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
tinyy ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${tinyy} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
tino.sendMessage(from,{url:'./'+tinyy},audio,{mimetype:'audio/mpeg'})
})
      //CASE DOWNLOADER
       case 'tiktokmp4':
       case 'tiktokdl':
       case 'tiktoknowm':
       case 'tiktok':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       if (!isRegister) return reply(mess.only.daftarB)	
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=fatherbot&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    tino.sendMessage(from, ini_buffer, video, { quoted: tin})
                    break
                   
case 'tiktokmp3':
case 'tiktokaudio':
case 'tiktokmusic':  
                    
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
       if (!isRegister) return reply(mess.only.daftarB)	
                    reply(mess.wait) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=fatherbot&url=${ini_link}`)
                    tino.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: tin})
                    break
                    
case 'instagram':
       case 'instagramdownload':
       case 'igdl2':
       case 'igmp4':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, tin) })
             .catch((err) => { reply(String(err)) })
              break
     
    
   
  
  

  case 'xnxxsearch':
  
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=fatherbot&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    reply(ini_txt)
    break
case 'xnxx':
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=fatherbot&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await tino.sendMessage(from, thumbnail, image, { quoted: freply , caption: ini_txt })
    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://tino-chan02.github.io`)

      
      case 'fbdl':
      case 'fb':
      case 'facebok':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

reply (`Dalam Perbaikan`)
        break                          

        
					
      case 'twitter':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

      if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await tino.sendMessage(from, ini_buffer, image, { quoted: freply })
             break
       case 'nhentaipdf':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolhumanapi}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*
             
📜 Title Romaji : ${get_result.title_romaji}
📃 Title Native : ${get_result.title_native}
🐤 Character : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             tino.sendMessage(from, ini_image, image, { caption: teks, quoted: freply, thumbnail: fakeimage })
             reply(mess.wait)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolhumanapi}`)
             pdf = await getBuffer(anu.result)
             tino.sendMessage(from, pdf, document, { quoted: freply, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       
       case 'manga':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `Back To Menu`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
         break
       case 'doujindesu':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             tino.sendMessage(from, buffer, image, {caption: xixixai, quoted: freply})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolhumanapi}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await tino.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
             break
      case 'kusonime':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhumanapi}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })
             break
       case 'otakudesu':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)


              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolhumanapi}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`🐥 Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(get_result.thumb)
              
               buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
         break
       case 'nekopoisearch':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolhumanapi}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
    
              break
       
       
    
              break
       case 'nakanoitsuki':
       case 'nakanotino':
       case 'nakanomiku':
       
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: freply, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
              

              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolhumanapi}`)
              buffer = await getBuffer(anu.result)
              tino.sendMessage(from, buffer, video, { quoted: freply })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':             
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
    
         
    
break
       
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://tino-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/freply-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await tino.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'playy':
case 'lagu':
if (isBanned) return reply("ANDA TELAH DI BANNED, MINTA OWNER UNTUK UNBANNED")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}
 
*File Sedang Di Kirim........*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: freply, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2': 
if (isBanned) return reply("ANDA TELAH DI BANNED, MINTA OWNER UNTUK UNBANNED")
if (isLimit(sender)) return
await limitAdd(sender)
if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
				  reply (mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=fatherbot&query=${q}`)
            if (anu.error) return reply(anu.error)
                 infomp4 = `*Video Ditemukan!!!*\nJudul : ${anu.result.title}\nUkuran : ${anu.result.size}\n\n  *_TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA_* `
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_video)
                tino.sendMessage(from, buffer, image, {quoted: tin, caption: infomp4})
                tino.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `video.mp4`, quoted: tin})

                break                             
					case 'ytdl':
					case 'play':
					if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://tino-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
 *🐥 ᴊᴜᴅᴜʟ :* ${res.all[0].title}
 *🐣 ɪᴅ ᴠɪᴅᴇᴏ :* ${res.all[0].videoId}
 *🐤 ᴜᴘʟᴏᴀᴅ ᴘᴀᴅᴀ :* ${res.all[0].ago}
 *🐥 ᴠɪᴇᴡ :* ${res.all[0].views}
 *🐣 ᴅᴜʀᴀᴛᴇ :* ${res.all[0].timestamp}
 *🐤 ᴄʜᴀɴɴsʟ :* ${res.all[0].author.name}
 *🔗 ʟɪɴᴋ ᴄʜᴀɴɴᴇʟ :* ${res.all[0].author.url}

*sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴍᴇᴅɪᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴅᴏᴡɴʟᴏᴀᴅ*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await tino.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{})

tino.relayWAMessage(prep)
break
					
          case 'lirik':
          if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolhumanapi}&query=${query}`)
    reply(get_result.result)
    
               break
         case 'pinterest':
         if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
    query = args.join(" ")
 reply (mess.wait)
    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhumanapi}&query=${query}`)
    ini_url = ini_url.result
    buff = await getBuffer(ini_url)
    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
        break
        case 'shopee':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`🐥 Nama : ${get_data[i].name}\`\`\`
\`\`\`🐥 Harga : ${get_data[i].harga}\`\`\`
\`\`\`🐥 Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`🐥 Lokasi : ${get_data[i].location}\`\`\`
\`\`\`🐥 Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`?? Stok : ${get_data[i].stock}\`\`\`
\`\`\`🐥 Informasi : ${get_data[i].information}\`\`\`
\`\`\`🐥 Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`
\`\`\`🐥 Harga : ${get_result[i].price}\`\`\`
\`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`
\`\`\`🐥 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🐤 Channel : ${i.author.name}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               if ((isMedia && !tin.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
               owgi = await tino.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
               
       case 'imgtourl':
       case 'img2url':
       
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
               var media = await  tino.downloadAndSaveMediaMessage(encmedia)       
               imgbb('67bb63bdcb5c234b7aba60c618a2b903', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               tino.sendMessage(from, ibb, image, { quoted: freply, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai
         
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

       if (!isRegister) return reply(mess.only.daftarB)	
                    reply(mess.wait)
                    asupan1 = `https://api.lolhuman.xyz/api/asupan?apikey=fatherbot`
                    get_result = await fetchJson(asupan1)
                    ini_buffer = await getBuffer(get_result.result)
                    tino.sendMessage(from, ini_buffer, video, { quoted: tin})
                    break
                    

                    
        case 'nulis':
        case 'tulis':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               tino.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await tino.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${lolhumanapi}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              buttons = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'MINING' }, type: 1 },{ buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' },type:1}]
              imageMsg = (await tino.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'follow @nan.kyy_', imageMessage: imageMsg,
              contentText:`${teks}`,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
       

              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = '*JENDERAL🌟 🌟 🌟*'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
      

              if (args.length == 0) return reply(`Example: ${prefix + command} tino-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolhumanapi}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.name}\`\`\`
\`\`\`🐥 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`🐥 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Following : ${ini_result.following}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : ${ini_result.url}\`\`\`
`
             tino.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
      
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
             if (args.length == 0) return reply(`Example: ${prefix + command} tino.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolhumanapi}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.username}\`\`\`
\`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             tino.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

      if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolhumanapi}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${get_result.username}\`\`\`
\`\`\`🐥 Nama : ${get_result.nickname}\`\`\`
\`\`\`🐥 Pengikut : ${get_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`🐥 Likes : ${get_result.likes}\`\`\`
\`\`\`🐥 Video : ${get_result.video}\`\`\`
\`\`\`🐥 Deskripsi : ${get_result.bio}\`\`\`
`
              tino.sendMessage(from, pp_tt, image, { quoted: freply, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
       

              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              tino.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
      if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'linkgc':
              case 'link':
              case 'linkgroup':
              if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              linkgc = await tino.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
       case 'patrick':
       

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolhumanapi}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              tino.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumanapi}`)
              await tino.sendMessage(from, ini_buffer, sticker, { quoted: freply })
              break
                  case 'semoji2':
       case 'emoji2':
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolhumanapi}`)
              await tino.sendMessage(from, ini_buffer, sticker, { quoted: freply })
 case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                    await tino.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break

     case 'stikertahta':
     case 'stt':
     if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
ajgg = args.join(" ")
reply('wait....')
meki = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURI(q)}&apikey=IkyOgiwara`
sendStickerUrl(from, meki, { quoted: freply})
break

  case 'attp':
  if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

              if (args.length == 0) return reply(`Example: ${prefix + command} tino`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              tino.sendMessage(from, buffer, sticker, { quoted: freply })
              break
              
             case 'sfire2': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
media = await tino.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = await getBuffer (`https://api.zeks.xyz/api/burning-image?apikey=${lolhumanapi}&image=${tolink}`)
sendStickerUrl(from, `${anu1}`)

break
case 'tgg': 
              

reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
media = await tino.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
case 'sf':


encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
media = await tino.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
              reply(mess.wait)
              
              pjr = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${lolhumanapi}&image${encodeURI(tolink)}`)
              tino.sendMedsage(from , pjr , sticker, {quoted: tin})


              break
case 'tggg': 
              

reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
media = await tino.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolhumanapi}&img=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
      case 'triggered3':
      

                    ini_url = args[0]
               
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolhumanapi}&img=${ini_url}`)

tino.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
       case 'sfiree':

if (isImage || isQuotedImage) {
    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
    let media = await tino.downloadAndSaveMediaMessage(encmedia)
    var tolink = await uptotele(media)
let ane = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${lolhumanapi}&image=${tolink}`)
fs.writeFileSync('./sticker/triggered.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    tino.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/triggered.webp`)	
})
}
            
break 
   case "triggered":
   case 'tiger':
   

     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
     var dow = await tino.downloadAndSaveMediaMessage(tin)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${lolhumanapi}&img=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        tino.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: tin }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
      case 'stickernobg': case 'stikernobg': case 'snobg': case 'removebg': case 'nobg':
                

                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: tin
                    let media = await tino.downloadAndSaveMediaMessage(encmedia)
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(media)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: tin})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await tino.downloadAndSaveMediaMessage(encmedia)
                  var ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
                       if (err) return reply('Gagal :V')   
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.olkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(ran)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(ran)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: tin})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
                    }
                    

                    break
      case "triggered2":
   case 'tiger2':
     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
     var dow = await tino.downloadAndSaveMediaMessage(lin)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        tino.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: tin }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
           case 'ttg':
           teks = args.join(' ')
mek = encodeURIComponent(teks)
if (args.length < 2) return 
let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolhumanapi}&text=${mek}`)
fs.writeFileSync('./sticker/ttg.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    tino.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/ttg.webp`)	
})
            
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       
if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              reply(mess.wait)
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
              
              
            case 's2':{
                
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await tino.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: tin})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await tino.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									tino.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: tin})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
       case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
				if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)

					     if ((isMedia && !tin.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
            const media = await tino.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
     console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
tino.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && tin.message.videoMessage.seconds < 11 || isQuotedVideo && tin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
const media = await tino.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            tino.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
            } else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await tino.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./res/fetch.js').createExif(satu, dua)
              require('./res/fetch.js').modStick(media, tino, tin, from)
              break
       case 'delwm':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await tino.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./res/fetch.js').createExif(satu, dua)
              require('./res/fetch.js').modStick(media, tino, tin, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !tin.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
              media = await tino.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              tino.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              tino.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && tin.message.videoMessage.seconds < 11 || isQuotedVideo && tin.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
              const media = await tino.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              tino.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              tino.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await tino.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              tino.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !tin.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin 
owgi = await  tino.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':  
       if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !tin.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin 
              owgi = await tino.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("f643a4d2fb9ea99221cb4a3432d6a4ba", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
         
}
               break
        case 'togif':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               if ((isMedia && !tin.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tin
               mediaaa = await tino.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               tino.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
               if ((isMedia && !tin.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await tino.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               tino.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
        if (isBanned) return reply("ANDA TELAH DI BANNED, HUBUNGI OWNER")
if (isLimit(sender)) return
await limitAdd(sender)
tino.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(tin).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await tino.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
tino.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break

//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`ᴘʀᴇᴍɪᴜᴍ ꜱᴄʀɪᴘᴛ ᴏɴʟʏ!! ᴏʀᴅᴇʀ ɴᴏᴡ`)
             

              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat':
              groups = tino.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = tino.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await tino.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`🐥 Group Chats : ${groups.length}\`\`\`
\`\`\`🐥 Private Chats : ${privat.length}\`\`\`
\`\`\`🐥 Total Chats : ${totalChat.length}\`\`\`
\`\`\`🐥 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`🐥 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`🐥 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`🐥 Ram Usage : ${ram2}\`\`\`
\`\`\`?? Platform : ${os.platform()}\`\`\`
\`\`\`🐥 Hostname : ${os.hostname()}\`\`\`
\`\`\`🐥 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`🐥 Wa Version: ${tino.user.phone.wa_version}\`\`\`
\`\`\`🐥 Os Version: ${tino.user.phone.os_version}\`\`\`
\`\`\`🐥 Device Manufacturer: ${tino.user.phone.device_manufacturer}\`\`\`
\`\`\`🐥 Device Model: ${tino.user.phone.device_model}\`\`\`
\`\`\`🐥 Os Build Number: ${tino.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./metadata/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./metadata/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./metadata/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = tino.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(tin.message.extendedTextMessage.contextInfo, null, 3))
             break
      case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await tino.chats.all()
             if (isMedia && !tin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kyy
             bc = await tino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             tino.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • ★ Father-Bot Whatsapp • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
tino.sendMessage(_.jid, 
	    {"contentText": `*「 PESAN BOT ] 」*\n\n${body.slice(4)}`,
	    "footerText": '©Created by Tino',
	    "buttons": [
	    {"buttonId": `Ok`,
	    "buttonText": {"displayText": "Oke Siap👍"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
             case 'rad':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await tino.chats.all()
             if (isMedia && !tin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kyy
             bc = await tino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             tino.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • ★ Father-Bot Whatsapp • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
tino.sendMessage(_.jid, 
	    {"contentText": `*「 PESAN BOT ] 」*\n\n${body.slice(4)}`,
	    "footerText": '©Created by Tino',
	    "buttons": [
	    {"buttonId": `Ok`,
	    "buttonText": {"displayText": "SAYA SUKA"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
            
           
           ///bot on off
          
          case 'on':
             if (!isOwner) return  reply(mess.only.owner)

             anu = await tino.chats.all()
             if (isMedia && !tin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kyy
             bc = await tino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             tino.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • ★ Father-Bot Whatsapp • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess info ON')
             } else {
             for (let _ of anu) {
tino.sendMessage(_.jid, 
	    {"contentText": `*「 ⚠️ BOT ONLINE  ] 」*${body.slice(4)}`,
	    "footerText": '©Created by Tino',
	    "buttons": [
	    {"buttonId": `!menu`,
	    "buttonText": {"displayText": "⚠️ OPEN MENU"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess Info ON')
}
             break
            
            case 'off':
             if (!isOwner) return  reply(mess.only.owner)

             anu = await tino.chats.all()
             if (isMedia && !tin.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kyy
             bc = await tino.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             tino.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST [ • ★ Father-Bot Whatsapp • ] 」*\n\n${body.slice(4)}`})
}
             reply('Suksess Info OFF')
             } else {
             for (let _ of anu) {
tino.sendMessage(_.jid, 
	    {"contentText": `*「 ⚠️ BOT OFFLINE ] 」*\n*_Karena Akan diadakan Maintenance Server_*${body.slice(4)}`,
	    "footerText": '©Created by Tino',
	    "buttons": [
	    {"buttonId": `Ok`,
	    "buttonText": {"displayText": "⚠️ OKEY"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess Info OFF')
}
             break
            
            
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await tino.chats.all()
             tino.setMaxListeners(25)
             for (let _ of anu) {
             tino.deleteChat(_.jid)
}
             reply('Suksess Info OFF')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = tino.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             tino.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (tin.message.extendedTextMessage === null || tin.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             tino.groupAdd(from, [entah])
             } else {
             entah = tin.message.extendedTextMessage.contextInfo.participant
             tino.groupAdd(from, [entah])
}
             break
             case 'promote':
             reply ('sukses promote admin')
             mentioned = tin.message.extendedTextMessage.contextInfo.participant
     
       if (mentioned.length !== 0){
    tino.groupMakeAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    tino.groupMakeAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    tino.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
}
             break
      case 'demote': case 'odemote':

if (!isGroup) return reply('GROUP ONLY')
if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply('ONLY PREMIUM')
if (!isGroupAdmins && !isPremium)return reply('ONLY ADMIN')
mentioned = tin.message.extendedTextMessage.contextInfo.participant
     
if (mentioned.length !== 0){
    tino.groupDemoteAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
    tino.groupDemoteAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    tino.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
}
break
            case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isGroup) return reply('ONLY GRUP')
if (!isBotGroupAdmins) return reply('ONLY OWNER')
tino.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              tino.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              tino.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case "prefix":
        if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          noprefix = false;
          oneprefix = false;
          reply("berhasil mengubah ke multi prefix")
        } else if (args[0] === "noprefix") {
          multipref = false;
          noprefix = true;
          oneprefix = false;
          reply("berhasil mengubah ke no prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          noprefix = false;
          oneprefix = true;
          reply(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          reply("pilih multi, noprefix, atau one prefix")
        }
        
        break
        case "setprefix":
          if (!q) return reply("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tin
              let media = await tino.downloadMediaMessage(encmedia)
              tino.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              
              tino.updatePresence(from, Presence.composing)
              try {
              profil = await tino.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await tino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = tino.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              tino.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await tino.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              tino.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       
              ////CASE PROMOTE
             case 'promoteall':
		  if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          members_id = []
		  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
          tino.groupMakeAdmin(from, members_id)
          break		  	     
        
        
         
             
       case 'bangroup':
       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              tino.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(tino.chats.get(ido).presences), tino.user.jid]
             tino.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             try {
             quotedText = tin.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await tino.messageInfo(from, tin.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
	      break	          
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              tino.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: freply })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: freply })
              break
      case 'bay':
      reply('*BIARLAH DIA PERGI, MENJEMPUT AJALNYA*')
      break
      case 'selamatdatang':
      reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
      break
       case 'gantengcek':
       case 'cekganteng':
       

              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: freply })
              break
       case 'cantikcek':
       case 'cekcantik':
       

              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: freply })
              break
       case 'cekwatak':
       

              var namao = pushname
              var prfx = await tino.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Coltin','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
       

              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              tino.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
              break
       case 'bisakah':
       

              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: freply })
              break
       case 'kapankah':
       

              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              tino.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: freply })
              break
       case 'truth':
       

              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              tino.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
              break
       case 'dare':
       

              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: noprefix ? command : "!"+command, buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await tino.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await tino.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              tino.relayWAMessage(prep)
               break		
       case 'jadian':
       


              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
              case 'ban':
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return  reply(mess.only.owner)
			bnnd = body.slice(6)
			ban.push(`${bnnd}@s.whatsapp.net`)
		    fs.writeFileSync('./_db/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah dibanned !`)
			break
        	case 'unban':

            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED")
			if (!isOwner) return  reply(mess.only.owner)
			bnnd = body.slice(8)
			ban.splice(`${bnnd}@s.whatsapp.net`, 1)
			fs.writeFileSync('./_db/banned.json', JSON.stringify(ban))
			reply(`Nomor wa.me/${bnnd} telah di unban!`)
			break   		 
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':
               if (tin.message.extendedTextMessage === null || tin.message.extendedTextMessage === undefined) {
               linkpp = await tino.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               tino.sendMessage(from, buffer, image, {caption: "Nih", quoted: freply })
               } else if (tin.message.extendedTextMessage.contextInfo.mentionedJid === null || tin.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = tin.message.extendedTextMessage.contextInfo.participant
               linkpp = await tino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               tino.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (tin.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = tin.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await tino.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               tino.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (tin.message.extendedTextMessage === undefined || tin.message.extendedTextMessage === null) return reply('Reply chat bot')
               tino.deleteMessage(from, {id: tin.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
        case 'tes':
               reply('Okeh nyala')
               break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
               thankslort = `┌──「 *INFORMATION* 」
│
├ *BOT TYPE* : NodeJS
├ *NAME*  : tino
├ *VERSION* : 1.0
├ *GITHUB* : Rizkiadiasa
│
├─「 *𝙏𝙃??𝙉𝙆𝙎 𝙏𝙊* 」
│
├ ALLAH SWT
├ Nino Chan
├ Xinz Bot
├ Manurius
├ Arif
├ Fathur
├ Kwn² Yg Bantu Gw
├ And all creator bot
│
└──「 *${botName}* 」`
             tino.sendMessage(from, await getBuffer(urlinfo), image, {quoted: freply, caption: thankslort })
             break
case 'media':
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await tino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             tino.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              tino.sendMessage(from, teks, text, {quoted: freply})
              break
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              tino.sendMessage('6281535365496@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await tino.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./metadata/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./metadata/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./metadata/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./metadata/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
      case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./metadata/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./metadata/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isOwner) return reply(mess.only.owner)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./metadata/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Commands Hanya bisa Untuk Admin Groups\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./metadata/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
    rows: [
       {
        title: `${suruh[0]}`,
        description: `\nMengaktifkan ${fiturname[startnu++]}`,
        rowId: `${prefix}${x}`
      },{
        title: `${suruh[1]}`,
        description: `\nMenonaktifkan ${fiturname[startn++]}`,
        rowId: `${prefix}${comm[start++]}`
      }
    ]
   }
        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             tino.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             tino.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             tino.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             tino.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//------------------< Menunya Bang:v >-------------------
      case 'infoig':
      
             reply(`𝚂𝚞𝚋𝚜𝚌𝚛𝚒𝚋𝚎 𝙲𝚑𝚊𝚗𝚗𝚎𝚕 𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝙺𝚒𝚝𝚊. 𝙷𝚊𝚒 𝙽𝚊𝚗𝚍𝚊, 𝚃𝚎𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑`)


             break
      case 'tinogroup':
             reply('https://chat.whatsapp.com/IXRUC261bmwGpPCyUYr97r')
             break
      
      //CASE LIMIT
      case 'limit':
			case 'ceklimit':
			try{
	        checkLimit(sender)
	        } catch (e) { reply("SILAHKAN GUNAKAN 1 FITUR TERLEBIH DAHULU")}
		    break 
		    case 'claim':
		    reply("SUKSES!, ANDA MENDAPATKAN 2 LIMIT SECARA GRATIS, LIMIT AKAN MASUK SETELAH 60 DETIK, SILAHKAN TUNGGU SEBENTAR LAGI" + `\n*NOTE* : JANGAN SPAM FITUR INI`)
		
		    setTimeout( () => {
		    bayarLimit(sender, "2")
		    tino.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, "LIMIT 2 ANDA TELAH MASUK, ANDA BISA MENGGUNAKAN FITUR PADA BOT INI KEMBALI", text, {quoted:tin})
		    }, 60000)
		    break
		
		//end
      
      case 'jadibot':
             if (!isOwner) return  reply(mess.only.owner)
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(tino,from,sender,reply,tin);
             break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(tino,from,sender,tin);
             break
            ////MENU CURHAT
            case 'curhat':
            reply('Silahkan Curhat Semua Yang ingin Dicurhatkan ke Father Bot, Privasi anda aman')
            if (args.length < 1) return reply(`Ketik ${prefix}curhat [Isi apa yang mau dicurhatin ama bot]`) 
              teks = args.join(' ')
              reply('*Bot sangat senang kamu curhat disini, Tunggu beberapa saat hingga bot membalasnya*')
              tino.sendMessage('6281535365496@s.whatsapp.net',`╔════ ◤ *CURHATAN - MEMBER* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ *${teks}*
║╚▸ Bales Curhat Ketik ${prefix}suratto
╚═══ ◤ *FATHER-BOT* ◢ `, text)
break

case 'suratto':
              if (!isOwner) return 
                if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat`)
                const textp = body.slice(9)
                const noorg2 = textp.split("|")[0]
                const katakita2 = textp.split("|")[1]
                const kataorg2 = `Surat Dari ${sender.replace('@s.whatsapp.net')}`
                tino.sendMessage(`${noorg2}@s.whatsapp.net`, `╔════ ◤ *CURHAT REPLY* ◢
║╔▸
║╠ *From* : Father-Bot
║╠ *Number* : @62 85856638938
║╠ *For* : You
║╚▸
║╔▸   ﹝ *BALASAN CURHAT* ﹞  
║╠ *${katakita2}*
║╚▸
║╔▸   ﹝ *BALAS SURAT* ﹞  
║╠ Untuk Membalas Ketik:
║╠ ${prefix}Curhat apa yang mau dicurhatin lagi
║╠ Contoh: ${prefix}curhat kenapa ya aku....
║╠ 
║╚▸
╚═══ ◤ *FATHER-BOT* ◢ `, text, {
                    quoted: {
                        key: { fromMe: false, participant: `${noorg2}@s.whatsapp.net` },
                        message: { conversation: `${kataorg2}`, contextInfo: { "mentionedJid": [sender] } }
                    }
                });
                reply('Surat Sukses Dikirim')
                break
            //end curhat
         
         
         
          
         
         
///TAMBAHAN CASE
          //===================================== MUSIC =====================================\\
       case 'music':
      wibu = `ɪɴғᴏ ᴛᴀɴᴅᴀ ᴍᴇɴᴜ ʙᴏᴛ
*🔖 ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀ*
*🏷️ ᴜsᴇʀ ғʀᴇᴇ*
ᴊɪᴋᴀ ᴛᴇʀᴅᴀᴘᴀᴛ ᴛᴀɴᴅᴀ ᴘʀᴇᴍɪᴜᴍ ᴛᴀᴘɪ ᴜsᴇʀ ɢʀᴀᴛɪs ʙɪsᴀ ᴀᴋsᴇs,ᴋɪʀɪᴍ ᴋᴇ ᴏᴡɴᴇʀ
ᴅᴀᴘᴀᴛᴋᴀɴ ᴘʀᴇᴍɪᴜᴍ ɢʀᴀᴛɪs ᴅɪsᴇᴛɪᴀᴘ ᴋᴀʟɪᴀɴ ʀᴇᴘᴏʀᴛ.
*ᴋᴇᴛɪᴋ : ${prefix} ʙᴜɢʀᴇᴘᴏʀᴛ*

             
  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔
▹ 🏷️${prefix}ʜᴏᴍᴇ
▹ ??️${prefix}ɢᴇᴛᴛɪɴɢᴏʟᴅ
▹ 🏷️${prefix}sᴀᴅ
▹ 🏷️${prefix}sᴀᴅ2
▹ 🏷️${prefix}sᴀᴅ3
▹ 🏷️${prefix}sᴀᴅ4
▹ 🏷️${prefix}ᴀᴇsʜᴛᴇᴛɪᴄ
▹ 🏷️${prefix}ᴀᴇsʜᴛᴇᴛɪᴄ2
▹ 🏷️${prefix}ᴀᴇsʜᴛᴇᴛɪᴄ3
▹ 🏷️${prefix}ᴀᴇsʜᴛᴇᴛɪᴄ4
▹ 🏷️${prefix}ᴀʟʟɴɪɢʜᴛ
▹ 🏷️${prefix}sᴏᴜɴᴅ1
▹ 🏷️${prefix}sᴏᴜɴᴅ2
▹ 🏷️${prefix}sᴏᴜɴᴅ3
▹ 🏷️${prefix}sᴏᴜɴᴅ4
▹ 🏷️${prefix}sᴏᴜɴᴅ5
▹ 🏷️${prefix}sᴏᴜɴᴅ6
▹ 🏷️${prefix}sᴏᴜɴᴅ7
▹ 🏷️${prefix}ɴɢᴀᴊɪ
▹ 🏷️${prefix}ɴɢᴀᴊɪ2
▹ 🏷️${prefix}ɪʀɪ
▹ 🏷️${prefix}ᴘᴀʟᴇ

`
         sendButMessage(from, wibu, `created follow @nan.kyy_`, [
          {
            buttonId: noprefix ? "menu" : "!"+"menu",
            buttonText: {
              displayText: `⬡ BACK TO MENU `,
            },
            type: 1,
          },]);
        break;

        
           
          
         
         
default:

          if (isCmd) {      
          menu = monospace(`Maaf kak ${pushname}🙏\nCommand ${command} Tidak tersedia di list menu!!\nMohon cek kembali list menu nya kak`)
          but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
          tino.sendButton(from, menu, '@WhatsBot', but, tin)
          break
          }
if (budy.includes(`assalamualaikum`,`Assalamualaikum`)) {
  reply(`Waalaikumsalam`)
  }
if (budy.includes(`Sayang`)) {
  reply(`iya sayang`)
  }

if (budy.includes(`tino`)) {
  reply(`ada apa panggil owner ku ?`)
  }
		if (budy.includes(`Assalamualaikum`)) {
  reply(`Waalaikumsalam`)
  }
  
  if (budy.includes(`syalom`)) {
  reply(`waalaikumsalam`)
  }
 
//PENAMBAHAN MENU BADWORD

///KONTOL///
if (budy.includes(`KONTOL`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}

if (budy.includes(`Kontol`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
	
	if (budy.includes(`kontol`)) {
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
	
	
	///MEMEK MENU
	if (budy.includes(`memek`)) {
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
	if (budy.includes(`Memek`)) {
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
	
if (budy.includes(`mmq`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
	
if (budy.includes(`bokep`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}

if (budy.includes(`ngentod`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}

if (budy.includes(`Ngentod`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}
if (budy.includes(`Bokep`)) {
	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}

//end

if (budy.includes(`Anjing`)) {

                    if (!isGroup) return
	               if (isGroupAdmins) return reply('*GAK BOLEH GITU ADMIN😇*')
	tino.updatePresence(from, Presence.composing)
	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	reply(` *「 KATA TIDAK SOPAN TERDETEKSI 」*\n*_Maaf ${sender.split("@")[0]} Anda Akan Di Kick Dari Group dalam 15 detik, Bot Mendeteksi Bahwa Anda Tidak Ada Etika Dalam Berbicara_*\n\n*_Jika Menurut Anda Salah? CHAT ADMIN GRUB _*`)
	setTimeout( () => {
		reply(`Selamat Jalan`)
	    tino.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
	}, 15000)
	setTimeout( () => {
	    tino.updatePresence(from, Presence.composing)

	}, 0)
	}

  
if (budy.includes("Numa")){

		tino.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/numa')

        tino.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        tino.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
        if (budy.includes("#m")){

}
if (budy.includes("!m")){

}
        if (budy.includes("#a")){

}
if (budy.includes("!a")){

}
        if (budy.includes("#s")){

}
if (budy.includes("!s")){

}
if (budy.includes("bot")){

}
if (budy.includes("Bot")){

}



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   tino.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		tino.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  tino.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
tino.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:tin,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
tino.sendMessage(from, ucapan1, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
tino.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
tino.sendMessage(from, ucapan1, text, {quoted:tin, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 tino.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || tin.key.fromMe )){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (!isGroup && isCmd && !tin.key.fromMe){
	tek = `follow @nan.kyy_`
meki = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
sendButMessage (from, meki, tek, nomenu, 'extendedTextMessage', {sendEphemeral:true, quoted:tin, mentionedJid:[senderr]})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}



 




