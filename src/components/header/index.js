import React, { useEffect } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import Menu from "../menu";
import SocialButtons from "../social-buttons";
import Titles from "../menu/titles/index";

const Header = () => {


  return ( 
    <header>
      <div className="header">
        <Menu></Menu>
      </div>        
      <Titles></Titles>
      <SocialButtons></SocialButtons>
    </header>
  );
};

export default Header;
