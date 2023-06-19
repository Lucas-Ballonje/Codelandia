const tituloNoticia = document.querySelector(".tituloNoticia")
const descricaoNoticia = document.querySelector(".descricaoNoticia")

let searchNoticia = 1;

const fetchNoticia = async (noticia) => {
    const APIResponse = await fetch(`https://newsapi.org/v2/top-headlines/sources?&apiKey=3e18ef60908e46a192efb8d4388d88d0`)

    if(APIResponse.status == 200){
        const data = await APIResponse.json()
        return data        
    }
}