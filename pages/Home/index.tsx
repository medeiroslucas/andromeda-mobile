import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import SmallAstroCard from '../../components/SmallAstroCard';

import { styles } from './styles';

export default function Home() {
  return (
    <ImageBackground source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} resizeMode="cover" style={styles.image}>
      <ScrollView style={styles.container}>
          <Text style={styles.welcomeTitle}>Boa Noite</Text>
          <Text style={styles.welcomeCaption}>O que vamos explorar hoje?</Text>
          <Text style={styles.categoriesPresentation}>Navegue por Categorias</Text>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <ScrollView horizontal>
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
            </ScrollView>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Satélites</Text>
            <ScrollView horizontal>
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
            </ScrollView>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Cometas</Text>
            <ScrollView horizontal>
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
            </ScrollView>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <ScrollView horizontal>
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
            </ScrollView>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Planetas</Text>
            <ScrollView horizontal>
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
              <SmallAstroCard />
            </ScrollView>
          </View>
      </ScrollView>
    </ImageBackground>
  );
}
