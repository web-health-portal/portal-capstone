import {Schema} from "express-validator";

export const savedArticleValidator: Schema = {

    savedArticleArticleId: {
        isUUID: {
            errorMessage: 'please provide a valid savedArticleArticleId'
        }
    },
    savedArticleProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid savedArticleProfileId'
        }
    }
}