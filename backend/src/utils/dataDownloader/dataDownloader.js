"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
/*
Initial ideas:
GET all English categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category
GET all Spanish categories https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=category
GET all English topics https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=topic
GET all Spanish topics https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=topic
Use those topic IDs and category IDs to GET all the topics and categories by ID for each language. It might be easier to insert all of the categories this way, but there is a better way to GET all topics.
The articles are essentially topics here and you can get them by data.Result.Resources. This is where the array of objects containing our articles lives. You can all GET all by leaving off the topicID in the request URL like this: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en
Request this for both both languages and merge them?
 */
//handle categories first
//build insert
function dataDownloader() {
    function main() {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetchAllCategories()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return main();
    //could be download articles
    //     async function downloadArticles(keyword: string) {
    //         try {
    //             //set params for the query string
    //             let language: string = "en";
    //
    //             //check how many words in keyword: if more than one word, format string appropriately.
    //             if (keyword.split(" ").length > 1) {
    //                 keyword = keyword.split(" ").join("%20");
    //             }
    //             //checking keywords are correct
    //             console.log(keyword);
    //
    //             /* GET ENGLISH ARTICLE DATA */
    //             console.log("BEFORE ENGLISH ARTICLE REQUEST", keyword);
    //             //TODO: add if/ternary to check if undefined first
    //             const articleEnglishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`);
    //             console.log("AFTER ENGLISH ARTICLE REQUEST", keyword);
    //             //extract array of objects containing English articles
    //             console.log("BEFORE ASSIGNING ENGLISH RESOURCE ARRAY", keyword);
    //             const englishArticles = articleEnglishRequest?.data.Result.Resources.Resource;
    //             //check data returned from API
    //             // console.log(englishArticles);
    //
    //             /* GET SPANISH ARTICLE DATA */
    //             //switch language to get spanish articles
    //             language = "es";
    //             //extract array of objects containing Spanish articles
    //             console.log("BEFORE SPANISH ARTICLE REQUEST", keyword);
    //             //TODO: add if/ternary to check if undefined first
    //             const articleSpanishRequest = await axios(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=${language}&keyword=${keyword}`)
    //             console.log("AFTER ENGLISH ARTICLE REQUEST", keyword);
    //
    //             console.log("BEFORE ASSIGNING SPANISH RESOURCE ARRAY", keyword);
    //             const spanishArticles = articleSpanishRequest.data.Result.Resources.Resource;
    //             console.log("REQUESTS COMPLETE", keyword);
    //
    //             //iterate over articles and set corresponding attributes of interface object
    //             for (let i = 0; i < spanishArticles.length; ++i) {
    //                 if (spanishArticles[i] === 'undefined' || englishArticles[i] === 'undefined') {
    //                     //article is undefined: continue loop at next step
    //                     continue;
    //                 }
    //                 const article: Article = {
    //                     articleId: null, //null for now: UUID will be set by the insertArticle function
    //                     articleEnglishTitle: englishArticles[i].Title,
    //                     articleEnglishDate: englishArticles[i].LastUpdate,
    //                     articleEnglishImageUrl: englishArticles[i].ImageUrl,
    //                     articleEnglishImageAlt: englishArticles[i].ImageAlt,
    //                     articleEnglishUrl: englishArticles[i].AccessibleVersion,
    //                     articleSpanishTitle: spanishArticles[i].Title,
    //                     articleSpanishDate: spanishArticles[i].LastUpdate,
    //                     articleSpanishImageUrl: spanishArticles[i].ImageUrl,
    //                     articleSpanishImageAlt: spanishArticles[i].ImageAlt,
    //                     articleSpanishUrl: spanishArticles[i].AccessibleVersion
    //                 }
    //                 // console.log(article);
    //                 //insert article into database using MySql enabled function
    //                 await insertArticle(article);
    //             }
    //         } catch
    //             (error) {
    //             throw new Error(error);
    //         }
    //     }
    // }
    function fetchAllCategories() {
        return __awaiter(this, void 0, void 0, function () {
            var englishCategories, spanishCategories, totalCategories, i, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"]('https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=en&type=category')];
                    case 1:
                        englishCategories = _a.sent();
                        return [4 /*yield*/, axios_1["default"]('https://health.gov/myhealthfinder/api/v3/itemlist.json?lang=es&type=category')];
                    case 2:
                        spanishCategories = _a.sent();
                        totalCategories = englishCategories.data.Result.Total;
                        // console.log(englishCategories.data.Result.Items);
                        // console.log(englishCategories.data);
                        for (i = 0; i < totalCategories; i++) {
                            category = {
                                categoryId: null,
                                categoryEnglishName: englishCategories.data.Result.Items.Item[i].Title,
                                categorySpanishName: spanishCategories.data.Result.Items.Item[i].Title
                            };
                            console.log(category);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
}
dataDownloader()["catch"](function (error) { return console.error(error); });