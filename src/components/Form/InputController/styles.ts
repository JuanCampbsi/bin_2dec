import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  color: #B22222;
  font-size: ${RFValue(16)}px;

  padding: 2px;
  margin-left: 10px;
`;
