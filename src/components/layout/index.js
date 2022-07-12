import React from "react";
import Header from "../header";
import MyProject from "../my-project";
import Sobre from "../sobre";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      <div className="container">
        <MyProject></MyProject>
        <hr /> 
        <Sobre></Sobre>
      </div>
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
