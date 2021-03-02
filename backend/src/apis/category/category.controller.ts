import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {getCategoryByCategoryId} from "../../utils/category/getCategoryByCategoryId";

// @ts-ignore
export async function putCategoryController(request: Request, response: Response): Promise<Response> {
    try {
        const {categoryId} = request.params
        const {categoryEnglishName, categorySpanishName} = request.body
        //@ts-ignore mismatch with express session typing

    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

    export async function getCategory(request: Request, response: Response): Promise<Response> {
        try {
            const {categoryId} = request.params;
            const mySqlResult = await getCategoryByCategoryId(<string>categoryId);
            const data = mySqlResult ?? null
            const status: Status = {status: 200, data, message: null}
            return response.json(status)

        } catch (error) {
            return (response.json({status: 400, data: null, message: error.message}))

        }
    }
