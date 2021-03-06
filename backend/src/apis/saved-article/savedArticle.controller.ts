import {Request, Response} from 'express';
//WHAT AM I DOING WHAT IS HAPPENING WHAT WHAT WHAT///

import {Profile} from "../../utils/interfaces/Profile";
import {Article} from "../../utils/interfaces/Article";
import {deleteSavedArticle} from "../../utils/saved-article/deleteSavedArticle";
import {insertSavedArticle} from "../../utils/saved-article/insertSavedArticle";
import {SavedArticle} from "../../utils/interfaces/SavedArticle";


export async function savedArticle(request: Request, response: Response) {

    try {
        const {savedArticle} = request.body;
        const savedArticle: Article = request.session?.article
        const profile: Profile = request.session?.profile
        const savedArticleProfileId = profile.profileId

        const savedArticle: SavedArticle = {
            savedArticleArticleId,
            savedArticleProfileId,
        }
        const select = await savedArticleIdId(save)
        if (select[0]){
            const result = await deleteSavedArticle(save)
        }else{
            const result = await insertSavedArticle(save)
        }

        const status: Status = {
            status: 200,
            message: 'Article successfully saved',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.log(error);
    }
}
