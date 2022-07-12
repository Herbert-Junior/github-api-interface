import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

import './global/general.css';

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          <Profile />
          <Repositories />
        </>
      ) : (
        false
      )}
    </Layout>
  );
};

export default App;
