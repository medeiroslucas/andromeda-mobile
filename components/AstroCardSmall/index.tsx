import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';

export default function AstroCardSmall(props: {astro: string}) {
  return (
    <View style={styles.card}>
        <View style={styles.images}>
            <Image source={require("../../assets/planet.png")} style={styles.astro} />
            <Image source={require("../../assets/gps.png")} style={styles.gps} />
        </View>
        <View>
            <Text style={styles.astroTitle}>{props.astro}</Text>
            <Text style={styles.astroVisibility}>Visível da sua localização</Text>
        </View>
    </View>
  );
}
