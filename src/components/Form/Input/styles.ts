import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from 'react-native';

export const Container = styled(TextInput)`
    width: 100%;
    background-color: #2F4F4F;
    color: #FFF;

    font-size: 18px; 
    font-weight: bold;

    border-radius: 7px;  
    text-align: center;

    padding: ${Platform.OS === 'ios' ? 15 : 10}px;
    margin-top: ${Platform.OS === 'ios' ? 30 : 20}px;
`;