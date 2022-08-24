import React from "react";
import SlideMain from "./slideMain";
import reset from "styled-reset";
import styled from 'styled-components';
import ButtonsMain from "./buttonsMain"

const GlobalStyle = styled.div`
  ${reset}
`

const SwiperStyle = styled.div`
width : 100%;
height: 50px;
position: relative;
background : #c4e1f2;
`
const ButtonStyle = styled.div`
width : 100%;
height: 100px;
display : block;
position: relative;
`

function App() {
  return (
    <>
    <GlobalStyle />
    <SwiperStyle>
    <SlideMain/>
    </SwiperStyle>
    <ButtonStyle>
    <ButtonsMain/>
    </ButtonStyle>
    </>
  )
}

export default App;
