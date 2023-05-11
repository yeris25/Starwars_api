export async function Personajes() {
    const URL = "https://swapi.dev/api/species"

    const INFO = {
        method: "GET"
    }

    let result = await fetch(URL, INFO)
    let response = await result.json()
    return (response.results)
}

export async function Vehicles() {
    const URL = "https://swapi.dev/api/planets"

    const INFO = {
        method: "GET"
    }

    let result = await fetch(URL, INFO)
    let response = await result.json()
    return (response.results)
}
    
    


