import styled from 'styled-components/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
    justify-content: center;   

    background-color: #3CB371;

    padding: 5px 25px;
    width: 100%;   
`;

export const Title = styled.Text`
    width: 100%;
    color: #FFF;

    font-size : ${RFValue(40)}px;
    font-weight: bold;
    text-align: center;
    
    margin-bottom: 50px;
`;

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: ${RFValue(20)}px;
    margin-top: 5px;
    text-align: center;
`;

export const Icon = styled(AntDesign)`
    margin-top: ${RFValue(40)}px;
    color: #FFD700;
    font-size: ${RFValue(50)}px;
`;

export const ArrowView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;



