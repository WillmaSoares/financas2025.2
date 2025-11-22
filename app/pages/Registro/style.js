import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: #ccc;
`;

export const TipoContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-vertical: 10px;
`;

export const TipoButton = styled.TouchableOpacity`
  flex: 1;
  padding-vertical: 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: transparent;
  background-color: #dee2e6;
`;

export const TipoSelecionado = styled(TipoButton)`
  background-color: #fff;
  border-color: #0d6efd;
`;

export const TipoText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const TipoTextSelecionado = styled(TipoText)`
  color: #0d6efd;
`;

export const RegistrarButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
`;

export const RegistrarText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;