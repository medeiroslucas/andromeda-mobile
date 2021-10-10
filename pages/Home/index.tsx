import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import AstroCardSmall from '../../components/AstroCardSmall';

import { styles } from './styles';

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  let planetList: string[] = [];
  let satelliteList: string[] = [];

  const getAstros = async () => {
    try {
      //const response = await fetch('link');
      //const json = await response.json();
      //setData(json);

      const response: Record<string, string> = {
        "jupiter": "planet",
        "mars": "planet",
        "mercury": "planet",
        "moon": "satellite",
        "neptune": "planet",
        "saturn": "planet",
        "uranus": "planet",
        "venus": "planet"
      }

      planetList = [];
      satelliteList = [];

      for(const astro in response) {
        if(response[astro] === "planet") {
          planetList.push(astro);
        }
        else {
          satelliteList.push(astro);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAstros();
  }, []);

  const renderItem = ({ item } : {item: string}) => {
    return (
      <AstroCardSmall astro={item}/>
    );
  }

  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>
          <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>

          {isLoading ? <ActivityIndicator/> : (
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>Planetas</Text>
              <FlatList
                data={planetList}
                renderItem={renderItem}
              />
            </View>
          )}

          {isLoading ? <ActivityIndicator/> : (
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>Satélites</Text>
              <FlatList
                data={satelliteList}
                renderItem={renderItem}
              />
            </View>
          )}
      </ScrollView>
    </ImageBackground>
  );
}
