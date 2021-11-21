import React from 'react'
import { useState } from 'react'
import { Form, Button } from "react-bootstrap"

export default function Sum() {
    const [state, setState] = useState({
        number1: 0,
        number2: 0
    })
    const onChangeHandler = (event) => {
        event.preventDefault()
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        try
        {
            const response = await fetch("http://localhost:9000/sum", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    num1: state.number1,
                    num2: state.number2
                })
            })
            const result = await response.text()
            console.log(result)
        } catch (error)
        {
            console.error(error)
        }
    }

    return (
        <Form onSubmit={submitHandler} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="number1" name="number1" onChange={onChangeHandler} value={state.number1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="number2" name="number2" onChange={onChangeHandler} value={state.number2} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
