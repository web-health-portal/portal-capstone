export interface PartialProfile {
    profileId: string|null,
    profileFirstName: string,
    profileLastName: string,
    profileLanguage: string,
    profileEmailAddress: string,
    profileImage: string|null
}


export interface Profile {
    profileId: string|null,
    profileFirstName: string,
    profileLastName: string,
    profileLanguage: string,
    profileEmailAddress: string,
    profileActivationToken: string|null,
    profileHash: string,
    profileImage: string|null
}