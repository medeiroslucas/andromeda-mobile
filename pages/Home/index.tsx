import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, FlatList, ActivityIndicator, Platform, TouchableHighlight } from 'react-native';
import AstroCardSmall from '../../components/AstroCardSmall';
import { getLocation } from '../../services/getLocation';
import { getAstros } from '../../services/getAstros';
import { styles } from './styles';

type emptyListType = {
  name: string,
  astros: string[]
}[];

const translate: Record<string, string> = {
  "jupiter": "Júpiter",
  "mars": "Marte",
  "mercury": "Mercúrio",
  "moon": "Lua",
  "neptune": "Netuno",
  "saturn": "Saturno",
  "uranus": "Urânio",
  "venus": "Vênus",
  "planet": "Planeta",
  "satellite": "Satélite",
}

export default function Home({ navigation } : any) {
  const emptyList: emptyListType = [];
  const emptyCoord = {}

  const [isLoading, setLoading] = useState(true);
  const [coords, setCoords] = useState(emptyCoord);
  const [categoryList, setCategoryList] = useState<emptyListType | undefined>(emptyList);

  useEffect(() => {
    async function getData() {
      const astros = await getAstros();
      console.log(astros)
      setCategoryList(astros)
  
      const location = await getLocation();
      console.log(location) 
      setCoords(location)
    }

    getData();
  }, []);

  const renderItem = ({ item } : {item: string}) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Detalhes', {astro: translate[item], previousScreen: 'Início'})}>
        <AstroCardSmall astro={translate[item]}/>
      </TouchableHighlight>
    );
  }

  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>
          <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>

          {categoryList && categoryList.map(category => (
            <View key={category.name} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            <FlatList
              data={category.astros}
              renderItem={renderItem}
              keyExtractor={item => item}
              horizontal
            />
          </View>
          ))}
          
      </ScrollView>
    </ImageBackground>
  );
}
