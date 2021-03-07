import {connect} from "../database.utils";
import {Article} from "../interfaces/Article";

export async function getArticlesByProfileId(SavedArticleBySavedArticleProfileId: string) : Promise<string>{
    try {
        const mySqlConnection = await connect();
        const query : string = `INSERT into article (articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl)
            VALUES((UUID_TO_BIN(${uuidv4()}), :articleEnglishId, :articleEnglishTitle, :articleEnglishDate, :articleEnglishImageUrl, :articleEnglishImageAlt, :articleSpanishTitle, :articleSpanishDate, :articleSpanishUrl)`;
        const [rows] = await mySqlConnection.execute(query, article);
        console.log();
        console.log("article successfully inserted");
        return "article successfully inserted";
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}