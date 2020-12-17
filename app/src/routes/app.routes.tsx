import React from 'react';

// Routing
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Home from '../pages/Home';
import Scanned from '../pages/Scanned';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Scanned" component={Scanned} />
    </App.Navigator>
  );
};

export default AppRoutes;
