let handler = async (m, { conn }) => {
//---------------------------------------------
        m.reply(`Muffins de plátano y manzana
Paso 1: 
75 gramos de harina 70 gramos de azúcar 50 gramos de harina 1 cda de canela 
Paso 2: 1 plátano, 1 manzana, 200 gramos de azúcar 50 gramos de mantequilla 50 gramos de aceite
2 huevos 
225 gramos de harina 50 ML de leche 5 gramos de polvo de hornear vainilla y sal nuez moscada`);
//---------------------------------------------
}

handler.tags = ['recetas']
handler.command = ['MuffinsP&MNerio']

export default handler