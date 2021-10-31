import axios from 'axios';

const api = axios.create({
    baseURL: "https://pt.wikipedia.org/w/api.php",
    params: {
        action: 'query',
        prop: 'extracts',
        format: 'json', 
        origin: '*'   
    }
});

async function getAstroData() {
    const response = await api.get('', {
        params: {
            titles: 'urano (planeta)'
        }
    })

    const wikiPageContent = 'Object.values(response.data.query.pages)[0].extract';
    const threeWikiPageParagraphs = wikiPageContent.split('</p>').splice(0,3).join('</p>');
    const auxTag = document.createElement('div');

    auxTag.innerHTML = threeWikiPageParagraphs;
    
    console.log(auxTag.textContent)
}