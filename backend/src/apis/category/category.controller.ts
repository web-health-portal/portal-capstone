import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllCategories} from "../../utils/category/selectAllCategories";
import {selectCategoryByCategoryId} from "../../utils/category/selectCategoryByCategoryId";

export async function getAllCategoryController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllCategories()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return (response.json({status: 500, data: null, message: error}))
    }
}

export async function getCategory(request: Request, response: Response): Promise<Response> {
    try {
        const {categoryId} = request.params;
        const mySqlResult = await selectCategoryByCategoryId(<string>categoryId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))

    }
}



