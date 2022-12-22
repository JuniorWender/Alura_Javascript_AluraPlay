async function listAllVideos(){
    const conection = await fetch('http://localhost:3000/videos');
    const convertedConection = await conection.json();

    return convertedConection;
}

async function createVideo( titulo , descricao , url , imagem ){
    const conection = await fetch('http://localhost:3000/videos',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo : titulo,
            descricao : `${descricao} mil visualizações`,
            url : url,
            imagem : imagem
        })
    });

    const convertedConection = conection.json();

    return convertedConection;
}

async function findVideo(searchText) {
    const conection = await fetch(`http://localhost:3000/videos?q=${searchText}`);
    const convertedConection = conection.json();

    return convertedConection;
}

export const conectApi = {
    listAllVideos,
    createVideo,
    findVideo
}
