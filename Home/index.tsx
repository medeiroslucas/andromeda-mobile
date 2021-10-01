import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import SmallCard from '../components/SmallCard';

import { styles } from './styles';

export default function Home() {
  return (
    <ImageBackground source={require("../assets/background.png")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>
          <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <SmallCard />
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <SmallCard />
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <SmallCard />
          </View>
      </View>
    </ImageBackground>
  );
}
