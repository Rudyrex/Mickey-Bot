
let handler = async (m, { conn, usedPrefix, command }) => {
	
if (!m.quoted) throw `✳️ ʀᴇsᴘᴏɴᴅᴇ ᴀʟ ᴍᴇɴsᴀᴊᴇ ǫᴜᴇ ᴅᴇsᴇᴀ ᴇʟɪᴍɪɴᴀʀ`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^del(ete)?$/i
handler.group = false
handler.admin = true
handler.botAdmin = true
handler.owner = true

export default handler
