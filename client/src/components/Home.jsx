import React from 'react'
import { Link } from "react-router-dom"
import { Alert, Badge, ListGroup } from "react-bootstrap"

export default function Home() {
    const services = [
        { name: "Sum", path: "/sum" }
    ]
    return (
        <>
            <Alert variant="primary" >Hello to sj-server-client(saurabhjainwal-server-client) package</Alert>
            <br />
            <Badge bg="danger" >Services</Badge>
            <br />
            <br />
            <ListGroup defaultActiveKey="#link1">
                {
                    services.map(e => (
                        <ListGroup.Item action key={e.name} >
                            <Link to={e.path} >
                                {e.name}
                            </Link>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </ >
    )
}
