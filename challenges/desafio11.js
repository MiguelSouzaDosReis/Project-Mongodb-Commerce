db.produtos.find({
  $nor: [
    { nome: { $eq: "Big Mac" } },
    { nome: { $eq: "McChicken" } },
  ],
}, {
  _id: 0,
  nome: 1,
  curtidas: 1,
  vendidos: 1,
});