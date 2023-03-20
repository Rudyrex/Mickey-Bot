let handler = async (m, { conn }) => {
//---------------------------------------------
        m.reply(`Torta o postre de yogurt molde 18 cm 
*INGREDIENTES*
Para la base:
150g de galletas marías 
60g de mantequilla

Para el relleno:
50 gramos de mermelada 
250 ML de yogurt de sabor
40g de azúcar 
15 g de grenetina 
250g de crema para batir 
125 ML de agua

Para la parte de arriba:
400 gramos de agua 
60 gramos de gelatina de sabor
Procedimiento:
En un bowl bien frío batimos la crema para batir con el azúcar cuando esté montada agregamos el yogurt luego la mermelada y al último la grenetina
Procedimiento Para la parte de arriba:
Primero ponemos 200 gramos de agua caliente con los 60 gramos de gelatina ya que este disuelta ponemos los otros 200 gramos de agua fría 
Cuando medio cuaje la primera preparación ponemos la gelatina de sabor cuando ya  esté a temperatura ambiente de 28 o 30 grados centígrados 

Le podemos poner fruta una capa de crema una parte con fruta y así hasta acabarla`);
//---------------------------------------------
}

handler.tags = ['recetas']
handler.command = ['TortaDeYogurtNerio']

export default handler