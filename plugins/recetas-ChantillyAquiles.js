let handler = async (m, { conn }) => {
//---------------------------------------------
        m.reply(`Chantilly 
Por cada 100 gramos de crema para batir usar 20 gramos de azúcar y 25 gramos de leche fría

si queremos Chantilly firme
10 gramos por cada 100 gramos de crema batida
Batir la crema batida a un punto medio después  poner a hidratar 10 gramos de grenetina por 5 a 10 minutos hasta que parezca una esponja llevarla al microondas hasta que se disuelva en intervalos de 15 segundos después dejarla que se temple a temperatura ambiente y ponerle 4 cdas de crema batida sin montar a la grenetina para que no se hagan pelotas después agregarlo en forma de hilo batiendo`);
//---------------------------------------------
}

handler.tags = ['recetas']
handler.command = ['ChantillyAquiles']

export default handler