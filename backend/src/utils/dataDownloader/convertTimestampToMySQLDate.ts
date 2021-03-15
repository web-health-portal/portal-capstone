export default function convertTimestampToMySQLDate(timestamp: number) {
    //MySQL retrieves and displays DATETIME values in 'YYYY-MM-DD hh:mm:ss' format.
    let date = new Date(timestamp * 1000);
    //build date time string to be a format that MySQL expects
    let dateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

    return dateTime;
}