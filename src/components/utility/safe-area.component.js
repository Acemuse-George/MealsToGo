import styled from "styled-components/native";
import { StatusBar } from "react-native";

//  StatusBar.currentHeight only applies to Android
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
