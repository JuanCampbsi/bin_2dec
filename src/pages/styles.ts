import styled from 'styled-components/native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import { Platform } from 'react-native';


export const Container = styled.View`
    flex: 1;
    background-color: #3CB371;
    padding: 0 30px;
    width: 100%;
    justify-content: center;
   
`;

export const Title = styled.Text`
    color: #FFF;
    font-size : 40px;
    font-weight: bold;
    text-align: center;

`;

export const SubTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
    margin-top: 5px;
    text-align: center;

`;

export const Icon = styled(AntDesign)`
    padding: 25px;
    color: #FFD700;
    font-size: 50px;
`;
export const Input = styled.TextInput `
    background-color: #2F4F4F;
    color: #FFF;
    font-size: 18px;   
    border-radius: 7px;
    font-weight: bold;
    text-align: center;
    padding: ${Platform.OS === 'ios' ? 15 : 10}px;
    margin-top: ${Platform.OS === 'ios' ? 30 : 20}px;

`;

export const ArrowView = styled.View`
    justify-content: center;
    align-items: center;
`;


export const GitView = styled.View`
    background-color: #2F4F4F;      
    padding: 25px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;  

`;

export const IconGit = styled(AntDesign)`   
    color: #fff;
    font-size: 35px;
`;
export const StarGit = styled(Entypo)`    
    color:  #FFD700;
    font-size: 20px;
    
`;

export const GitText = styled.Text`
    color: #FFF;
    font-size: 16px;    
    text-align: center;
    

`;

