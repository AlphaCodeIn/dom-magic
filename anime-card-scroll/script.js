const characters = [
  {
    name: "Naruto Uzumaki",
    image: "./img/naruto.png",
    bgColor: "#E7C241",
    age: 17,
    rank: "Hokage",
    clan: "Uzumaki",
    powerLevel: 95,
  },
  {
    name: "Sakura Haruno",
    image: "./img/Sakura.png",
    bgColor: "#ea8e89",
    age: 17,
    rank: "Jonin",
    clan: "Haruno",
    powerLevel: 78,
  },
  {
    name: "Sasuke Uchiha",
    image: "./img/sasuke.png",
    bgColor: "#bc5ba7",
    age: 17,
    rank: "Rogue Shinobi",
    clan: "Uchiha",
    powerLevel: 94,
  },
  {
    name: "Kakashi Hatake",
    image: "./img/kakasi.png",
    bgColor: "#908C8A",
    age: 29,
    rank: "Former Hokage",
    clan: "Hatake",
    powerLevel: 89,
  },
  {
    name: "Jiraiya",
    image: "./img/jiraya.png",
    bgColor: "#dbb681",
    age: 54,
    rank: "Legendary Sannin",
    clan: "None",
    powerLevel: 88,
  },
  {
    name: "Tobi (Obito)",
    image: "./img/tobi.png",
    bgColor: "#d05b13",
    age: 31,
    rank: "Akatsuki Leader",
    clan: "Uchiha",
    powerLevel: 93,
  },
  {
    name: "Hokage (Minato)",
    image: "./img/hokage.png",
    bgColor: "#a16145",
    age: 24,
    rank: "4th Hokage",
    clan: "Namikaze",
    powerLevel: 91,
  },
];

//   -------
const main = document.querySelector(".card-wrap");
const cardWidth = 320 + 120;

document.getElementById("next").addEventListener("click", () => {
  main.scrollBy({ left: cardWidth, behavior: "smooth" });
});

document.getElementById("prev").addEventListener("click", () => {
  main.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

let allCards = document.querySelector(".card-wrap");

characters.forEach(function (char) {
  allCards.innerHTML += `
    <div class="card" style="background-color:${char.bgColor}; box-shadow: 0 0 50px ${char.bgColor}66;">
            <img src="${char.image}" alt="">
            <div class="details">
            <h2>${char.name}, ${char.age}</h2>
            <p>Rank: ${char.rank}</p>
            <p>Clan: ${char.clan}</p>
            <p>Power Level: ${char.powerLevel}</p>
</div>
      


        </div>
    `;
});
