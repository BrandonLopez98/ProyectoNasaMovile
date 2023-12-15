const API_KEY = '9ahea2Jx9TUwuvZEcINGhFfCBX8emZgBsB6FTicl';

export default async (urlParams?: string) => {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${urlParams ? urlParams : ''}`);

        const data = await response.json();

        return Promise.resolve(data)
    } catch (error) {

        console.error('Error al obtener la APOD de la NASA:', error);
        return Promise.reject(error);

    }
}