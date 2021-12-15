import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonTextHex = styled.Text`
    color: #fff;
    font-size: ${RFValue(80)}px;
    font-weight: bold;
`;

export const ButtonHex = styled.TouchableOpacity`
    width: 100%;      
    align-items: center;
    padding: ${RFValue(10)}px;
`;
