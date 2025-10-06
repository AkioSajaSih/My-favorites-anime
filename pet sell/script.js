const animeList = [
    {
        name: "Tensura",
        links: {
            zoro: "https://zoronime.com/?s=Tensura",
            bilibili: "https://www.bilibili.tv/id/search-result?q=Tensura"
        }
    },
    {
        name: "One Piece",
        links: {
            zoro: "https://zoronime.com/anime/one-piece/",
            bilibili: "https://www.bilibili.tv/id/search-result?q=One-piece"
        }
    },
    {
        name: "Boku no Hero",
        links: {
            zoro: "https://zoronime.com/?s=Boku-no-hero",
            bilibili: "https://www.bilibili.tv/id/search-result?q=boku-no-hero"
        }
    }
];

const button = document.getElementById("showBtn");
const listContainer = document.getElementById("animeList");
const siteSelect = document.getElementById("siteSelect");

button.addEventListener("click", () => {
    if (listContainer.innerHTML === "") {
        animeList.forEach(anime => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = anime.name;
            a.target = "_blank";
            a.style.textDecoration = "none";
            a.style.color = "#333";

            // ambil link berdasarkan dropdown
            const site = siteSelect.value;
            a.href = anime.links[site];

            li.appendChild(a);
            listContainer.appendChild(li);
        });
        button.textContent = "Sembunyikan Daftar Anime";
    } else {
        listContainer.innerHTML = "";
        button.textContent = "Tampilkan Daftar Anime";
    }
});
