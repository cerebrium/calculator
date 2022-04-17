import styled from "styled-components";


export const Input = styled.input`
    width: 80%;
    height: 75px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    text-align: left;
    padding: 10px;
    margin: 10px;
    :hover {
        transition: .5s;
        background-color: rgb(57, 62, 70, .1);
    }
    :focus {
        border: 1px solid #222831;
        background-color: rgb(57, 62, 70, .1);
        outline: none;
    }
`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #222831;
    color: #EEEEEE;
    font-size: 20px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    :hover {
        transition: .3s;
        box-shadow: 1px 1px 3px rgba(5, 5, 0, 0.5);
    }
    cursor: pointer;
`;
