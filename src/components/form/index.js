import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Container, InputButton } from '../style';
import Pdf from '../pdf';

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
    cursor: text;
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
    margin: 1rem 0 1rem 0;
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

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    const [dog, setDog] = useState({
        name: "",
        race: "",
        disappearance: "",
        description: "",
    })
    const [display, setDisplay] = useState(false);

    const onSubmit = (data, e) => {
        setDog({
            name: data.name,
            race: data.race,
            disappearance: data.disappearance,
            description: data.description,
        })
        e.target.reset();
    };


    if (display === true) {
        return <Pdf name={dog.name} description={dog.description} />
    }

    return (
        <Container pt1>
            <Styleform onSubmit={handleSubmit(onSubmit)}>

                <Label>Qual o nome do seu cachorro?</Label>
                <Styleinput type="text" name="name" ref={register({ required: true })} />
                {errors.name && <Span>This field is required</Span>}

                <Label>Qual a raça do seu cachorro?</Label>
                <Styleinput type="text" name="race" ref={register({ required: true })} />
                {errors.race && <Span>This field is required</Span>}

                <Label>Descreva seu cachorro</Label>
                <Styleinput type="text" name="description" ref={register({ required: true })} />
                {errors.description && <Span>This field is required</Span>}


                <Label>Local do desaparecimento</Label>
                <Styleinput type="text" name="disappearance" ref={register({ required: true })} />
                {errors.disappearance && <Span>This field is required</Span>}

                <Label>Data do desaparecimento</Label>
                <StyleDate type="date" name="date" ref={register({ required: true })} />
                {errors.date && <Span>This field is required</Span>}

                <InputButton type="submit" value="enviar" />
            </Styleform>
            <button onClick={() => setDisplay(true)}>Gerar PDf</button>

        </Container>

    );
}

export default Form;
