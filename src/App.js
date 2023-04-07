import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

//animation 사용
//keyframes string을 import 해준다.
const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;
//linear : 애니메이션 효과가 처음부터 끝까지 일정한 속도로 진행된다.
//infinite : 애니메이션 효과가 무한히 반복된다.

function App() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
