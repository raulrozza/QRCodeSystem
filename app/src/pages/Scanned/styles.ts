import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: space-between;
`;

export const Price = {
  Container: styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;

    margin-bottom: 16px;
  `,

  Text: styled.Text`
    color: #eee;
    font-size: 24px;

    margin-bottom: 16px;
  `,
};
