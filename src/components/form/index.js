import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Container, InputButton } from '../style';

import styled from 'styled-components';

const Styleform = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Styleinput = styled.input`
    border-top: 0;
    border-right: 0;
    border-left: 0;  
    height: 2.5rem;
    border-radius: 8px;
    margin: 1rem 0 1rem 0;
    padding: 1rem; 
    &:focus{    
        outline: none;  
        background: #FAFAFA;      
    } 
    &::selection{
        background: #FAFAFA;      

    }
`;
const StyleDate = styled(Styleinput)`
    appearance: none;
    background: transparent;
    font-size: 1.5rem;
    padding: 8px;
    color: gray;
    ::-webkit-datetime-edit-text { padding: 0 2rem ; }
    ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
    ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
    ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-calendar-picker-indicator { background: transparent;}

`;

const Span = styled.span`
    color: #FAFAFA;
    background: #84142d;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    opacity: 0.7;
`;

const Label = styled.label`
    color: #000;
    font-weight: bold;
    opacity: 0.7;
    
`;

const Form = (props) => {
    const { register, handleSubmit, reset, watch, errors } = useForm();
    const [dog, setDog] = useState({
        race: "",
        description: "",
    })

    const onSubmit = (data, e) => {
        setDog({
            race: data.name,
            description: data.description
        })
        e.target.reset();
    };

    const test = () => {
        console.log(dog.race);
        console.log(dog.description);
    }


    // console.log(watch('name')) // watch input value by passing the name of it



    return (
        <Container pt1>
            <Styleform onSubmit={handleSubmit(onSubmit)}>
                <Label>Qual a raça do seu cachorro?</Label>
                <Styleinput type="text" name="name" ref={register({ required: true })} />
                {errors.name && <Span>This field is required</Span>}
                <Label>Descreva seu cachorro</Label>
                <Styleinput type="text" name="description" ref={register({ required: true })} />
                {errors.description && <Span>This field is required</Span>}

                <Label>Data do desaparecimento</Label>
                <StyleDate type="date" name="" ref={register({ required: true })} />
                {errors.description && <Span>This field is required</Span>}




                <InputButton type="submit" value="enviar" />
            </Styleform>
            {/* <button onClick={test}>ok</button> */}
        </Container>

    );
}

export default Form;
