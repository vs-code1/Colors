import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Component
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';
// import ColorBox from './components/ColorBox';
// import FList from './components/FList';
// import TouchAbleFList from './components/TouchAbleFList';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group >
          <RootStack.Screen 
            name="Home"
            component={Home}
          />
          <RootStack.Screen 
            name="ColorPalette" 
            component={ColorPalette} 
            options={({route}) => ({title: route.params.paletteName})} 
          />
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name='ColorPaletteModal' component={ColorPaletteModal} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
