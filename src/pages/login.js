import React, { useState, useEffect } from "react";
import { Animated, StyleSheet, Keyboard } from "react-native";
import styled from "styled-components/native";
import Logo from "../../assets/images/icons/ilustracao-relogio.svg";

const LabelInput = styled.TextInput`
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: #222222;
  padding: 18px 0px 18px 14px;
  margin-top: 24px;
  font-size: 16px;
  color: #ffffff;
`;
const shadows = StyleSheet.create({
  shadow1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.ColorVariant1};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const TitleForm = styled.Text`
  text-align: center;
  font-size: 32px;
  margin: 5px 0 20px 0;
  font-family: "Roboto";
  font-weight: bold;
  color: #fff;
`;

const styles = StyleSheet.create({
  form: {
    width: "90%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Login() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 185, y: 185 }));
  const [paddingBottom] = useState(new Animated.Value(150));

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", HandlerKeyboardShow);
    Keyboard.addListener("keyboardDidHide", HandlerKeyboardHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 10,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const HandlerKeyboardShow = () => {
    const value = 150;
    Animated.parallel([
      Animated.timing(paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(logo.x, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const HandlerKeyboardHide = () => {
    const value = 185;
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: value,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(paddingBottom, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingBottom: paddingBottom,
        },
      ]}
    >
      <Animated.View
        style={{
          width: logo.x,
          height: logo.y,
        }}
      >
        <Logo />
      </Animated.View>
      <Animated.View
        style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              {
                translateY: offset.y,
              },
            ],
          },
        ]}
      >
        <TitleForm>Login</TitleForm>
        <LabelInput
          style={shadows.shadow1}
          placeholder="Informe o seu email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <LabelInput
          style={shadows.shadow1}
          placeholder="Informe a sua senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Button style={shadows.shadow1} onPressOut={() => alert("precionado")}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Animated.View>
    </Animated.View>
  );
}
