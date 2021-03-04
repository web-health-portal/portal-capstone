import {connect} from "../database.utils";
import {Article} from "../interfaces/Article";

export async function selectAllArticles() {
    try {
        const mySqlConnection = await connect()
        const query : string = "SELECT BIN_TO_UUID(articleId) articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl) :articleEnglishId, :articleEnglishTitle, :articleEnglishDate, :articleEnglishImageUrl, :articleEnglishImageAlt, :articleSpanishTitle, :articleSpanishDate, :articleSpanishUrl";
        const [rows] = await mySqlConnection.execute(query, Article());
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}