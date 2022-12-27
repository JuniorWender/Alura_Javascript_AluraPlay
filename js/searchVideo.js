import { conectApi } from "./conectApi.js";
import  buildCard  from "./showVideo.js";

const searchButton_Element = document.querySelector('[data-search-button]');

async function searchVideo(event) {
    event.preventDefault();
    const searchBar_Element = document.querySelector('[data-search]').value;
    const search = await conectApi.findVideo(searchBar_Element);

    const list_Element = document.querySelector('[data-list]');

    while(list_Element.firstChild){
        list_Element.removeChild(list_Element.firstChild);
    }

    search.forEach(element => list_Element.appendChild(
        buildCard( element.titulo, element.descricao, element.url, element.imagem )
        )
    );
    if(search.length == 0){
        list_Element.innerHTML = `<h2 class="Mensagem_Erro"> Nenhum Vídeo Encontrado </h2>
        <i class="fa-solid fa-circle-exclamation emote"></i>`
    }

}

searchButton_Element.addEventListener("click" , event => searchVideo(event));
