import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TextInput, Pressable, TouchableOpacity } from 'react-native';
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
    const astros = await getAstros();
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
            <Pressable style={styles.filterButton} onPress={() => {}}>
              <Text style={styles.filterTitle}>Astros Visíveis</Text>
            </Pressable>
            <Pressable style={styles.filterButton} onPress={() => {}}>
              <Text style={styles.filterTitle}>Todos os Astros</Text>
            </Pressable>
          </View>

          {searchList && searchList.map(astro =>
              renderItem(astro)
          )}
      </ScrollView>
    </ImageBackground>
  );
}
