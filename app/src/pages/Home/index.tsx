import React, { useCallback } from 'react';

// Components
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button } from '../../components';

// Hooks
import { useCameraPermission, useScanner } from './hooks';

// Styles
import { Container } from './styles';

const Home: React.FC = () => {
  const { hasCameraPermission } = useCameraPermission();
  const { scanned, handleBarCodeScanned, enableScan } = useScanner();

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

      {scanned && <Button onPress={enableScan}>{'Tap to Scan Again'}</Button>}
    </Container>
  );
};

export default Home;
