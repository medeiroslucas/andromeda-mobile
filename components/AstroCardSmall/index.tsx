import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export default function AstroCardSmall() {
  return (
    <View style={styles.card}>
        <View style={styles.images}>
            <Image source={require("../../assets/planet.png")} style={styles.astro} />
            <Image source={require("../../assets/aim.png")} style={styles.aim} />
        </View>
        <View>
            <Text style={styles.astroTitle}>Mercúrio</Text>
            <Text style={styles.astroVisibility}>Visível da sua localização</Text>
        </View>
    </View>
  );
}
