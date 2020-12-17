// Helpers
import { Alert } from 'react-native';

// Hooks
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScannedCallback } from 'expo-barcode-scanner';

// Services
import api from '../../../services/api';

interface Scanner {
  scanned: boolean;
  handleBarCodeScanned: BarCodeScannedCallback;
  enableScan: () => void;
}

export default function useScanner(): Scanner {
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  const enableScan = useCallback(() => setScanned(false), []);

  const handleBarCodeScanned: BarCodeScannedCallback = useCallback(
    async ({ data }) => {
      setScanned(true);

      try {
        const response = await api.post<{ price: number }>('/user/discount', {
          product: data,
        });

        const { price } = response.data;

        navigation.navigate('Scanned', { price });
      } catch (error) {
        Alert.alert(
          'Error',
          'Oops, there was an error registering this product. Would you like to try again?',
          [{ text: 'Yes', onPress: enableScan }, { text: 'No' }],
        );
      }
    },
    [],
  );

  return {
    scanned,
    handleBarCodeScanned,
    enableScan,
  };
}
