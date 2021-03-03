import {Request, Response} from "express";
import {insertArticle} from "../../utils/interfaces/insertArticle";
import {selectAllArticles} from "../../utils/interfaces/selectAllArticles";
import {getPopularArticles} from "../../utils/interfaces/getPopularArticles";
import {getSavedArticlesBySavedArticleProfileId} from "../../utils/interfaces/getSavedArticlesBySavedArticleProfileId";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {getPartialProfileByProfileId} from "../../utils/profile/getPartialProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";


export async function getAllArticleController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllArticles()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

export async function


export async function getArticle(request : Request, response: Response): Promise<Response>{
    try {
        const {articleId} = request.params;
        const mySqlResult = await selectArticlesbySavedArticleProfileId(<string>articleId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return (response.json({status:400, message: null, data}))
    }
}