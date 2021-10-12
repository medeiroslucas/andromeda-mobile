import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function AstroCardSmall(props: {astro: string}) {
  return (
    <TouchableOpacity style={styles.card}>
        <View style={styles.images}>
            <Image source={require("../../assets/planet.png")} style={styles.astro} />
            <Image source={require("../../assets/gps.png")} style={styles.gps} />
        </View>
        <View>
            <Text style={styles.astroTitle}>{props.astro.charAt(0).toUpperCase() + props.astro.slice(1)}</Text>
            <Text style={styles.astroVisibility}>Visível da sua localização</Text>
        </View>
    </TouchableOpacity>
  );
}
