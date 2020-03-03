import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width:  ${({ theme }) => theme.mobile};
    margin: 0 auto;
    padding: 0.5rem;      
    text-align: ${props => props.textCenter ? "center" : ""};
    padding-top: ${props => props.pt1 ? "5rem" : "1rem"};
    display:flex;
    flex-direction: column;
`;

export const InputButton = styled.input`
    trasition: 0.3s ease-in-out;
    background: ${({ theme }) => theme.primaryHover};
    color: #fafafa;
    padding: 1rem;
    border: none;
    border-radius: 18px;
    cursor:pointer;
    opacity: 0.9;
    &:hover{
        opacity: 1;
        trasition: 0.3s opacity ease-in-out;
    }
    &:focus{    
        outline: none;        
    }


`;