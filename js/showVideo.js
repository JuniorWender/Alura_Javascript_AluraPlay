// import { conectApi } from "./conectApi.js";

const ul_element = document.querySelector('[data-list]');

async function listAllVideos(){
    const url = await fetch('http://localhost:3000/videos');
    const convertUrl = await url.json();

    listVideo(convertUrl);
}

function buildCard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.className = "videos_item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return video;
}

function listVideo(videos){
    const apiList =  videos.listAllVideos();
    apiList.forEach(element => ul_element.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)
        ));
}

listVideo();
