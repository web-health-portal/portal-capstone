import {connect} from "../database.utils";
import {Article} from "../interfaces/Article";
import uuid from 'uuid';


export async function insertProfile(article: Article) : Promise<string>{
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        // const query : string = `INSERT into article (articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl)
        //     VALUES((UUID_TO_BIN($`uuid.v4()`), :articleEnglishId, :articleEnglishTitle, :articleEnglishDate, :articleEnglishImageUrl, :articleEnglishImageAlt, :articleSpanishTitle, :articleSpanishDate, :articleSpanishUrl)`;
        // const [rows] = await mySqlConnection.execute(query, article);
        return "profile successfully inserted";
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}