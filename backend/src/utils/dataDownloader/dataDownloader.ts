import axios from "axios";


function dataDownloader(): Promise<any> {
    async function main() {
        try {
            await downloadUsers();
        } catch (error) {
            console.error(error)
        }
    }

    return main();

    //could be download articles
    async function downloadUsers() {
        try {
            const userRequest = await axios("https://jsonplaceholder.typicode.com/users");
            const users = userRequest.data;
            console.log(users);
        } catch (error) {
            throw new Error(error);
        }
    }
}

dataDownloader().catch(error => console.error(error));

