const baseUrl = 'https://rickandmortyapi.com/api';

export async function getCharacters(){
    const response = await fetch(`${baseUrl}/character`)
    const responseJson = await response.json()
    return responseJson
}

export async function getCharacterBySearch(q){
    const response = await fetch(`${baseUrl}/character/?name=${q}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    getCharacters,
    getCharacterBySearch
}