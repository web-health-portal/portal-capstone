import {Schema} from "express-validator";

//both primary keys??
export const savedArticleValidator: Schema = {

    savedArticleArticleId: {
        isUUID: {
        }
    }
    savedArticleProfileId: {
        isUUID: {
        }
    }
}