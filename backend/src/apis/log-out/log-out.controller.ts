import { Status } from '../../utils/interfaces/Status';
import {Request, Response} from "express";

export function logOutController(request: Request, response : Response) {
    let status : Status = {status: 200, message: "sign out successful", data: null};
    const {session}  = request;

    const executeLogOut = () => {
        // @ts-ignore: broken typing is requiring a callback function that is optional.
        session?.destroy()

    };

    const logOutFailed = () => {
        status.status = 400;
        status.message = "you are not signed in";
    };

    session ? executeLogOut() : logOutFailed();

    return response.json(status)
}