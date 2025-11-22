import styled from "styled-components/native";

export const BackGround = styled.View`
  flex: 1;
  background-color: #f8f9fa;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 20px;
`;

export const CardArea = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  background-color: ${({ bg }) => bg || "#ccc"};
  width: 32%;
  padding: 15px;
  border-radius: 8px;
`;

export const CardLabel = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const CardValue = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-top: 5px;
`;

export const ListHeader = styled.View`
  margin-bottom: 10px;
`;

export const ListTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #212529;
`;

export const MovItem = styled.View`
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #dee2e6;
`;

export const Tag = styled.Text`
  background-color: ${({ bg }) => bg || "#ccc"};
  color: #fff;
  padding: 5px 10px;
  max-width: 120px;
  text-align: center; 
  border-radius: 4px;
  font-size: 14px;

`;
export const MovValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #212529;
`;