import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { moveDown, moveLeft, moveRight, moveUp } from '../../services/telescopeAdjustments';
import { astroList } from '../../astros';

import { styles } from './styles';

export default function Details({ route, navigation }: any) {
    const { astro } = route.params;

    const [azWithMovement, setAzWithMovement] = useState(astro.az);
    const [altWthMovement, setAltWthMovement] = useState(astro.alt);

    function handleAstroPosition() {
        Alert.alert(
            'Aguarde',
            `Posicionando telescópio em direção a ${astro.name}, nas coordenadas Az: ${astro.az} Alt: ${astro.alt}.`
        )
        setAltWthMovement(astro.alt);
        setAzWithMovement(astro.az);
    }

    function handleMoveUp() {
        const result = moveUp(altWthMovement);
        console.log('Up: ' + result);
        setAltWthMovement(result);
    }
    
    function handleMoveDown() {
        const result = moveDown(altWthMovement);
        console.log('Down: ' + result);
        setAltWthMovement(result);
    }
    
    function handleMoveLeft() {
        const result = moveLeft(azWithMovement);
        console.log('Left: ' + result);
        setAzWithMovement(result);
    }
    
    function handleMoveRight() {
        const result = moveRight(azWithMovement);
        console.log('Right: ' + result);
        setAzWithMovement(result);
    }

    return(
        <ImageBackground 
            source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} 
            resizeMode="cover" 
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <ArrowLeft color="white"/>
                    </TouchableOpacity>
                    {/* <Text style={styles.infoDatetime}>21/09/2021 8:00</Text>
                    <RotateCw color="white"/> */}
                </View>
            </View>
            <ScrollView>
                <View style={styles.astroHeader}>
                    <Image source={{uri: astroList[astro.name].image }} style={styles.astroImage} />
                    <Text style={styles.astroPositionTitle}> AZ: <Text style={styles.astroPositionValue}>{azWithMovement.toFixed(2)}</Text> </Text>
                    <Text style={styles.astroPositionTitle}> ALT: <Text style={styles.astroPositionValue}>{altWthMovement.toFixed(2)}</Text> </Text>
                    
                    
                        <>
                            <TouchableOpacity style={styles.astroPositionButton} onPress={handleAstroPosition}>
                                <Text style={styles.astroPositionButtontext}>POSICIONAR TELESCÓPIO</Text>
                            </TouchableOpacity>
                            <View style={styles.telescopeControl}>
                                <TouchableOpacity style={styles.arrowUp} onPress={handleMoveUp} >
                                    <Image source={require("../../assets/up.png")} style={styles.arrow} /> 
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.arrowLeft} onPress={handleMoveLeft}>
                                    <Image source={require("../../assets/left.png")} style={styles.arrow}  />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.arrowRight} onPress={handleMoveRight}>
                                    <Image source={require("../../assets/right.png")} style={styles.arrow}  />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.arrowDown} onPress={handleMoveDown}>
                                    <Image source={require("../../assets/down.png")} style={styles.arrow}  />
                                </TouchableOpacity>
                            </View>
                        </>
                        
                </View>

                <View style={styles.astroInfo}>
                    <View style={styles.container}>
                        <Text style={styles.astroTitle}>{ astroList[astro.name].name.charAt(0).toUpperCase() + astroList[astro.name].name.slice(1) }</Text>
                        <View style={styles.astroDescription}>
                            <Text style={styles.astroCategory}>{ astroList[astro.name].category.charAt(0).toUpperCase() + astroList[astro.name].category.slice(1) }</Text>
                        </View>
                        
                        <Text style={styles.astroMoreInfos}>{ astroList[astro.name].description }</Text>

                        <View style={styles.astroGalery}>
                            <Text style={styles.astroGaleryTitle}>Galeria</Text>
                            <ScrollView horizontal>
                              { astroList[astro.name].galery.map((image: string) => (
                                <Image key={image} source={{uri: image }} style={styles.astroGaleryImage} />
                              ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}