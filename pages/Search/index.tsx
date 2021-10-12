import React from 'react';
import { View, ImageBackground, Text, ScrollView, Image, TextInput, Pressable  } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';

import AstroCardLarge from './../../components/AstroCardLarge';
import { styles } from './styles';

export default function Search() {
  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>

          <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder="Pesquise um astro" placeholderTextColor="white"/>
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

          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
          <AstroCardLarge />
      </ScrollView>
    </ImageBackground>
  );
}
