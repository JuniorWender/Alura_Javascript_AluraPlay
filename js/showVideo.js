import { conectApi } from "./conectApi.js";

const ul_element = document.querySelector('[data-list]');

export default function buildCard(titulo, descricao, url, imagem) {
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

async function listVideo(){
    try {
        const apiList = await conectApi.listAllVideos();
        apiList.forEach(element => ul_element.appendChild(
            buildCard(element.titulo, element.descricao, element.url, element.imagem)
            ));
    }
    catch{
        ul_element.innerHTML = `<h2 class="mensagem_titulo"> Erro Ao Tentar Carregar os Vídeos </h2>
        <i class="fa-solid fa-triangle-exclamation"></i>`
    }
}

listVideo();
