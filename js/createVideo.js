import { conectApi } from "./conectApi.js";

const form = document.querySelector('[data-form]');

async function createNewVideo(event) {
    event.preventDefault();
    
    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-title]').value;
    const image = document.querySelector('[data-image]').value;
    const description = Math.floor(Math.random() * 10).toString();

    await conectApi.createVideo(title,description,url,image);

    window.location.href = '../pages/envio-concluido.html';
}

form.addEventListener('submit' , event => createNewVideo(event));