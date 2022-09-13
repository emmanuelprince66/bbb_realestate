import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi  = async (url) => {
    const { data } = await axios.get((url) , {
        headers: {
            'X-RapidAPI-Key': '4f671b189emsh181719cb6943eddp1dd09fjsnf5381dd13f93',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data;
}