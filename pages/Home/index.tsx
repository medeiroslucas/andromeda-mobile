import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, FlatList, ActivityIndicator, Platform } from 'react-native';
import AstroCardSmall from '../../components/AstroCardSmall';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './styles';

export default function Home() {
  const emptyList: string[] = [];
  const emptyCoord = {}

  const [isLoading, setLoading] = useState(true);
  const [coords, setCoords] = useState(emptyCoord);
  const [planetList, setPlanetList] = useState(emptyList);
  const [satelliteList, setSatelliteList] = useState(emptyList);

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

      var pList: string[] = [];
      var sList: string[] = [];

      for(const astro in response) {
        if(response[astro] === "planet") {
          pList.push(astro);
        }
        else {
          sList.push(astro);
        }
      }

      setPlanetList(pList);
      setSatelliteList(sList);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getLocation = async () => {
    const result = await requestMultiple(
      [
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
      ]).then(
        (statuses: any) => {
          const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
          const statusBack = statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION]; 
          // Em APIs do Android abaixo da 29 não é necessário permissão para background location,
          // apenas solicitar acesso ao GPS já oferece tudo que é necessário para utilizar a localização em primeiro e segundo plano.
          // Nesse caso, apenas verificamos se a autorização do GPS é positiva
          if (Platform.Version < 29) { 
            if (statusFine == 'granted') {
              return true;
            } else {
              // 'Usuário não aceitou solicitação de uso do GPS'
            }
          }
          // Caso a API seja > 29, é necessário verificar se ambas as autorizações foram positivas.
          else {
            if (statusFine == 'granted' && statusBack == 'granted') {
              return true;
            } else {
              // 'Usuário não aceitou solicitação de uso do GPS'
            }
          } 
        },
      );

      if (result) {
        Geolocation.getCurrentPosition(
          ({ coords }: {coords: {latitude: number, longitude: number}}) => {
            setCoords({
              latitude: coords.latitude,
              longitude: coords.longitude,
            });
          }, (error: any) => {
            // 'Não foi possível obter a localização'
          }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, showLocationDialog: true } 
        )
      }
  }

  useEffect(() => {
    getAstros();
    getLocation();
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
