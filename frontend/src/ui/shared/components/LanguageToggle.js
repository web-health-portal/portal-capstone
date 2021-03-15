import {ButtonGroup, Container, Row, ToggleButton} from "react-bootstrap";
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setToggle} from "../../../store/toggle";


export const LanguageToggle = () => {
    const [radioValue, setRadioValue] = useState('1');

    const toggle = useSelector((state) => state.toggle ? state.toggle : false);

    //get access to dispatch from useDispatch()
    const dispatch = useDispatch();
    const initialEffects = () => {
        dispatch(setToggle(false))
    }

    React.useEffect(initialEffects, [dispatch])

    const radioButtons = [
        {name: 'English', value: '1'},
        {name: 'Español', value: '2'},
    ];

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center py-2 bg-dark"}>
                    <ButtonGroup toggle>
                        {radioButtons.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="primary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => {
                                    dispatch(setToggle(!toggle))
                                    return setRadioValue(e.currentTarget.value)
                                }}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Row>
            </Container>
        </>
    )
}
