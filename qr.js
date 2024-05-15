const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: '' + b64data });
	
				   let SIGMA_MD_TEXT = `
*𝐌𝐄𝐇𝐌𝐄𝐃𝐈-𝐌𝐃 𝘚𝘌𝘚𝘚𝘐𝘖𝘕 𝘙𝘜𝘕𝘕𝘐𝘕𝘎*
*𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮*
*𝙊𝙒𝙉𝙀𝙍 : 𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮 𝚳𝐃*
____________________________________
╔════◇
║『 𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮 𝚳𝐃 𝙄𝙎 𝙍𝙀𝘼𝘿𝙔 𝙏𝙊 𝘿𝙀𝙋𝙇𝙊𝙔』
║ OK YOUR SESSION IS READY COPY IT  
║ AND HOST IT ON HEROKU.
╚════════════════════╝
╔═════◇
║ 『••• OWNER INFO •••』
║ ❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _https://www.youtube.com/@Mehmedi_Chayo_

║ ❒ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/254721367216_

║ ❒ 𝐑𝐞𝐩𝐨: _https://github.com/mehmedichayo17/Mehmedi-Md_

║ ❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/KsixrNss4OH9QGBD3cuk8g_

║ ❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://chat.whatsapp.com/KsixrNss4OH9QGBD3cuk8g_

║ ❒ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/mehmedi_chayo?igsh=MWxuOHdhdzA0ZGpreQ==_

║ 🐯🐯🐯
╚════════════════════╝ 
 *©𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮 𝚳𝐃*
___________________________________

Don't Forget To Give Star⭐ To My Repo`
					
	 await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
