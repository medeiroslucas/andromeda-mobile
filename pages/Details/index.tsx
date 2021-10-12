import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { ArrowLeft, RotateCw } from 'react-native-feather';

import { styles } from './styles';

export default function Details() {
    return(
        <ImageBackground 
            source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} 
            resizeMode="cover" 
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <ArrowLeft color="white"/>
                    <Text style={styles.infoDatetime}>21/09/2021 8:00</Text>
                    <RotateCw color="white"/>
                </View>
            </View>
            <ScrollView>
                <View style={styles.astroHeader}>
                    <Image source={require("../../assets/planet.png")} style={styles.astroImage} />
                    <Text style={styles.astroPositionTitle}> AZM: <Text style={styles.astroPositionValue}>+143º 12’ 38.64’’</Text> </Text>
                    <Text style={styles.astroPositionTitle}> ALT: <Text style={styles.astroPositionValue}>+16º 29’ 55.70’’</Text> </Text>
                </View>

                <View style={styles.astroInfo}>
                    <View style={styles.container}>
                        <Text style={styles.astroTitle}>Marte</Text>
                        <View style={styles.astroDescription}>
                            <Text style={styles.astroCategory}>Planeta</Text>
                            <View style={styles.astroDistance}>
                                <Text style={styles.astroDistanceValue}>384.405 km</Text>
                                <Text style={styles.astroDistanceDescription}>de distancia da Terra</Text>
                            </View>
                        </View>
                        
                        <Text style={styles.astroBirth}>30 a 200 milhões anos</Text>
                        <Text style={styles.astroMoreInfos}>
                            A face da Lua iluminada apresenta uma temperatura de aproximadamente 127°C, enquanto que a face não iluminada gira em torno de – 170°C.
                            O seu diâmetro é de aproximadamente 3.500 km, por essa razão seu tamanho é 80 vezes inferior ao do planeta Terra. 
                        </Text>

                        <View style={styles.astroGalery}>
                            <Text style={styles.astroGaleryTitle}>Galeria</Text>
                            <ScrollView horizontal>
                                <Image source={require("../../assets/mars.jpg")} style={styles.astroGaleryImage} />
                                <Image source={require("../../assets/mars1.jpg")} style={styles.astroGaleryImage} />
                                <Image source={require("../../assets/mars2.jpg")} style={styles.astroGaleryImage} />                        
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </ImageBackground>
    )
}