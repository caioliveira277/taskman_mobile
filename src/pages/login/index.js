import React from "react";
import styled from "styled-components/native";
import loginBackground from "../../../assets/backgrounds/login.png";

const Container = styled.View`
  background-color: #fafafa;
  flex: 1;
`;
const Background = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  margin-bottom: 30%;
`;

export default function Login() {
  return (
    <Container>
      <Background source={loginBackground} resizeMode="stretch">
        <Title>Bem Vindo</Title>
      </Background>
    </Container>
  );
}
