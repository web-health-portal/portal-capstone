import axios from "axios";
import {v1 as uuid} from "uuid";
//bring in TypeScript interfaces
import {Article} from "../interfaces/Article";
import {ArticleCategory} from "../interfaces/ArticleCategory";
import {Category} from "../interfaces/Category";
//bring in MySQL functions
import {insertArticle} from "../article/insertArticle";
import {insertCategory} from "../category/insertCategory";
import {insertArticleCategory} from "../articleCategory/insertArticleCategory"
import {selectArticleMyHealthFinderIdByMyHealthFinderId} from "../article/selectArticleMyHealthFinderIdByMyHealthFinderId";
//bring in helper functions
import formatUrlForSmallImages from "./formatUrlForSmallImages";
import convertTimestampToMySQLDate from "./convertTimestampToMySQLDate";

function dataDownloader(): Promise<any> {
    async function main() {
        try {
            await fetchAndInsertAllDataFromApi().catch(error => console.log(error));
        } catch (error) {
            console.error(error)
        }
    }

    return main();

    async function fetchAndInsertAllDataFromApi() {
        // GET all English categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category
        const englishCategories = await axios('https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category');
        // GET all Spanish categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=category
        const spanishCategories = await axios('https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=category');
        //get total categories returned from API
        const totalCategories = englishCategories.data.Result.Total;

        //iterate through categories
        for (let i = 0; i < totalCategories; i++) {
            //create Category per interface
            let category: Category = {
                categoryId: <string>uuid(),
                categoryEnglishName: englishCategories.data.Result.Items.Item[i].Title,
                categorySpanishName: spanishCategories.data.Result.Items.Item[i].Title
            }

            //insert category into db
            console.log("inserting category");
            console.log(category);
            await insertCategory(category);

            //grab current category id from API
            let currentCategoryId = englishCategories.data.Result.Items.Item[i].Id;

            //make a request to the API using axios
            let articlesEnglish = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&categoryId=${currentCategoryId}`);
            let articlesSpanish = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=es&categoryId=${currentCategoryId}`);
            //get value of total for topics/articles
            const totalTopics = articlesEnglish.data.Result.Total;

            //these two hold the arrays of topics/articles
            articlesEnglish = articlesEnglish.data.Result.Resources.Resource;
            articlesSpanish = articlesSpanish.data.Result.Resources.Resource;

            /*
             * iterate through articles, build article object by interface, and finally
             * insert article and articleCategory
             */
            for (let i = 0; i < totalTopics; i++) {
                //@ts-ignore
                const myHealthFinderId: string = <string>articlesEnglish[i].Id;
                console.log("before awaiting getArticleMyHealthFinderIdByMyHealthFinderId");
                const result = await selectArticleMyHealthFinderIdByMyHealthFinderId(myHealthFinderId);
                const articleMyHealthFinderId = <string>result?.articleMyHealthFinderId ?? undefined;
                //check if article already exists -> use that as article id
                // @ts-ignore
                if (myHealthFinderId !== articleMyHealthFinderId) {
                    //build article by interface Article
                    let article: Article = {
                        articleId: <string>uuid(),
                        // @ts-ignore
                        articleEnglishTitle: articlesEnglish[i].Title,
                        // @ts-ignore
                        articleEnglishDate: convertTimestampToMySQLDate(articlesEnglish[i].LastUpdate),
                        // @ts-ignore
                        articleMyHealthFinderId: articlesEnglish[i].Id,
                        // @ts-ignore
                        articleEnglishImageUrl:formatUrlForSmallImages(articlesEnglish[i].ImageUrl),
                        // @ts-ignore
                        articleEnglishImageAlt: articlesEnglish[i].ImageAlt,
                        // @ts-ignore
                        articleEnglishUrl: articlesEnglish[i].AccessibleVersion,
                        // @ts-ignore
                        articleSpanishTitle: articlesSpanish[i].Title,
                        // @ts-ignore
                        articleSpanishDate: convertTimestampToMySQLDate(articlesSpanish[i].LastUpdate),
                        // @ts-ignore
                        articleSpanishImageUrl:formatUrlForSmallImages(articlesSpanish[i].ImageUrl),
                        // @ts-ignore
                        articleSpanishImageAlt: articlesSpanish[i].ImageAlt,
                        // @ts-ignore
                        articleSpanishUrl: articlesSpanish[i].AccessibleVersion
                    }

                    //log data
                    console.log("inserting article");
                    console.log(article);
                    await insertArticle(article);

                    //build out weak entity for articleCategory using interface
                    let articleCategory: ArticleCategory = {
                        articleCategoryArticleId: <string>article.articleId,
                        articleCategoryCategoryId: <string>category.categoryId
                    }
                    console.log("inserting article category");
                    console.log(articleCategory);
                    await insertArticleCategory(articleCategory);
                } //END if statement to check for duplicate articles
            } //END for loop articles
        } //END for loop categories
    } //END fetchAndInsertAllDateFromApiFunction function
} //END dataDownloader function

dataDownloader().catch(error => console.error(error));