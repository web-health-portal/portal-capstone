export default function parseUrl(url: string): string {
    //small img url: https://health.gov/sites/default/files/styles/myhf_topics_header_image/public/2020-01/ppqd.jpg
    //large img url: https://health.gov/sites/default/files/2020-01/ppqd.jpg
    let splitUrl = url.split("/");
    let urlSlugs = splitUrl.slice(-2, -1);
    console.log(urlSlugs);

    return "";
}