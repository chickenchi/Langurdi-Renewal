import styled from "styled-components";
import { todayGrammar } from "./data/TodayGrammar";

const MainDiv = styled.div`
  width: 100%;
  height: 75%;

  font-family: "Pretendard";

  display: flex;
  flex-direction: column;
`;

const LineDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayGrammarDiv = styled.div`
  width: 60%;
  height: 100%;

  padding: 20px 0;

  padding-left: 30px;

  display: flex;
  flex-direction: column;
`;

const ToolDiv = styled.div`
  width: 50%;
  height: 100%;

  padding: 20px 0;

  padding-left: 30px;

  display: flex;
  flex-direction: column;
`;

const BulletinDiv = styled.div`
  width: 100%;
  height: 450px;

  padding: 20px 0;

  padding-left: 30px;

  display: flex;
  flex-direction: column;
`;

const BulletinBoard = styled.div`
  background-color: #f3f3f3;

  border-radius: 5px;

  margin-right: 30px;

  width: 100% - 30px;
  height: 100%;

  color: #1c1c1c;
  font-size: 18pt;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentText = styled.p`
  margin-bottom: 20px;

  color: #1c1c1c;
  font-size: 22pt;
  font-weight: 700;
`;

const Title = styled.p`
  margin-left: 10px;
  margin-bottom: 20px;

  color: #1c1c1c;
  font-size: 17pt;
  font-weight: 600;
`;

const Description = styled.p`
  width: 90%;
  margin-left: 20px;

  font-size: 15pt;
  font-weight: 300;
`;

const ButtonDiv = styled.div`
  width: 90%;
  height: 100%;

  margin-left: 20px;

  display: flex;
`;

const PortalLink = styled.a<{ color: string }>`
  background-color: ${({ color }) => [color]};

  width: 150px;
  height: 120px;

  border: none;
  border-radius: 5px;

  margin-right: 5px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PortalText = styled.p`
  margin-top: 10px;

  color: #1c1c1c;
`;

const PortalImage = styled.img`
  width: 50px;
  height: 50px;
`;

const Main = () => {
  return (
    <MainDiv>
      <LineDiv>
        <TodayGrammarDiv>
          <ContentText>오늘의 문법</ContentText>
          <Title>{todayGrammar.title}</Title>
          <Description>{todayGrammar.description}</Description>
        </TodayGrammarDiv>
        <ToolDiv>
          <ContentText>국어 관련 누리집</ContentText>
          <ButtonDiv>
            <PortalLink color="#f8f8f0" href="https://stdict.korean.go.kr/">
              <PortalImage src="./image/dictionary.png" />
              <PortalText>표준국어대사전</PortalText>
            </PortalLink>
            <PortalLink
              color="#F2F5F8"
              href="https://www.korean.go.kr/front/onlineQna/onlineQnaList.do?mn_id=1"
            >
              <PortalImage src="./image/counsel.png" />
              <PortalText>온라인 가나다</PortalText>
            </PortalLink>
            <PortalLink
              color="#e1ffc8"
              href="https://nara-speller.co.kr/speller/"
            >
              <PortalImage src="./image/speller.png" />
              <PortalText>맞춤법 검사기</PortalText>
            </PortalLink>
          </ButtonDiv>
        </ToolDiv>
      </LineDiv>
      <LineDiv>
        <BulletinDiv>
          <ContentText>질문</ContentText>
          <BulletinBoard>아직 게시한 내용이 없네요.</BulletinBoard>
        </BulletinDiv>
      </LineDiv>
    </MainDiv>
  );
};

export default Main;
