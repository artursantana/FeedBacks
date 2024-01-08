import styled from "styled-components";




export const Container = styled.div`

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,0.1);

`




export const SubConatiner = styled.div`

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
color: black;
border-radius: 8px;
padding: 15px;
width: 500px;
height: 300px;
overflow: auto;


`

export const ButtonModal = styled.button`

border-radius: 15%;
background-color: green;
color: white;
padding: 15px;


`