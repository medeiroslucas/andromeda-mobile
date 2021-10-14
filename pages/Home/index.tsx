import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableHighlight } from 'react-native';
import AstroCardSmall from '../../components/AstroCardSmall';
import { getLocation } from '../../services/getLocation';
import { getAstros } from '../../services/getAstros';
import { styles } from './styles';
import { Astro, AstroCategories } from '../../astros';

export default function Home({ navigation }: any) {
  const emptyList: AstroCategories[] = [];
  const emptyCoord = {}

  const [isLoading, setLoading] = useState(true);
  const [coords, setCoords] = useState(emptyCoord);
  const [categoryList, setCategoryList] = useState<AstroCategories[] | undefined>(emptyList);

  useEffect(() => {
    async function getData() {
      const astros = await getAstros();
      setCategoryList(astros)
  
      const location = await getLocation();
      setCoords(location)
    }

    getData();
  }, []);

  const renderItem = (astro: Astro) => {
    return (
      <TouchableHighlight key={astro.name} onPress={() => navigation.navigate('Detalhes', { astro })}>
        <AstroCardSmall astro={astro}/>
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
              <ScrollView horizontal>
                {category.astros.map(astro => ( renderItem(astro) ))}
              </ScrollView>
            </View>
          ))}
      </ScrollView>
    </ImageBackground>
  );
}
