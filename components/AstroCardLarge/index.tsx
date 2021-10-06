import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export default function AstroCardLarge() {
  return (
    <View style={styles.card}>
        <Image source={require("../../assets/planet.png")} style={styles.astro} />
        <View style={styles.astroInfo}>
            <Text style={styles.astroTitle}>Mercúrio</Text>
            <Text style={styles.astroVisibility}>Visível da sua localização</Text>
        </View>
        <Image source={require("../../assets/aim.png")} style={styles.aim} />
    </View>
  );
}
