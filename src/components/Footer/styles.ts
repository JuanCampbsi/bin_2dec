import styled from 'styled-components/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const GitView = styled.View`
  width: 100%;

  background-color: #2F4F4F;      

  padding: ${RFValue(14)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around; 
`;

export const IconGit = styled(AntDesign)`   
  color: #fff;
  font-size: ${RFValue(35)}px;
`;

export const StarGit = styled(Entypo)`    
  color:  #FFD700;
  font-size: ${RFValue(20)}px;
  margin-left: 20px;
`;

export const GitText = styled.Text`
  color: #FFF;
  font-size: ${RFValue(18)}px;    
  text-align: center;
`;