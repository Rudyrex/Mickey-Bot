
let handler = async (m, { conn }) => {

//---------------------------------------------
        m.reply(`
*╭┈─────────────────╮*
*│❍ 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 ❍*
*╰┈─────────────────╯*

┏━━❬ 𝗥𝗘𝗖𝗘𝗧𝗔𝗦 ❭━━┓
┣⟢ .TortaDeYogurtNerio
┣⟢ .MuffinsP&MNerio
┣⟢ .ChantillyAquiles
┣⟢ .MousseNerio
┣⟢ .ButtercreamMixto
┗━━━━━⎆
        `);
//---------------------------------------------

}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'start', 'comandos', 'cmd']
handler.register = true

export default handler
