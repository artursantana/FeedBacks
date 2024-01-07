
import styled from "styled-components"



export const Body = styled.div`
margin: 20px;

.divMap{
    display: flex;
    box-shadow: 1px 1px 10px black;
    border-radius: 15px;
    text-align: center;
    margin: 15px;
    height: 150px;


    img{
        margin: auto;
        height: 150px;
        left: 0;
    }

    .divTitle{
        
        font-weight: bolder;
        text-align: left;
        max-width: 250px;
        h1{
            color: #002D62;
        }
    }


    .divButton{
        display: flex;
        height: 150px;
        position: relative ;
        .ButtonValue{
            width: 150px;
            height: 25px;
            position: absolute;
            bottom: 0;
            border: none;
            background: none;
            cursor: pointer;
          
        }
    }
}

`