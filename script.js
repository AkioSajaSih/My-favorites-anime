const bgColorBtn = document.getElementById("bgColorBtn");
const sections = document.querySelectorAll("section");
const home = document.getElementById("home");
const list = document.getElementById("list");
const detail = document.getElementById("detail");
const animeContainer = document.getElementById("animeContainer");
const lihatDaftarBtn = document.getElementById("lihatDaftarBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const backListBtn = document.getElementById("backListBtn");
const backHomeBtn2 = document.getElementById("backHomeBtn2");
const zoroBtn = document.getElementById("zoroBtn");
const biliBtn = document.getElementById("biliBtn");

let isBlueDark = true;

// Data anime
const animeList = [
  {
    name: "Tensei Shitara Slime Datta Ken",
    genre: "Fantasy, Isekai, Action, Adventure",
    rating: "8.1/10",
    synopsis: "Satoru Mikami, seorang pria biasa yang terbunuh, bereinkarnasi di dunia lain sebagai slime dengan kekuatan luar biasa. Ia kemudian membangun kerajaan monster bernama Tempest dan menjadi Rimuru Tempest.",
    img: "https://static.wikia.nocookie.net/tensura/images/b/bb/Promo_Visual_1.png",
    links: {
      zoro: "https://zoronime.com/anime/tensura-nikki-tensei-shitara-slime-datta-ken/",
      bilibili: "https://www.bilibili.tv/id/search-result?q=Tensei+Shitara+Slime+Datta+Ken"
    }
  },
  {
    name: "One Piece",
    genre: "Action, Adventure, Fantasy",
    rating: "9.0/10",
    synopsis: "Monkey D. Luffy dan kru Topi Jerami berlayar mencari harta karun legendaris bernama One Piece, sambil menghadapi bajak laut dan angkatan laut dalam petualangan panjang di lautan dunia.",
    img: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    links: {
      zoro: "https://zoronime.com/anime/one-piece/",
      bilibili: "https://www.bilibili.tv/id/search-result?q=One+Piece"
    }
  },
  {
    name: "Boku no Hero Academia",
    genre: "Action, School, Super Power",
    rating: "8.2/10",
    synopsis: "Izuku Midoriya, seorang anak tanpa kekuatan, bercita-cita menjadi pahlawan di dunia penuh Quirk. Dengan bimbingan All Might, ia berlatih untuk menjadi pahlawan sejati di U.A. High School.",
    img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    links: {
      zoro: "https://zoronime.com/anime/boku-no-hero-academia/",
      bilibili: "https://www.bilibili.tv/id/search-result?q=Boku+no+Hero"
    }
  }
];

// Fungsi ubah halaman
function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Buat daftar anime
function loadAnimeList() {
  animeContainer.innerHTML = "";
  animeList.forEach((anime, index) => {
    const card = document.createElement("div");
    card.classList.add("anime-card");
    card.innerHTML = `
      <img src="${anime.img}" alt="${anime.name}">
      <h3>${anime.name}</h3>
    `;
    card.addEventListener("click", () => showAnimeDetail(index));
    animeContainer.appendChild(card);
  });
}

// Tampilkan detail anime
function showAnimeDetail(index) {
  const anime = animeList[index];
  document.getElementById("animeTitle").textContent = anime.name;
  document.getElementById("animeGenre").textContent = anime.genre;
  document.getElementById("animeRating").textContent = anime.rating;
  document.getElementById("animeSynopsis").textContent = anime.synopsis;
  document.getElementById("animeImage").src = anime.img;

  zoroBtn.onclick = () => window.open(anime.links.zoro, "_blank");
  biliBtn.onclick = () => window.open(anime.links.bilibili, "_blank");

  showSection("detail");
}

// Navigasi
lihatDaftarBtn.onclick = () => {
  loadAnimeList();
  showSection("list");
};
backHomeBtn.onclick = () => showSection("home");
backListBtn.onclick = () => showSection("list");
backHomeBtn2.onclick = () => showSection("home");

// Tombol ubah background
bgColorBtn.addEventListener("click", () => {
  if (isBlueDark) {
    document.body.style.backgroundColor = "#87CEFA";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#0D47A1";
    document.body.style.color = "#fff";
  }
  isBlueDark = !isBlueDark;
});
