//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Etiqueta o menciona al usuario para desbanear`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `usuarios @${who.split`@`[0]} ha sido Desbaneado con exitos✅️ ahora si puede usar el bot`, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.admin = true
handler.owner = true

export default handler
