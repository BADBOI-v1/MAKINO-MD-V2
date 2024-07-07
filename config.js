const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = true;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["2348140825959"];
global.OwnerNumber = ["2348140825959"];
global.ownertag = [""]; 
global.OwnerName =  "BAD BOI";
global.BotName = "🐦BADBOI-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"2Fur/9ea1cfC8WVYLqO9XrfcoUk+L6e4BUMRLu/q1Fk="},"public":{"type":"Buffer","data":"1lIJwOPGJiLLIBiECnsFL0jZPkbFZOyl0P/XkG/fRRo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"aD3swLregB0dIxKhOD+gHMYDXF400MSP8OHr9yFTNEU="},"public":{"type":"Buffer","data":"eSStseLgUgK7u/uJNsNj3M2JFuQ3un1A/DoMy/vDyno="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cOd/hgAoGtfEDkWCUkig5fAjx8slO8sF5K3yXR4iQEw="},"public":{"type":"Buffer","data":"wUBugRJE4AYocHS3NM0a33hb1v3try9VnolF4p0bFEU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"yL/G9+m1NhucAGBl1+7QqFy+sIhJ/YoqcyHaGBZkt3s="},"public":{"type":"Buffer","data":"dR8VoLJGYu7i2ElDC1+8HMNnatBNdnBKqwGpCjdjgXU="}},"signature":{"type":"Buffer","data":"tICnvz9FSO7yshIWjo002472RujCwX1/hUq/UrH89JC7khJROHdgp3kPuXk+aIFLOAezYcMZ8i2zQUSG8X0ogQ=="},"keyId":1},"registrationId":245,"advSecretKey":"HtKJAizdPBpjCEVoWwP3EHOUEuLHkhW6z8IquHqXS9Q=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"X0pRWFnWT-Oens-a2tMcag","phoneId":"036bbfab-e266-4f7d-9c8b-fe5b85481d2a","identityId":{"type":"Buffer","data":"iKvJAoI5SnFcxUSXkh60jvaCeDw="},"registered":true,"backupToken":{"type":"Buffer","data":"kl2e/x5KdR/lCHOESEiKK5lx01g="},"registration":{},"pairingCode":"BPETN73C","me":{"id":"2348140825959:89@s.whatsapp.net","name":"Bad Boi Hacker"},"account":{"details":"CP7e9rADEK/AqrQGGAMgACgA","accountSignatureKey":"BVbuHshB/4TVvwO3Xg8m5XgA5FXG4dSJnqZ/LlCnMCo=","accountSignature":"AF7G7+DynLRvnbM3yiZwXkaedvxkMtREyOiBTu/Cg9DIC0QuVkzo3kwJ3j4wA38qhS/XdxvUA79qUxMK2inOhw==","deviceSignature":"3OgfNKNLSXXHliNO94djK4tEKaim3EOE4w1i5ylKYd1Hw71q6oerP3tOlnIhVC+JwhZJ8IdaLSKb7RWtpavWhg=="},"signalIdentities":[{"identifier":{"name":"2348140825959:89@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQVW7h7IQf+E1b8Dt14PJuV4AORVxuHUiZ6mfy5QpzAq"}}],"platform":"smbi","lastAccountSyncTimestamp":1720361022,"myAppStateKeyId":"AAAAAKSL"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me BADBOI Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
