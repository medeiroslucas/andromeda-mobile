import React from 'react';
import { Text, View, Image } from 'react-native';
import { Astro } from '../../astros';
import { astroList } from '../../astros';
import { styles } from './styles';

type AstroCardLargeProps = {
  astro: Astro
}

export default function AstroCardLarge({ astro }: AstroCardLargeProps) {
  return (
    <View style={styles.card}>
        <Image source={{ uri: astroList[astro.name].image }} style={styles.astro} />
        <View style={styles.astroInfo}>
            <Text style={styles.astroTitle}>{astroList[astro.name].name.charAt(0).toUpperCase() + astroList[astro.name].name.slice(1)}</Text>
            <Text style={styles.astroVisibility}>{astro.alt >= 0 ? 'Visível' : 'Não visível'} da sua localização</Text>
        </View>
        <Image source={require("../../assets/gps.png")} style={styles.aim} />
    </View>
  );
}
