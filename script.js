// Daftar anime
const animeList = [
    {
        name: "Tensura",
        links: {
            zoro: "https://zoronime.com/anime/tensura-isekai-maou-to-shoukan-shoujo-no-dorei-majutsu/",
            bilibili: "https://www.bilibili.tv/id/search-result?q=Tensura"
        }
    },
    {
        name: "One Piece",
        links: {
            zoro: "https://zoronime.com/anime/one-piece/",
            bilibili: "https://www.bilibili.tv/id/search-result?q=One+Piece"
        }
    },
    {
        name: "Boku no Hero",
        links: {
            zoro: "https://zoronime.com/anime/boku-no-hero-academia/",
            bilibili: "https://www.bilibili.tv/id/search-result?q=Boku+no+Hero"
        }
    }
];

const button = document.getElementById("showBtn");
const listContainer = document.getElementById("animeList");
const siteSelect = document.getElementById("siteSelect");
const bgColorBtn = document.getElementById("bgColorBtn");
const body = document.body;

let isBlueDark = true; // biru tua default

// Fungsi update daftar anime sesuai dropdown
function updateAnimeList() {
    listContainer.innerHTML = "";
    const site = siteSelect.value;
    animeList.forEach(anime => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = anime.name;
        a.target = "_blank";
        a.href = anime.links[site];
        li.appendChild(a);
        listContainer.appendChild(li);
    });
}

// Tombol tampilkan/sembunyikan daftar anime
button.addEventListener("click", () => {
    if (listContainer.innerHTML === "") {
        updateAnimeList();
        button.textContent = "Sembunyikan Daftar Anime";
    } else {
        listContainer.innerHTML = "";
        button.textContent = "Tampilkan Daftar Anime";
    }
});

// Update otomatis jika dropdown berubah
siteSelect.addEventListener("change", () => {
    if (listContainer.innerHTML !== "") {
        updateAnimeList();
    }
});

// Tombol toggle background biru tua <-> biru muda & update semua teks
// Toggle background biru tua <-> biru muda
bgColorBtn.addEventListener("click", () => {
    if (isBlueDark) {
        body.style.backgroundColor = "#87CEFA"; // biru muda
        body.style.color = "#fff"; // teks utama ikut body
    } else {
        body.style.backgroundColor = "#0D47A1"; // biru tua
        body.style.color = "#fff"; // teks utama ikut body
    }
    // Daftar anime tetap putih dengan teks hitam
    document.querySelectorAll("li").forEach(li => {
        li.style.backgroundColor = "#fff";
        li.style.color = "#000";
    });
    isBlueDark = !isBlueDark;
});


// Dark mode (opsional) - aktifkan dengan double-click
body.addEventListener("dblclick", () => {
    body.classList.toggle("dark-mode");
});
