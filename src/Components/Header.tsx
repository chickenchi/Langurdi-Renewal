import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 20%;

  font-family: "Pretendard";

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.a`
  margin-top: 10px;

  color: #2e2e2e;
  font-size: 40pt;
  font-family: "Pretendard";
  font-weight: 700;

  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Title href="/">Langurdi</Title>
    </HeaderDiv>
  );
};

export default Header;
