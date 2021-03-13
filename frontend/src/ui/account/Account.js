import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {Article} from "../shared/components/Article";
import {ArticleSpanish} from "../shared/components-spanish/ArticleSpanish"
import savedArticle, {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";
import {useDispatch, useSelector} from "react-redux";

library.add(faCamera, faUser);


export const Account = () => {

    // subscribe using useSelector to the slice of store you care about
    const savedArticles = useSelector((state) => state.savedArticle ? state.savedArticle : [])
    const englishSavedArticle = useSelector((state) => state.savedArticle.englishSavedArticle ? state.savedArticle.englishSavedArticle : [])
    const spanishSavedArticle = useSelector((state) => state.savedArticle.spanishSavedArticle ? state.savedArticle.spanishSavedArticle : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);

    // console.log("savedArticles from Redux slice", savedArticles)

    // get access to dispatch from useDispatch()
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllSavedArticles())
    }

    // console.log("in account", englishSavedArticle);

    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])

    return (
        <>
            <h1 className={"mx-3"}>Account</h1>
            <Container as={"section"} fluid className={"p-3"}>
                <Row>
                    <Col md={4} className={"border-right border-dark md-auto"}>
                        <Row className={"justify-content-center align-items-center"}>
                            <FontAwesomeIcon icon={faUser} size="10x" className={"p-4 border rounded-circle"}/>
                            <FontAwesomeIcon icon={faCamera} size="lg" className={"mx-2"}/>
                        </Row>
                        <Row className={"mt-1 justify-content-center"}>
                            <Form className={"px-3"}>
                                <FormGroup>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type={"text"} placeholder={"Name"}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type={"email"} placeholder={"name@your-email.com"}/>
                                </FormGroup>
                                <Form.Group controlId="language-selector">
                                    <Form.Label>Language:</Form.Label>
                                    <Form.Control as="select">
                                        <option>English</option>
                                        <option>Español</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant={"primary"}>Save</Button>
                            </Form>
                        </Row>
                        <Row className={"mt-1"}>
                        </Row>
                    </Col>
                    <Col md={8} className={"pt-3"}>
                        <h3>Search Saved Articles</h3>
                        <Row>
                            <Form inline className={"mx-3"}>
                                <FormGroup className={"container d-flex justify-content-between"}>
                                    <FormControl type="text" placeholder="Search Your Articles" className="mr-md-2"/>
                                    <Button variant="primary" className={"py-sm-2 ml-2"}>Search</Button>
                                </FormGroup>
                            </Form>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        {/*TODO: Map over savedArticles to make <Article/> elements*/}
                                        {/*{console.log("in col Account", englishSavedArticle)}*/}
                                        {
                                            toggle === true && spanishSavedArticle.map(article => <ArticleSpanish
                                                key={article.articleId}
                                                article={article}/>)
                                            ||
                                                toggle === false && englishSavedArticle.map(article => <Article
                                                key={article.articleId}
                                                article={article}/>)
                                        }

                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )
}