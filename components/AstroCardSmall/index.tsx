import React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';
import { Astro } from '../../astros';
import { astroList } from '../../astros';

type AstroCardSmallProps = {
  astro: Astro
}

export default function AstroCardSmall({ astro }: AstroCardSmallProps) {
  return (
    <View style={styles.card}>
        <View style={styles.images}>
            <Image source={{uri: astroList[astro.name].image }} style={styles.astro} />
            <Image source={require("../../assets/gps.png")} style={styles.gps} />
        </View>
        <View>
            <Text style={styles.astroTitle}>{astroList[astro.name].name.charAt(0).toUpperCase() + astroList[astro.name].name.slice(1)}</Text>
            <Text style={styles.astroVisibility}>{astro.alt >= 0 ? 'Visível' : 'Não visível'} da sua localização</Text>
        </View>
    </View>
  );
}
