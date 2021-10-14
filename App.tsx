import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search as SearchIcon, Home as HomeIcon } from 'react-native-feather';
import Search from './pages/Search';
import Home from './pages/Home';
import Details from './pages/Details';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Início"
          screenOptions={{
            headerShown: false,
            // tabBarBackground: () => (
            
        }}>
          <Tab.Screen
            name="Detalhes" 
            component={Details}
            options={{
              tabBarIcon: () => (
                <SearchIcon color="black" />
              ),
            }} 
          />
          <Tab.Screen 
            name="Início" 
            component={Home}
            options={{
              tabBarIcon: () => (
                <HomeIcon color="black" />
              ),
            }}  
          />
          <Tab.Screen 
            name="Buscar" 
            component={Search}
            options={{
              tabBarIcon: () => (
                <SearchIcon color="black" />
              ),
            }} 
          />
        </Tab.Navigator>  
      </NavigationContainer>
    </>
  );
}
