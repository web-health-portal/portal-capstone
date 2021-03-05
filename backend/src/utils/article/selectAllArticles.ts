import {connect} from "../database.utils";

export async function selectAllArticles() {
    try {
        const mySqlConnection = await connect()
        const query : string = "SELECT BIN_TO_UUID(articleId), articleMyHealthFinderId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl from article";
        const [rows] = await mySqlConnection.execute(query);
        return rows;
    }
    catch(error) {
        console.log(error);
    }
}