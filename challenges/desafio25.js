db.produtos.updateMany({
  "valoresNutricionais.2.percentual": { $gte: 40 },

}, {
 $push: {
   tags: {
     $each: ["muito sódio"],
     $position: 3,
   },
 },
});

db.produtos.find({}, {
 _id: 0,
 nome: 1,
 tags: 1,
});