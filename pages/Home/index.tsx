import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import AstroCardSmall from '../../components/AstroCardSmall';
import { getUserLocation, requestUserLocationPermission, UserCoords } from '../../services/getUserLocation';
import { getAstros } from '../../services/getAstros';
import { Astro, AstroCategories } from '../../astros';
import { styles } from './styles';

export default function Home({ navigation }: any) {
  const emptyList: AstroCategories[] = [];

  const [isLoading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState<AstroCategories[] | undefined>(emptyList);

  useEffect(() => {
    handleUserLocationPermission()
  }, []);

  const handleUserLocationPermission = async() => {
    await getUserLocation()
      .catch(_ => {
        Alert.alert(
          'Acessar localização',
          'Para o uso do aplicativo, é necessário o acesso à sua localização para sabermos quais astros são visiveis da sua posição.',
          [{ text: 'OK', onPress: () => { getData() } }],
          { cancelable: false }
        )
      })
      .then(userLocation => userLocation && setUserLocation(userLocation));
  }

  const setUserLocation = async (userLocation: UserCoords) => {
    if (userLocation) {
      const astros = await getAstros(userLocation);
      setCategoryList(astros)
    }
    
    setLoading(false)
  }

  const getData = async () => {
    await requestUserLocationPermission()
      .catch((error) => {
        Alert.alert('', error)
      })
      .then(userLocation => userLocation && setUserLocation(userLocation));
  }

  const renderItem = (astro: Astro) => {
    return (
      <TouchableOpacity key={astro.name} onPress={() => navigation.navigate('Detalhes', { astro })}>
        <AstroCardSmall astro={astro}/>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>

          {isLoading ? 
            <ActivityIndicator size="large" color="#fff" style={{marginTop: 80}}/> 
            :
            <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>
          }
          {categoryList && categoryList.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <ScrollView horizontal>
                {category.astros.map(astro => ( renderItem(astro) ))}
              </ScrollView>
            </View>
          ))}
      </ScrollView>
    </ImageBackground>
  );
}
