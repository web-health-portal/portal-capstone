import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllCategories} from "../../utils/category/selectAllCategories";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {getPartialProfileByProfileId} from "../../utils/profile/getPartialProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";


export async function getAllCategoryController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllCategories()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}

// export async function postCategoryController(request: Request, response: Response) : Promise<Response>{
//     try {
//         const {categoryId} = request.params
//         const {categoryEnglishName, categorySpanishName} = request.body
//         const categoryIdFromSession: string = <string>request.session?.profile.categoryId
//
//         const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
//             const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.categoryId)
//             const newProfile: Profile = {...previousProfile, ...partialProfile}
//             await updateProfile(newProfile)
//             return response.json({status: 200, data: null, message: "Profile successfully updated"})
//         }
//
//         const updateFailed = (message: string) : Response => {
//             return response.json({status: 400, data: null, message})
//         }
//
//         return categoryId === profileIdFromSession
//             ? preformUpdate({categoryId, categoryEnglishName, categorySpanishName})
//             : updateFailed("you are not allowed to preform this action")
//     } catch (error) {
//         return response.json( {status:400, data: null, message: error.message})
//     }
// }

// export async function getCategory(request: Request, response: Response): Promise<Response> {
//         try {
//             const {categoryId} = request.params;
//             const mySqlResult = await getCategoryByCategoryId(<string>categoryId);
//             const data = mySqlResult ?? null
//             const status: Status = {status: 200, data, message: null}
//             return response.json(status)
//
//         } catch (error) {
//             return (response.json({status: 400, data: null, message: error.message}))
//
//         }
//     }
