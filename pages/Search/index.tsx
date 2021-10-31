import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';
import { Astro, AstroCategories } from '../../astros';
import { getAstros } from '../../services/getAstros';

import AstroCardLarge from './../../components/AstroCardLarge';
import { styles } from './styles';

export default function Search({ navigation }: any) {
  const emptyList: AstroCategories[] = [];
  
  const [categoryList, setCategoryList] = useState<AstroCategories[] | undefined>(emptyList);
  const [searchList, setSearchList] = useState<Astro[] | undefined>([]);
  
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const astros = await getAstros({latitude: 0, longitude: 0});
    setCategoryList(astros)

    let auxAstros: Astro[] = [];
    astros?.map(category => {
      category.astros.map(astro => auxAstros.push(astro))
    });

    setSearchList(auxAstros);
  }

  const renderItem = (astro: Astro) => {
    return (
      <TouchableOpacity key={astro.name} onPress={() => navigation.navigate('Detalhes', { astro })}>
        <AstroCardLarge astro={astro}/>
      </TouchableOpacity>
    );
  }

  function onChangeSearch(text: string) {
    let filteredList: Astro[] = [];
    
    categoryList?.map(category => {
      const filterAux = category.astros.filter(astro => astro.name.toLowerCase().includes(text.toLowerCase()))
      filterAux.map(astro => filteredList.push(astro))
    });

    setSearchList(filteredList)
  }

  function handleFilterByVisible() {
    let filteredList: Astro[] = [];
    
    categoryList?.map(category => {
      const filterAux = category.astros.filter(astro => astro.alt >= 0);
      filterAux.map(astro => filteredList.push(astro))
    });

    setSearchList(filteredList)
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
            <TouchableOpacity style={styles.filterButton} onPress={getData}>
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
