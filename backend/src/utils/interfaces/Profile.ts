export interface PartialProfile {
    profileId: string,
    profileFirstName: string,
    profileLastName: string,
    profileLanguage: string,
    profileEmailAddress: string,
    profileImage: string|null
}


export interface Profile {
    profileId: string,
    profileFirstName: string,
    profileLastName: string,
    profileLanguage: string,
    profileEmailAddress: string,
    profileActivationToken: string|null,
    profileHash: string,
    profileImage: string|null
}