import {Request, Response} from "express";
import {selectAllArticles} from "../../utils/article/selectAllArticles";
import {Status} from "../../utils/interfaces/Status";
import {selectArticleByProfileId} from "../../utils/article/selectArticleByProfileId";
import {selectRandomArticles} from "../../utils/article/selectRandomArticles";
import {selectArticleByArticleId} from "../../utils/article/selectArticleByArticleId";
import {selectArticleByCategoryId} from "../../utils/article/selectArticleByCategoryId";
import {selectArticlesBySearchKeyword} from "../../utils/article/selectArticlesBySearchKeyword";


export async function getAllArticleController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllArticles()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getArticleByArticleId(request: Request, response: Response): Promise<Response | void> {

    try {
        const {articleId} = request.params
        const data = await selectArticleByArticleId(articleId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getArticleByProfileId(request: Request, response: Response): Promise<Response | void> {

    try {
        // @ts-ignore
        const profileId = <string>request.session?.profile.profileId
        const data = await selectArticleByProfileId(profileId);
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getArticleByCategoryId(request: Request, response: Response): Promise<Response | void> {

    try {
        const {categoryId} = request.params
        const data = await selectArticleByCategoryId(categoryId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getRandomArticles(request: Request, response: Response): Promise<Response | void> {
    try {
        const data = await selectRandomArticles();
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function getArticlesBySearchKeyword(request: Request, response: Response): Promise<Response | void> {
    try {
        const {keyword} = request.params;
        const data = await selectArticlesBySearchKeyword(keyword);
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

//
// export async function getArticle(request : Request, response: Response): Promise<Response>{
//     try {
//         const {articleId} = request.params;
//         const mySqlResult = await selectArticlesBySavedArticleProfileId(<string>articleId);
//         const data = mySqlResult ?? null
//         const status: Status = {status: 200, data, message: null}
//         return response.json(status)
//
//     } catch (error) {
//         return (response.json({status:400, message: null, data}))
//     }
// }