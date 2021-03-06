import React from 'react';

// Components
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Routing
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#28262e" />

      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
};

export default App;
