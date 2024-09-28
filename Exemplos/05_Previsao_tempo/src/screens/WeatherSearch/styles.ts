import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #005a7a;
  color: #fff;
  padding: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: 14px;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TextLarge = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const Caption = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #187d9e;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.5)",
})`
  width: 100%;
  height: 50px;
  background-color: #187d9e;
  color: #fff;
  margin-bottom: 18px;
  border-radius: 8px;
  padding: 12px;
  accent-color: #fff;
  font-size: 18px;
`;

export const Card = styled.View`
  width: 95%;
  border-radius: 13px;
  border-color: #252525;
  background-color: #0c6b8c;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;
