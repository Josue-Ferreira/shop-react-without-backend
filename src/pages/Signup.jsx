import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button,
    Alert
} from 'reactstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h2`
    text-align: center;
    margin: 20px;
`;

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setWarning(true);
        // const responseDB = await fetch('/users',{
        //     method: "POST",
        //     headers:{
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify({"first_name": firstName, "last_name": lastName, "email": email, "password": password})
        // });
        // if(responseDB.status == 200){
        //     setWarning(false);
        //     navigate('/sign-up/success');
        // }
        // else{
        //     setWarning(true);
        // }
    }

    return (
        <>
            <NavigationBar />
            <Form
                style={{
                    width: '50vw',
                    margin: 'auto'}}

                onSubmit={handleSubmit}
            >
                <Title>Create an account</Title>
                {
                    warning && (
                        <Alert color="danger">
                            Back-end server is not reachable, sorry !
                        </Alert>
                    )
                }
                <FormGroup >
                    <Label for="firstname">
                    Firstname
                    </Label>
                    <Input
                    id="firstname"
                    name="firstname"
                    placeholder="with a placeholder"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">
                    Lastname
                    </Label>
                    <Input
                    id="lastname"
                    name="lastname"
                    placeholder="with a placeholder"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                    Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                </FormGroup>
                <Button type='submit' color='primary' >
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Signup;