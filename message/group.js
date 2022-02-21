const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../res/myfunc')
const { color, bgcolor } = require('../res/color')
join = '\`\`\`WELCOME\`\`\` \n \`\`\`Selamat Datang Di Group\`\`\` \n \`\`\`Budayakan Baca Deskripsi dan peraturan Group'
leave = 'Selamat Jalan Kawan, Doa Terbaik Buat Kamu'

teks = `${join}`
let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (ikyy, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./metadata/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await ikyy.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://i.postimg.cc/rF2Vqz8p/IMG-20220216-WA0126.jpg'
            }
                try {
                pp_grup = await ikyy.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {
            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
           
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
            buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/L5ZjZ8N/IMG-20220215-WA0067.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
        buttons = [

          { buttonId: `!selamatdatang`, buttonText: { displayText: "Selamat Datang" }, type: 1 },

        ];

        imageMsg = (

          await ikyy.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `${teks}`,

          footerText: "Welcome In Family",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };

        prep = await ikyy.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        ikyy.relayWAMessage(prep);

      }

      if (anu.action == "remove" && !mem.includes(ikyy.user.jid)) {

        mdata = await ikyy.groupMetadata(anu.jid);

        num = anu.participants[0];

        let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, "") };

        anu_user = w.vname || w.notify || num.split("@")[0];

        memeg = mdata.participants.length;

        out = `${leave}`;

        buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/L5ZjZ8N/IMG-20220215-WA0067.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
            
        buttons = [

          { buttonId: `!bay`, buttonText: { displayText: "Selamat Jalan" }, type: 1 },];

        imageMsg = (

          await ikyy.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `${out}`,

          footerText: "Menjemput Ajal",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };

        prep = await ikyy.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        ikyy.relayWAMessage(prep);
        }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
