import {Request, Response} from 'express';

import {Profile} from "../../utils/interfaces/Profile";
import {deleteSavedArticle} from "../../utils/saved-article/deleteSavedArticle";
import {insertSavedArticle} from "../../utils/saved-article/insertSavedArticle";
import {SavedArticle} from "../../utils/interfaces/SavedArticle";
import {Status} from "../../utils/interfaces/Status";
import {selectSavedArticleByArticleIdAndProfileId} from "../../utils/saved-article/selectSavedArticleByArticleIdAndProfileId";
import {selectArticleByProfileId} from "../../utils/article/selectArticleByProfileId";


export async function savedArticle(request: Request, response: Response) {

    try {
        const {savedArticleArticleId} = request.body;
        // @ts-ignore - mismatch with session in typescript
        const profile: Profile = request.session?.profile
        const savedArticleProfileId = <string>profile.profileId

        const savedArticle: SavedArticle = {
            savedArticleArticleId,
            savedArticleProfileId,
        }

        const select = await selectSavedArticleByArticleIdAndProfileId(savedArticle)
        let result = ""
        // @ts-ignore
        if (select[0]) {
            result = await deleteSavedArticle(savedArticle)
        } else {
            result = await insertSavedArticle(savedArticle)
        }

        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch (error) {
        console.log(error);
    }
}

export async function getSavedArticles(request: Request, response: Response) {
    try {
        // @ts-ignore - mismatch with session in typescript
        const profile: Profile = request.session?.profile
        // @ts-ignore
        const data = await selectArticleByProfileId(profile.profileId);
        const status: Status = {
            status: 200,
            message: null,
            data: data,
        };

        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

