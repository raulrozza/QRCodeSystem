import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Button from '../../components/Button';
import { Text, View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Home: React.FC = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [scanned, setScanned] = useState<boolean | null>(null);

  useEffect(() => {
    const exec = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status === 'granted');
    };
    exec();
  }, []);

  const rendeVariable = useMemo(() => {
    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
  }, [hasCameraPermission]);

  const handleBarCodeScanned = useCallback(({ type, data }) => {
    setScanned(true);
    // TODO enviar para o backend os dados de usuario e produto
    alert(`Bar code with type data ${data} has been scanned!`);
  }, []);

  return (
    <>
      {rendeVariable && !rendeVariable ? (
        rendeVariable
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          {scanned && (
            <Button onPress={() => setScanned(false)}>
              {'Tap to Scan Again'}
            </Button>
          )}
        </View>
      )}
    </>
  );
};

export default Home;
