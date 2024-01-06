
import styled from "styled-components"



export const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin: 20px;
overflow-y: scroll;
box-shadow: 1px 10px 20px black;

div{
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    text-align: center;
    margin: 15px;

    img{
        margin: auto;
        max-width: 150px;
    }

    .ButtonValue{
        margin-top: 10px;
      padding: 15px;
      text-align: center;
    }
}

`