import {Request, Response} from "express";
import { Category} from "../../utils/interfaces/category";
import {getPartialProfileByProfileId} from "../../utils/profile/getPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {getProfileByProfileId} from "../../utils/profile/getProfileByProfileId";
import {updateProfileByProfileId} from "../../utils/profile/updateProfileByProfileId";

export async function putCategoryController(request: Request, response: Response): Promise<Response> {
    try {
        const {categoryId} = request.params
        const {profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage} = request.body
        //@ts-ignore mismatch with express session typing
        const profileIdFromSession: string = <string>request.session?.profile.profileId
    }



export async function getCategory(request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await getProfileByProfileId(<string>profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))

    }

}