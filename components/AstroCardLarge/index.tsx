import React from 'react';
import { Text, View, Image } from 'react-native';
import { Astro } from '../../astros';

import { styles } from './styles';

type AstroCardLargeProps = {
  astro: Astro
}

export default function AstroCardLarge({ astro }: AstroCardLargeProps) {
  return (
    <View style={styles.card}>
        <Image source={{ uri: astro.image }} style={styles.astro} />
        <View style={styles.astroInfo}>
            <Text style={styles.astroTitle}>{astro.name}</Text>
            <Text style={styles.astroVisibility}>Visível da sua localização</Text>
        </View>
        <Image source={require("../../assets/gps.png")} style={styles.aim} />
    </View>
  );
}
