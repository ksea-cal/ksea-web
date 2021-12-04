import React from "react";
import kseaGroupPhoto from "../../assets/wallpaper/wall_paper.png";
import styled from "styled-components";
import "../../index.css";

const StyledFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 50%;
    height: auto;
  }
`;

const home = () => {
  return (
    <StyledFrame>
      <h1> Welcome to KSEA!</h1>
      <img src={kseaGroupPhoto} />
    </StyledFrame>
  );
};

export default home;
