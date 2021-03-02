import axios from "axios";
import {Article} from "../interfaces/Article";
import {insertArticle} from "../article/insertArticle";


/*
Initial ideas:
GET all English categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category
GET all Spanish categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=category
GET all English topics https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=topic
GET all Spanish topics https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=topic
Use those topic IDs and category IDs to GET all the topics and categories by ID for each language. It might be easier to insert all of the categories this way, but there is a better way to GET all topics.
The articles are essentially topics here and you can get them by data.Result.Resources. This is where the array of objects containing our articles lives. You can all GET all by leaving off the topicID in the request URL like this: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en
Request this for both both languages and merge them?
 */


function dataDownloader(): Promise<any> {
    async function main() {
        try {
            let keywords = ["cancer", "diabetes", "stroke", "obesity"];
            //loop through keywords and download article for each
            await keywords.forEach((keyword) => {
                downloadArticles(keyword);
            })
        } catch (error) {
            console.error(error)
        }
    }

    return main();

    //could be download articles
    async function downloadArticles(keyword: string) {
        try {
            //set params for the query string
            let language: string = "en";

            //check how many words in keyword: if more than one word, format string appropriately.
            if (keyword.split(" ").length > 1) {
                keyword = keyword.split(" ").join("%20");
            }
            //checking keywords are correct
            console.log(keyword);

            /* GET ENGLISH ARTICLE DATA */
            console.log("BEFORE ENGLISH ARTICLE REQUEST", keyword);
            //TODO: add if/ternary to check if undefined first
            const articleEnglishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
            console.log("AFTER ENGLISH ARTICLE REQUEST", keyword);
            //extract array of objects containing English articles
            console.log("BEFORE ASSIGNING ENGLISH RESOURCE ARRAY", keyword);
            const englishArticles = articleEnglishRequest?.data.Result.Resources.Resource;
            //check data returned from API
            // console.log(englishArticles);

            /* GET SPANISH ARTICLE DATA */
            //switch language to get spanish articles
            language = "es";
            //extract array of objects containing Spanish articles
            console.log("BEFORE SPANISH ARTICLE REQUEST", keyword);
            //TODO: add if/ternary to check if undefined first
            const articleSpanishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`)
            console.log("AFTER ENGLISH ARTICLE REQUEST", keyword);

            console.log("BEFORE ASSIGNING SPANISH RESOURCE ARRAY", keyword);
            const spanishArticles = articleSpanishRequest.data.Result.Resources.Resource;
            console.log("REQUESTS COMPLETE", keyword);

            //iterate over articles and set corresponding attributes of interface object
            for (let i = 0; i < spanishArticles.length; ++i) {
                if (spanishArticles[i] === 'undefined' || englishArticles[i] === 'undefined') {
                    //article is undefined: continue loop at next step
                    continue;
                }
                const article: Article = {
                    articleId: null, //null for now: UUID will be set by the insertArticle function
                    articleEnglishTitle: englishArticles[i].Title,
                    articleEnglishDate: englishArticles[i].LastUpdate,
                    articleEnglishImageUrl: englishArticles[i].ImageUrl,
                    articleEnglishImageAlt: englishArticles[i].ImageAlt,
                    articleEnglishUrl: englishArticles[i].AccessibleVersion,
                    articleSpanishTitle: spanishArticles[i].Title,
                    articleSpanishDate: spanishArticles[i].LastUpdate,
                    articleSpanishImageUrl: spanishArticles[i].ImageUrl,
                    articleSpanishImageAlt: spanishArticles[i].ImageAlt,
                    articleSpanishUrl: spanishArticles[i].AccessibleVersion
                }
                // console.log(article);
                //insert article into database using MySql enabled function
                await insertArticle(article);
            }
        } catch
            (error) {
            throw new Error(error);
        }
    }
}

dataDownloader().catch(error => console.error(error));