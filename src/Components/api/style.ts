import styled from "styled-components";




export const Container = styled.div`

max-width:980px;
height: 100vh;
display: flex;
flex-direction: column;
margin: auto;


`


export const Header = styled.div`
text-align: center;
background-color: yellow;

`

export const Body = styled.div`
background-color: red;
display: flex;
flex-wrap: wrap;


div{
    display: flex;
    flex-direction: column;
    box-shadow: 1px;

    img{
        max-width: 150px;
    }
}

`