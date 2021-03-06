import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-self: stretch;
  height: 60px;
  background: #b2e6e9;
  border-radius: 10px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: sans-serif;
  color: #312e38;
  font-size: 18px;
`;
