import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MoviesComponent from './src/screens/MoviesComponent';
import SearchComponent from './src/screens/SearchComponent';
import TVComponent from './src/screens/TVComponent';
import { NativeBaseProvider } from 'native-base';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Movies" component={MoviesComponent} />
          <Tab.Screen name="Search" component={SearchComponent} />
          <Tab.Screen name="TV" component={TVComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
