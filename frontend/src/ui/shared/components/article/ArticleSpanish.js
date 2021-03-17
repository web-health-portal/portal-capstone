import React from "react"
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../../utils/http-config";
import {fetchAuth} from "../../../../store/auth";


export const ArticleSpanish = (props) => {

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

    const formattedDate = new Date(article.articleSpanishDate).toDateString();
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
                        {/*<Image rounded fluid src={article.articleSpanishImageUrl}*/}
                        <Image rounded fluid src={article.articleSpanishImageUrl}
                               alt={article.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h5>{article.articleSpanishTitle}</h5>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    <strong>Categoria:</strong>
                                        {categories.map(category => category.categorySpanishName)}
                                </p>
                                <p>
                                    Fecha de publicación: {formattedDate}
                                </p>
                            </Row>
                            <Row>
                                {auth !== null && <><Button onClick={saveArticleOnClick} className={"px-3 text-sm-left"}>Guardar</Button> </>}
                                {/*<Link to={"#"} className={"px-3 text-sm-left"}>Salvar</Link>*/}
                                {/*<Link to={"#"} className={"px-3 text-sm-left"}>Borrar</Link>*/}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

