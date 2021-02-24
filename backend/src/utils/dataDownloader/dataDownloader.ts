import axios from "axios";
import {Article} from "../interfaces/Article";


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
            let language: string = "en";
            let keyword: string = "cancer";

            /* GET ENGLISH ARTICLE DATA */
            const articleEnglishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
            //extract array of objects containing English articles
            const englishArticles = articleEnglishRequest.data.Result.Resources.Resource;
            //check data returned from API
            // console.log(englishArticles);

            /* GET SPANISH ARTICLE DATA */
            //switch language to get spanish articles
            language = "es";
            //extract array of objects containing Spanish articles
            const articleSpanishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
            const spanishArticles = articleSpanishRequest.data.Result.Resources.Resource;

            //checking properties of data
            const article = {
                articleEnglishTitle: englishArticles[0].Title,
                articleEnglishDate: englishArticles[0].LastUpdate,
                articleEnglishImageUrl: englishArticles[0].ImageUrl,
                articleImageAlt: englishArticles[0].ImageAlt,
                articleEnglishUrl: englishArticles[0].AccessibleVersion,
                articleSpanishTitle: spanishArticles[0].Title,
                articleSpanishDate: spanishArticles[0].LastUpdate,
                articleSpanishImageUrl: spanishArticles[0].ImageUrl,
                articleSpanishImageAlt: spanishArticles[0].ImageAlt,
                articleSpanishUrl: spanishArticles[0].AccessibleVersion
            }
            console.log(article);
            //iterate over articles and set corresponding attributes of interface object
            // for(let article of englishArticles) {
            //     const articleToInsert : Article {
            //         articleId: null,
            //         articleEnglishTitle: article.Title,
            //         articleEnglishDate: article.LastUpdate,
            //         articleEnglishImageUrl: articleImageUrl,
            //         articleEnglishImageAlt: string,
            //         articleEnglishUrl: string,
            //         articleSpanishDate: string,
            //         articleSpanishImageUrl: string,
            //         articleSpanishImageAlt: string,
            //         articleSpanishUrl: string
            //     }
            // await insertArticle(article);
            // }
        } catch (error) {
            throw new Error(error);
        }
    }
}

dataDownloader().catch(error => console.error(error));