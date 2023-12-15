const API_KEY = '9ahea2Jx9TUwuvZEcINGhFfCBX8emZgBsB6FTicl';
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';

export default async (urlParams?: string) => {
    try {
        const response = await fetch(`${API_URL}${API_KEY}
        ${typeof urlParams !== 'undefined' && urlParams?.length >0 
        ? urlParams : ''}`)
        
        const data = await response.json();

        return Promise.resolve(data)
    } catch (error) {

        return Promise.reject(error)

    }
}