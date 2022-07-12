import React from "react";
import useGithub from "../../hooks/github-hooks";

function SocialButtons (){

    const { getUser } = useGithub();
    const usernameForSearch = "Herbert-Junior";
  
    const submitGetUser = () => {
      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    };
    return (
        <div className="social-media">
            <a href="https://www.linkedin.com/in/herbert-roberti-71291740" target="_blank" rel='noreferrer'>Linkedin</a>            
            <a onClick={submitGetUser} href="#github" rel='noreferrer'>Github</a>
        </div>
    )
}

export default SocialButtons;