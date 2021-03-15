import {httpConfig} from "../utils/httpConfig";

export const filterArticlesByLanguage = async (language, data) => {
    //ensure that the language passed in has an upper case letter for first letter
    language = language.charAt(0).toUpperCase() + language.slice(1)
    //map through data from http request
    const articles = data.map((article) => {
        let articleByLanguage = {articleId: article['BIN_TO_UUID(articleId)'],};
        //iterate over keys in object
        for (const articleKey in article) {
            //check the key for the language given
            if (articleKey.includes(language)) {
                articleByLanguage[articleKey] = article[articleKey];
            }
        }
        return articleByLanguage;
    })
    // console.log(`${language} article`, articles);
    return articles;
}
