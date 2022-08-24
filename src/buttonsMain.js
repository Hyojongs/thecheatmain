import React from "react";
import styled from 'styled-components';

const MenuStyle = styled.div`
height : 67px;
display: flex;
align-items: center;
justify-content: center;
h1 {
  position : relative;
  margin: 0;
  padding : 0;
  width : 300px;
  height : 100%;
  border-right : 1px solid black;
}
img {
  padding-top: 18px;
}
a {
  width : 100px;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right : 1px solid black;
  hoveer
}
.tasks-left {
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
}
`

function buttonsMain() {
    return (
      <MenuStyle>
        <h1><img src={require("./img/THECHEAT_logo.png")} ></img></h1>
        <a>검색</a>
        <a >피해등록</a>
        <a>홈</a>
        <a>헬프센터</a>
        </MenuStyle>
    )
  }
  
  export default buttonsMain;
  