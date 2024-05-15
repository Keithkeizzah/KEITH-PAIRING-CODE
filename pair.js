PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Mehmedi_Md,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("mehmedi-md-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Mehmedi_Md = Mehmedi_Md({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Mehmedi_Md.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Mehmedi_Md.ev.on('creds.update', saveCreds)
            Pair_Code_By_Mehmedi_Md.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Mehmedi_Md.sendMessage(Pair_Code_By_Mehmedi_Tech.user.id, { text: '' + b64data });

               let SIGMA_MD_TEXT = `
𝐌𝐄𝐇𝐌𝐄𝐃𝐈-𝐌𝐃 𝘚𝘌𝘚𝘚𝘐𝘖𝘕 𝘙𝘜𝘕𝘕𝘐𝘕𝘎*
*𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮 𝚳𝐃*
*𝙊𝙒𝙉𝙀𝙍 : 𝚳𝚵𝚮𝚳𝚵𝐃𝚰 𝐂𝚮𝚫𝐘𝚯 𝚻𝚵𝐂𝚮*
____________________________________
╔════◇
║『 𝐌𝐄𝐇𝐌𝐄𝐃𝐈-𝐌𝐃 𝙄𝙎 𝙍𝙀𝘼𝘿𝙔 𝙏𝙊 𝘿𝙀𝙋𝙇𝙊𝙔』
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
 await Pair_Code_By_Mehmedi_Md.sendMessage(Pair_Code_By_Mehmedi_Md.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Mehmedi_Md.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
