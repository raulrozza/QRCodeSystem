import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';

// Components
import { Button } from '../../components';
import { Container, Price } from './styles';

type ParamList = {
  Scanner: {
    price: number;
  };
};

export type Params = RouteProp<ParamList, 'Scanner'>;

const Scanned: React.FC = () => {
  const { params } = useRoute<Params>();
  const navigation = useNavigation();

  return (
    <Container>
      <Price.Container>
        <Price.Text>{'You have scanned a product!'}</Price.Text>

        <Price.Text>{`It costs $${params.price}`}</Price.Text>
      </Price.Container>

      <Button onPress={() => navigation.navigate('Home')}>
        {'Scan Another Code'}
      </Button>
    </Container>
  );
};

export default Scanned;
