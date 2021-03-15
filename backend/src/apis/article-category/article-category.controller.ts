import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectArticleCategoryByArticleId} from "../../utils/articleCategory/selectArticleCategoryByArticleId";
import {selectArticleCategoryByCategoryId} from "../../utils/articleCategory/selectArticleCategoryByCategoryId";

export async function getArticleCategoryByArticleId(request: Request, response: Response): Promise<Response | void> {

    try {
        const     {articleId} = request.params
        const data = await selectArticleCategoryByArticleId(articleId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

export async function getArticleCategoryByCategoryId(request: Request, response: Response): Promise<Response | void> {

    try {
        const     {categoryId} = request.params
        const data = await selectArticleCategoryByCategoryId(categoryId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}
