import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LabelInput = styled.TextInput`
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: #222222;
  padding: 18px 0px 18px 14px;
  font-size: 16px;
  color: #fafafa;
`;
export const shadows = StyleSheet.create({
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
export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.ColorVariant1};
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
export const TextButton = styled.Text`
  color: #fafafa;
  font-size: 18px;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 22px;
  margin: 20px;
  font-family: "Roboto";
  font-weight: bold;
  color: #fafafa;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
export const styles = StyleSheet.create({
  form: {
    width: "90%",
    alignItems: "center",
  },
});
