import styled from "styled-components/native";
import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android'

export const Container = styled.SafeAreaView`
margin-top: 5px;
`;
