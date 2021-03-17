import React from "react"
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../../utils/http-config";
import {fetchAuth} from "../../../../store/auth";
import _ from "lodash";


export const ArticleSpanish = (props) => {
    const {article} = props;

    const formattedDate = new Date(article.articleSpanishDate).toLocaleDateString("es-ES");

    const saveArticleOnClick = () => {
        httpConfig.post("/apis/saved-article/", {savedArticleArticleId: article.articleId})
            .then(reply => {
                if (reply.status === 200) {
                }
                alert(reply.message)
            })
    }

    const auth = useSelector(state => state.auth ? state.auth : null);
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAuth())
    }

    React.useEffect(initialEffects, [dispatch])

    const categories = useSelector(state => {
        const articleCategories = state.articleCategory.filter(articleCategory => {
            return articleCategory.articleCategoryArticleId === article.articleId
        })
        let category = []
        for (let articleCategory of articleCategories) {
            category.push(state.categories.find(category => category.categoryId === articleCategory.articleCategoryCategoryId))
        }
        return _.uniq(category);
    })
    return (
        <>
            <Container className={"mt-4 py-2 border rounded drop-shadow"}>
                <Row>
                    <Col lg={3} className={"flex-row justify-content-center"}>
                        {/*Image for article*/}
                        <Image rounded fluid className={"article-image"} src={article.articleSpanishImageUrl}
                               alt={article.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h5 className={"pt-2"}>{article.articleSpanishTitle}</h5>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3 py-2"}>
                                <Col className={"col-12"}>
                                    <p>
                                        <strong className={"mr-1"}>Categoria: </strong>
                                        {categories.map(category => category.categorySpanishName)}
                                    </p>
                                </Col>
                                <Col className={"col-12"}>
                                    <p>
                                        Fecha de publicación: {formattedDate}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={"d-flex justify-content-end"}>
                                {auth !== null && <><Button onClick={saveArticleOnClick} className={"px-3 text-sm-left"}>Guardar</Button> </>}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

