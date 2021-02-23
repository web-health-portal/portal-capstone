import axios from "axios";


function dataDownloader(): Promise<any> {
    async function main() {
        try {
            await downloadArticles();
        } catch (error) {
            console.error(error)
        }
    }

    return main();

    //could be download articles
    async function downloadArticles() {
        try {
            //set params for the query string
            let language : string = "en";
            let keyword  : string= "cancer";
            const articleEnglishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
            //extract array of objects containing English articles
            const englishArticles = articleEnglishRequest.data.Resources.Resource;
            //check data returned from API
            console.log(englishArticles);
            //switch language to get spanish articles
            language = "es";
            //extract array of objects containing Spanish articles
            const articleSpanishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
            const spanishArticles = articleSpanishRequest.data.Resources.Resource;
            console.log(spanishArticles);
            //once we have both language versions we'll use object destructuring for each object in the array.

            //return the array of objects? we'll see.
        } catch (error) {
            throw new Error(error);
        }
    }
}

dataDownloader().catch(error => console.error(error));


// fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`)
//     .then(response => response.json())
//     .then(json => json)
//     .then(data => apiData.push(data.Result.Resources.Resource))
//     // .then(result => console.log(result)
//     .catch(err => {
//         console.error(err);
//     });