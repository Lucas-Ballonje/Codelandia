const comida = async () => {
    const APIResponse = await fetch(`https://api-receitas9.herokuapp.com/receitas`)

    if(APIResponse.status == 200){
        const data = await APIResponse.json()
        console.log(data)
        return data        
    }    
}

console.log(comida());