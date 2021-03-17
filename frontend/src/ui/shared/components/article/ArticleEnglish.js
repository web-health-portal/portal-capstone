import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import savedArticle from "../../../../store/savedArticle/savedArticle";
import {httpConfig} from "../../utils/http-config";
import {getAllEnglishSavedArticles} from "../../../../store/savedArticle/englishSavedArticle";
import {fetchAuth} from "../../../../store/auth";


export const ArticleEnglish = (props) => {

    const {article} = props;


    const saveArticleOnClick = () => {
        httpConfig.post("/apis/saved-article/", {savedArticleArticleId: article.articleId})
            .then(reply => {
                if (reply.status === 200) {
                }
                alert(reply.message)
            })
    }

    const auth = useSelector(state => state.auth ? state.auth : null);
    console.log(auth)
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAuth())
    }

    React.useEffect(initialEffects,[dispatch])

    const formattedDate = new Date(article.articleEnglishDate).toDateString();
    const categories = useSelector(state => {
        const articleCategories = state.articleCategory.filter(articleCategory => {
            return articleCategory.articleCategoryArticleId === article.articleId
        })
        let category = []
        for (let articleCategory of articleCategories) {
            category.push(state.categories.find(category => category.categoryId === articleCategory.articleCategoryCategoryId))
        }
        return category
    })
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={article.articleEnglishImageUrl}
                               alt={article.articleEnglishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleEnglishUrl} target="_blank" rel={"noreferrer"}>
                                        <h5>{article.articleEnglishTitle}</h5>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    <strong>Categories:</strong>
                                    {categories.map(category => category.categoryEnglishName)}
                                </p>
                                <p>
                                    Date Published: {formattedDate}
                                </p>
                            </Row>
                            <Row>
                                {auth !== null && <><button onClick={saveArticleOnClick} className={"px-3 text-sm-left"}>Save</button> </>}
                                {/*<Link to={"#"} className={"px-3 text-sm-left"}>Save</Link>*/}
                                {/*<Link to={"#"} className={"px-3 text-sm-left"}>Remove</Link>*/}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

