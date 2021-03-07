import {connect} from "../database.utils";
import {Article} from "../interfaces/Article";

export async function getArticlesByProfileId(profileId: string) : Promise<string>{
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleId), articleMyHealthFinderId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl from article";

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