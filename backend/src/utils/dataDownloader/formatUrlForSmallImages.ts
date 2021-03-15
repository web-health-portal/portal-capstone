export default function formatUrlForSmallImages(url: string): string {
    //Function takes in a URL and formats it so we can use the smaller image from MHF API
    //FORMATS:
        //small img url: https://health.gov/sites/default/files/styles/myhf_topics_header_image/public/2020-01/ppqd.jpg
        //large img url: https://health.gov/sites/default/files/2020-01/ppqd.jpg
    //NOTE: We want the url to be formatted as small url

    //split the url into an array of strings
    let splitUrl = url.split("/");
    //grab last two elements in path of url
    let urlSlugs = splitUrl.slice(splitUrl.length - 2, splitUrl.length);
    let baseUrl = "https://health.gov/sites/default/files/";
    //return formatted string
    return `${baseUrl}/styles/myhf_topics_header_image/public/${urlSlugs[0]}/${urlSlugs[1]}`;
}