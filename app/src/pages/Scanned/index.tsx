import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

// Components
import { Button } from '../../components';

type ParamList = {
  Scanner: {
    price: number;
  };
};

export type Params = RouteProp<ParamList, 'Scanner'>;

const Scanned: React.FC = () => {
  const { params } = useRoute<Params>();

  return (
    <View>
      <Button>{'Tap to Scan Again' + params.price}</Button>
    </View>
  );
};

export default Scanned;
