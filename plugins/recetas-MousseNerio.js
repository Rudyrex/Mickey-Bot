let handler = async (m, { conn }) => {
//---------------------------------------------
        m.reply(`-Mousse: 250gr Chantilly Montada 250 ML crema de 🥛10 gr Grenetina 250 pulpa de 🍓 75gr azúcar

-Mermelada: 1 libra (353gr) de 🍓 1 cda zumo de 🍈 340gr azúcar.

-Gelatina con Sabor 60gr 200ml agua caliente y luego 200ml de agua fria.`);
//---------------------------------------------
}

handler.tags = ['recetas']
handler.command = ['MousseNerio']

export default handler