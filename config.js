const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["2348140825959"];
global.OwnerNumber = ["2348140825959"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"AJJak+LsdVH0tbULjLJdx8jnfWEHgk3UB7CXSWF0SXo="},"public":{"type":"Buffer","data":"+fYTp0yhon88Zp8D/HNETlQhHPvX8OLTsr6rWw+UJxA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KBk8av7Svlxc7EseCnP04s8KHXOemXKKzgcQhIXiMHA="},"public":{"type":"Buffer","data":"6sIbODNXHzgIXuhDxKxBFxUktAqMgiC5G23jSbwvqAo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WH/f/rTJJu7SM7fCeDU4y5kDUlmyHSI2LCdSjjF2km0="},"public":{"type":"Buffer","data":"4x8eHT0VB5J+GwoBkYeaAtgUuCKHxhLU1gOGqPiYXkw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SPQt4/N6ppvN4PpmPcY7BGQ2lmdbdplWAghQLefpc0c="},"public":{"type":"Buffer","data":"AwXSO+pjaY1trIrbVhXhPfXU17WmfKhAU0Oe8DQCrBk="}},"signature":{"type":"Buffer","data":"vwJWzP/PyHqpuHyUfTVNoNvyVbiFbCDJcNJgyXtjyPq4c+l+Ctoy80gdJRmLExh9m3xbw7cizzZnjxF968a+gw=="},"keyId":1},"registrationId":219,"advSecretKey":"cRzlZDnLiQBJRjPsJCdrPYm1sUf8+VrEoAknWHmoAuo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"LrfPtrq7RcuT6aqIWzv0xQ","phoneId":"b42ea214-52ae-4ba0-a2d2-8a17aa61a5ad","identityId":{"type":"Buffer","data":"wshh18Y5BGrosepRoYDuJNNMuV8="},"registered":true,"backupToken":{"type":"Buffer","data":"71QHThXdmnx5yXogkyx8n4DsdXo="},"registration":{},"pairingCode":"6BTWVPLV","me":{"id":"2347063183606:12@s.whatsapp.net","name":"Ikechukwu"},"account":{"details":"CMrBrpgFENfEpLQGGAEgACgA","accountSignatureKey":"LXexUPxGoQWh691wsKzwxIp1/9jmsKFYoc0VQsBMdwg=","accountSignature":"0mHJLLRR5KNj+xkoSlv07nep9vs5Y4M4E39BDiyJlRvjpW9sUyBhrBij6aFa+SJ7GTAI+G5Bb+72DGqTA/n5AA==","deviceSignature":"3x4+mi02yYfijkb1Q9Rtmxrx9U7Kh+et+W6iBIvUNXrDeN1P6paVtZ4I/o299gCTdNOncRo9F6RW4KA299lsiw=="},"signalIdentities":[{"identifier":{"name":"2347063183606:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BS13sVD8RqEFoevdcLCs8MSKdf/Y5rChWKHNFULATHcI"}}],"platform":"smba","lastAccountSyncTimestamp":1720263269,"myAppStateKeyId":"AAAAABkp"}`
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
    botadmin: 'Make me Admin first 😌📍.',
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
