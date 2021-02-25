import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {getPartialProfileByProfileId} from "../../utils/profile/getPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {getProfileByProfileId} from "../../utils/profile/getProfileByProfileId";
import {updateProfileByProfileId} from "../../utils/profile/updateProfileByProfileId";

export async function putProfileController(request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params
        const {profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage} = request.body
        const profileIdFromSession: string = <string>request.session?.profile.profileId

        const performUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
            const previousProfile: Profile = await getPartialProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfileByProfileId(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? performUpdate({
                profileId,
                profileFirstName,
                profileLastName,
                profileLanguage,
                profileEmailAddress,
                profileImage
            })
            : updateFailed("you are not allowed to preform this action")
    } catch (error) {
        return response.json({status: 400, data: null, message: error.message})
    }
}


export async function getProfile(request: Request, response: Response): Promise<Response> {
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
