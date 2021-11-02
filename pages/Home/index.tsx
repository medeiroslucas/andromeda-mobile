import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';

import AstroCardSmall from '../../components/AstroCardSmall';
import { getUserLocation, UserCoords } from '../../services/getUserLocation';
import { getAstros } from '../../services/getAstros';
import { Astro, AstroCategories } from '../../astros';
import { styles } from './styles';

export default function Home({ navigation }: any) {
  const emptyList: AstroCategories[] = [];

  const [satelliteList, setSatelliteList] = useState<AstroCategories[] | undefined>(emptyList);
  const [planetList, setPlanetList] = useState<AstroCategories[] | undefined>(emptyList);

  useEffect(() => {
    setUserLocation()
  }, []);

  const setUserLocation = async () => {
    await getUserLocation()
        .catch(_ => {
          Alert.alert(
            'Acessar localização',
            'Para o uso do aplicativo, é necessário o acesso à sua localização para sabermos quais astros são visiveis da sua posição.',
            [{ text: 'OK' }],
            { cancelable: false }
          )
        })
        .then(async (userLocation: UserCoords) => {
          const astros = await getAstros(userLocation);
          setSatelliteList(astros.filter(astro => {
            return astro.category === 'satellite'
          }))
          setPlanetList(astros.filter(astro => {
            return astro.category === 'planet'
          }))
        })
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
          <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>
          <View key={'Planetas'} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <ScrollView horizontal>
              {planetList.map(astro => ( renderItem(astro) ))}
            </ScrollView>
          </View>
          <View key={'Satélites'} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Satélites</Text>
            <ScrollView horizontal>
              {satelliteList.map(astro => ( renderItem(astro) ))}
            </ScrollView>
          </View>
      </ScrollView>
    </ImageBackground>
  );
}
