const tituloNoticia = document.querySelectorAll(".tituloNoticia")
const descricaoNoticia = document.querySelectorAll(".descricaoNoticia")

let searchNoticia = []

const fetchNoticia = async () => {
    const APIResponse = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=3e18ef60908e46a192efb8d4388d88d0`)

    if(APIResponse.status == 200){
        const data = await APIResponse.json();                
        return data;
    }
}

const renderNoticia = async () => {
    tituloNoticia.innerHTML = "Loading...";
    descricaoNoticia.innerHTML = "Loading...";

    const data = await fetchNoticia()
    if(data){
        data.articles.forEach((article, index) => {
            if(tituloNoticia[index] && descricaoNoticia[index]){
                tituloNoticia[index].textContent = article.title;
                descricaoNoticia[index].textContent = article.description;
            }
        });
    }else {
        tituloNoticia.forEach((titulo) => (titulo.textContent = "Not Found"));
        descricaoNoticia.forEach((descricao) => {
            descricao.textContent = "Not Found"
        })
    }       
}

console.log(descricaoNoticia);
renderNoticia()