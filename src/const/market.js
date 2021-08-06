import { randNumber } from "../helpers/numberHelper";

const bestSelling = [
  {
    name: "Activia",
    price: 4000,
    sold: randNumber(100),
    img: "./assets/img/activia.jpg"
  },
  {
    name: "Aqua",
    price: 3000,
    sold: randNumber(100),
    img: "./assets/img/aqua.jpg"
  },
  {
    name: "Vit",
    price: 2500,
    sold: randNumber(100),
    img: "./assets/img/vit.jpg"
  },
  {
    name: "Mizone",
    price: 5000,
    sold: randNumber(100),
    img: "./assets/img/mizone.jpg"
  },
  {
    name: "Bebelac",
    price: 15000,
    sold: randNumber(100),
    img: "./assets/img/bebelac.jpeg"
  }
];

const topCompetitor = [
  {
    name: "Activia",
    price: 4000,
    sold: randNumber(100),
    img: "./assets/img/activia.jpg"
  },
  {
    name: "Aqua",
    price: 3000,
    sold: randNumber(100),
    img: "./assets/img/aqua.jpg"
  },
  {
    name: "Vit",
    price: 2500,
    sold: randNumber(100),
    img: "./assets/img/vit.jpg"
  },
  {
    name: "Mizone",
    price: 5000,
    sold: randNumber(100),
    img: "./assets/img/mizone.jpg"
  },
  {
    name: "Bebelac",
    price: 15000,
    sold: randNumber(100),
    img: "./assets/img/bebelac.jpeg"
  }
];

export default { bestSelling, topCompetitor };
