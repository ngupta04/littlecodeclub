import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';


export const Home = () => {
    
    const defaultObj:{
        first: string; last: string; school: string;    
    } = {
        first: '', last: '', school: ''
    }

    const [info, setInfo] = useState(defaultObj);

    function handleFnameChange(e: React.ChangeEvent<HTMLInputElement>){
        setInfo({...info, first: e.target.value});    
    }

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Header> Little Code Club </Card.Header>
        <Card.Body>
            <Card.Title>Projects</Card.Title>
            <Card.Text>
            Search for your child's projects.
            </Card.Text>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="fName" placeholder="First" value={info.first} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInfo({...info, first: e.target.value})}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lName" placeholder="Last" value={info.last}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>School</Form.Label>
                    <Form.Control as="select" value={info.school} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant="primary">Find</Button>
        </Card.Body>
    </Card>    
    );
};