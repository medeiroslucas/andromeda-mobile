import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';
import { getAstros } from '../../services/getAstros';
import { astroList } from '../../astros';
import { getUserLocation, requestUserLocationPermission, UserCoords } from '../../services/getUserLocation';

import AstroCardLarge from './../../components/AstroCardLarge';
import { styles } from './styles';

type SelectableAstro = {
  name: string,
  image: string
}

export default function Search({ navigation }: any) {
  const [selectableAstroList, setSelectableAstroList] = useState(null);
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    handleUserLocationPermission();
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
        //console.log(userLocation);
        const astros = await getAstros(userLocation);
        console.log(astros)
        const list: SelectableAstro[] = []
        if(astros) {
          setSelectableAstroList(astros);
          setSearchList(astros);
        }
      }
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
        <AstroCardLarge astro={astro}/>
      </TouchableOpacity>
    );
  }

  function onChangeSearch(text: string) {
    setSearchList(selectableAstroList.filter(astro => astroList[astro.name].name.toLowerCase().includes(text.toLowerCase())))
  }

  function handleFilterByVisible() {
    setSearchList(selectableAstroList.filter(astro => astro.alt >= 0))
  }

  function showAll() {
    setSearchList(selectableAstroList);
  }

  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>

          <View style={styles.search}>
            <TextInput onChangeText={e => onChangeSearch(e)} style={styles.searchInput} placeholder="Pesquise um astro" placeholderTextColor="white"/>
            <SearchIcon style={styles.searchIcon} />
          </View>

          <View style={styles.filtersSection}>
            <TouchableOpacity style={styles.filterButton} onPress={handleFilterByVisible}>
              <Text style={styles.filterTitle}>Astros Visíveis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton} onPress={showAll}>
              <Text style={styles.filterTitle}>Todos os Astros</Text>
            </TouchableOpacity>
          </View>

          {searchList && searchList.map(astro =>
              renderItem(astro)
          )}
      </ScrollView>
    </ImageBackground>
  );
}
