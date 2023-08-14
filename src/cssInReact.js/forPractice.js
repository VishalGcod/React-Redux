import React from "react";
import { styled } from "styled-components";

const DivCover=styled.div`
display:grid;
`;
const DivOne=styled.div`
grid-area:divone;
`;
const DivTwo=styled.div`
grid-area:divtwo;
`;

export const GridsOverlap=()=>{
    return(
        <DivCover>
            <DivOne></DivOne>
            <DivTwo></DivTwo>
        </DivCover>
    )
} 

