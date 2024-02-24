const { Alpha, mode } = require("../lib");
const util = require('util');
const axios = require('axios');
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
Alpha({
        pattern: "pastebin",
        desc: "pastes quoted text on pastebin",
        type: "misc",
        fromMe: mode
    },
    async(message, match) => {
let x = message.reply_message.text;
        
        if (!x) {
            return message.reply("Please reply to a message to create a paste.");
        }
        let data = await pastebin.createPaste(x, "Alpha-md");
        return message.reply('_Paste created on pastebin;_\n'+data+'\n*Click to Get Your Text*');
    }
);
Alpha({
    pattern: "telegraph",
    desc: "pastes quoted text on telegraph.",
    type: "misc",
    fromMe: mode
},
    async (message, match) => {
        let y = message.reply_message.text;
        
        if (!y) {
            return message.reply("Please reply to a message to create a paste.");
        }

        let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Alpha+md&author_name=Cipher0071&content=[%7B"tag":"p","children":["${y.replace(/ /g,'+')}"]%7D]&return_content=true`);
        return message.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);