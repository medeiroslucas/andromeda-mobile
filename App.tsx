import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search as SearchIcon, Home as HomeIcon } from 'react-native-feather';
import Search from './pages/Search';
import Home from './pages/Home';
import Details from './pages/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {  
  return (    
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >      
      <Stack.Screen name="Início" component={Home} />  
      <Stack.Screen name="Detalhes" component={Details} />  
    </Stack.Navigator>  
  );
}

function SearchStack() {  
  return (    
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >      
      <Stack.Screen name="Buscar" component={Search} />  
      <Stack.Screen name="Details" component={Details} />  
    </Stack.Navigator>  
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Início"
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Tab.Screen 
            name="Início" 
            component={HomeStack}
            options={{
              tabBarIcon: () => (
                <HomeIcon color="black" />
              ),
            }}  
          />
          <Tab.Screen 
            name="Buscar" 
            component={SearchStack}
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
