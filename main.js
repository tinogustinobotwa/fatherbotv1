const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')

const Client = require('./res/simple.js')

const WAConnection = Client.WAConnection(_WAConnection)

const  { Functions } = require('./res/functions.js');

const { color, bgcolor } = require('./res/color')

const fs = require("fs-extra")



const figlet = require('figlet')

const { uncache, nocache } = require('./res/loader')

const setting = JSON.parse(fs.readFileSync('./setting.json'))

const welcome = require('./message/group')

baterai = 'unknown'

charging = 'unknown'



//nocache

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

// GAME
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
global.media = require('./src/json/media.json');

global.functions = new Functions();

global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };

require('./tino.js')

nocache('../tino.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))

require('./tino.js')

nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

nocache('../setting.json', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (tino = new WAConnection()) => {

	tino.logger.level = 'warn'

	console.log(color(figlet.textSync('FATHER-BOT', {

		font: 'Standard',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'cyan'))

	console.log(color('[Tino Dev]', 'cyan'), color('Owner is online now!', 'yellow'))

	console.log(color('[Tino Dev]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'yellow'))

	tino.browserDescription = ["FATHER-BOT", "Chrome", "3.0.0"];



	// Menunggu QR

	tino.on('qr', () => {

		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))

	})



	// Menghubungkan

	fs.existsSync(`./${setting.sessionName}.json`) && tino.loadAuthInfo(`./${setting.sessionName}.json`)

	tino.on('connecting', () => {

		console.log(color('[ OWNER ]', 'cyan'), color('Menghubungkan....'));

	})



	//connect

	tino.on('open', () => {

		console.log(color('[ OWNER ]', 'cyan'), color('Bot Sudah Online!'));

	})



	// session

	await tino.connect({

		timeoutMs: 30 * 1000

	})

	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(tino.base64EncodedAuthInfo(), null, '\t'))



	// Baterai

	tino.on('CB:action,,battery', json => {

		global.batteryLevelStr = json[2][0][1].value

		global.batterylevel = parseInt(batteryLevelStr)

		baterai = batterylevel

		if (json[2][0][1].live == 'true') charging = true

		if (json[2][0][1].live == 'false') charging = false

		console.log(json[2][0][1])

		console.log('Baterai : ' + batterylevel + '%')

	})

	global.batrei = global.batrei ? global.batrei : []

	tino.on('CB:action,,battery', json => {

		const batteryLevelStr = json[2][0][1].value

		const batterylevel = parseInt(batteryLevelStr)

		global.batrei.push(batterylevel)

	})



	// welcome

	tino.on('group-participants-update', async (anu) => {

		await welcome(tino, anu)

	})

  

  tino.on("message-delete", async (m) => {

    if (m.key.remoteJid == "status@broadcast") return;

    if (!m.key.fromMe && m.key.fromMe) return;

    m.message =

      Object.keys(m.message)[0] === "ephemeralMessage"

        ? m.message.ephemeralMessage.message

        : m.message;

    const antidel = JSON.parse(fs.readFileSync("./metadata/antidelete.json"));

    const isGroup = m.key.remoteJid.endsWith("@g.us")

    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;

    const moment = require("moment-timezone");

    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");

    let d = new Date();

    let locale = "id";

    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();

    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][

      Math.floor((d * 1 + gmt) / 84600000) % 5

    ];

    let week = d.toLocaleDateString(locale, { weekday: "long" });

    let calender = d.toLocaleDateString(locale, {

      day: "numeric",

      month: "long",

      year: "numeric",

    });

    const type = Object.keys(m.message)[0];

    if (!isAntidel) return

    tino.sendMessage(

      m.key.remoteJid,

      `\`\`\`「 Anti Delete 」\`\`\`

  •> Nama : @${m.participant.split("@")[0]}

  •> Waktu : ${jam} ${week} ${calender}

  •> Type : ${type}`,

      MessageType.text,

      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }

    );



    tino.copyNForward(m.key.remoteJid, m.message);

  });

  

	tino.on('chat-update', async (message) => {

		require('./tino.js')(tino, message)

	})

}



starts()