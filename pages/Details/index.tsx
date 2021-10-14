import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ArrowLeft, RotateCw } from 'react-native-feather';
import { Astro } from '../../astros';
import { moveDown, moveLeft, moveRight, moveUp } from '../../services/telescopeAdjustments';

import { styles } from './styles';
type DetailsProps = {
  astro: Astro;
  navigation: any;
}

export default function Details({ route, navigation }) {
    const { astro } = route.params;

    const [azWithMovement, setAzWithMovement] = useState(astro.az);
    const [altWthMovement, setAltWthMovement] = useState(astro.alt);

    const azm = "+143º 12’ 38.64’’"
    const alt = "+16º 29’ 55.70’’"

    function handleAstroPosition() {
        alert('Az: , Alt:')
    }

    function handleMoveUp() {
        const result = moveUp(altWthMovement);
        setAltWthMovement(result);
    }
    
    function handleMoveDown() {
        const result = moveDown(altWthMovement);
        setAltWthMovement(result);
    }
    
    function handleMoveLeft() {
        const result = moveLeft(azWithMovement);
        setAzWithMovement(result);
    }
    
    function handleMoveRight() {
        const result = moveRight(azWithMovement);
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
                    <TouchableHighlight onPress={() => navigation.goBack()}>
                      <ArrowLeft color="white"/>
                    </TouchableHighlight>
                    {/* <Text style={styles.infoDatetime}>21/09/2021 8:00</Text>
                    <RotateCw color="white"/> */}
                </View>
            </View>
            <ScrollView>
                <View style={styles.astroHeader}>
        <Image source={{uri: astro.image }} style={styles.astroImage} />
                    <Text style={styles.astroPositionTitle}> AZ: <Text style={styles.astroPositionValue}>{azWithMovement}</Text> </Text>
                    <Text style={styles.astroPositionTitle}> ALT: <Text style={styles.astroPositionValue}>{altWthMovement}</Text> </Text>
                    
                    {astro.alt >= 0 ? 
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
                        :
                        <></>
                    }
                </View>

                <View style={styles.astroInfo}>
                    <View style={styles.container}>
                        <Text style={styles.astroTitle}>{astro.name}</Text>
                        <View style={styles.astroDescription}>
                            <Text style={styles.astroCategory}>{ astro.category }</Text>
                        </View>
                        
                        <Text style={styles.astroMoreInfos}>{ astro.description }</Text>

                        <View style={styles.astroGalery}>
                            <Text style={styles.astroGaleryTitle}>Galeria</Text>
                            <ScrollView horizontal>
                                { astro.galery.map((image: string) => (
                                    <Image source={{uri: image }} style={styles.astroGaleryImage} />
                                )) }                     
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}


{/* <View style={styles.container}>
    <View style={styles.header}>
        <ArrowLeft color="white"/>
        <Text style={styles.infoDatetime}>21/09/2021 8:00</Text>
        <RotateCw color="white"/>
    </View>
</View>
<ScrollView>
    <View style={styles.astroHeader}>
        <Image source={{uri: astro.image }} style={styles.astroImage} />
        <Text style={styles.astroPositionTitle}> AZM: <Text style={styles.astroPositionValue}>{ astro.az }</Text> </Text>
        <Text style={styles.astroPositionTitle}> ALT: <Text style={styles.astroPositionValue}>{ astro.alt }</Text> </Text>
        <TouchableOpacity style={styles.astroPositionButton} onPress={handleAstroPosition}>
            <Text style={styles.astroPositionButtontext}>POSICIONAR TELESCÓPIO</Text>
        </TouchableOpacity>
        <View style={styles.telescopeControl}>
            <TouchableOpacity style={styles.arrowUp} onPress={() => {moveUp(1,1)}} >
                <Image source={require("../../assets/up.png")} style={styles.arrow} /> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowLeft} onPress={() => {moveLeft(1,1)}}>
                <Image source={require("../../assets/left.png")} style={styles.arrow}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowRight} onPress={() => {moveRight(1,1)}}>
                <Image source={require("../../assets/right.png")} style={styles.arrow}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowDown} onPress={() => {moveDown(1,1)}}>
                <Image source={require("../../assets/down.png")} style={styles.arrow}  />
            </TouchableOpacity>
        </View>
    </View>

    <View style={styles.astroInfo}>
        <View style={styles.container}>
            <Text style={styles.astroTitle}>{ astro.name }</Text>
            <View style={styles.astroDescription}>
                <Text style={styles.astroCategory}>{ astro.category }</Text>
            </View>
            
            <Text style={styles.astroMoreInfos}>{ astro.description }</Text>

            <View style={styles.astroGalery}>
                <Text style={styles.astroGaleryTitle}>Galeria</Text>
                <ScrollView horizontal>
                    { astro.galery.map(image => (
                        <Image source={{uri: image }} style={styles.astroGaleryImage} />
                    )) }                     
                </ScrollView>
            </View>
        </View>
    </View>
</ScrollView> */}