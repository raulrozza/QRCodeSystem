import React, { useCallback, useEffect, useState } from 'react';

// Components
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button } from '../../components';

// Libs
import * as Permissions from 'expo-permissions';

// Styles
import { Container } from './styles';

const Home: React.FC = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [scanned, setScanned] = useState<boolean | null>(null);

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
      setHasCameraPermission(status === 'granted');
    });
  }, []);

  const handleBarCodeScanned = useCallback(({ data }) => {
    setScanned(true);
    // TODO enviar para o backend os dados de usuario e produto
    alert(`Bar code with type data ${data} has been scanned!`);
  }, []);

  if (hasCameraPermission === null)
    return <Text> Requesting for camera permission </Text>;

  if (hasCameraPermission === false) return <Text> No access to camera </Text>;

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button onPress={() => setScanned(false)}>{'Tap to Scan Again'}</Button>
      )}
    </Container>
  );
};

export default Home;
