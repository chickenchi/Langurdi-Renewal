import styled from "styled-components";

const NavDiv = styled.div`
  position: relative;

  bottom: 0;

  width: 100%;
  height: 5%;

  font-family: "Pretendard";

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ALink = styled.a`
  margin-right: 15px;
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const LinkDescription = styled.div`
  margin-right: 6px;

  color: #2e2e2e;
  font-weight: 300;
`;

const LoginIcon = styled.img`
  width: 20px;
  height: 20px;

  margin-bottom: 1px;
`;

const Header = () => {
  return (
    <NavDiv>
      <ALink href="/login">
        <LinkDescription>들어가기</LinkDescription>
        <LoginIcon src="./image/user.png" />
      </ALink>

      <ALink href="/setting">
        <LinkDescription>개발자</LinkDescription>
        <LoginIcon src="./image/developer.png" />
      </ALink>

      <ALink href="/setting">
        <LinkDescription>설정</LinkDescription>
        <LoginIcon src="./image/setting.png" />
      </ALink>
    </NavDiv>
  );
};

export default Header;
