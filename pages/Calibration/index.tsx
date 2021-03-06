import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getAstros } from '../../services/getAstros';
import { getUserLocation, requestUserLocationPermission, UserCoords } from '../../services/getUserLocation';
import { moveDown, moveLeft, moveRight, moveUp } from '../../services/telescopeAdjustments';
import { astroList } from '../../astros';
import { styles } from './styles';

type SelectableAstro = {
  name: string,
  image: string
}

export default function Calibration({ route, navigation }: any) {
    const emptyList: SelectableAstro[] = [];
    const [selectableAstroList, setSelectableAstroList] = useState<SelectableAstro[] | undefined>(emptyList);
    const [selectedValue, setSelectedValue] = useState("Lua");
    const [isLoading, setLoading] = useState(true);

    const [dx, setDx] = useState(0);
    const [dy, setDy] = useState(0);

    useEffect(() => {
      handleUserLocationPermission();
    }, []);

    const handleUserLocationPermission = async() => {
      await getUserLocation()
        .catch(_ => {
          Alert.alert(
            'Acessar localização',
            'Para o uso do aplicativo, é necessário o acesso à sua localização para sabermos quais astros são visiveis da sua posição.',
            [{ text: 'OK', onPress: () => { getData() } }],
            { cancelable: false }
          )
        })
        .then(userLocation => userLocation && setUserLocation(userLocation));
    }

    const setUserLocation = async (userLocation: UserCoords) => {
      if (userLocation) {
        //console.log(userLocation);
        const astros = await getAstros(userLocation);
        console.log(astros)
        const list: SelectableAstro[] = []
        if(astros) {
          for(const astro of astros) {
            list.push({
              name: astro.name, 
              image: astroList[astro.name].image
            })
          }
          setSelectableAstroList(list);
        }
      }
      
      setLoading(false)
    }

    const getData = async () => {
      await requestUserLocationPermission()
        .catch((error) => {
          Alert.alert('', error)
        })
        .then(userLocation => userLocation && setUserLocation(userLocation));
    }

    function handleAstroPosition() {
        // pega as coordenadas do astro
        // const az = astro.az
        // const alt = astro.alt
        // envia_para_a_esp(az, alt)
    }

    function handleMoveUp() {
        const newDx = moveUp(dx);
        console.log('Deslocamento para cima. dx = ' + newDx);
        setDx(newDx);
    }
    
    function handleMoveDown() {
        const newDx = moveDown(dx);
        console.log('Deslocamento para baixo. dx = ' + newDx);
        setDx(newDx);
    }
    
    function handleMoveLeft() {
        const newDy = moveLeft(dy);
        console.log('Deslocamento para esquerda. dy = ' + newDy);
        setDy(newDy);
    }
    
    function handleMoveRight() {
        const newDy = moveRight(dy);
        console.log('Deslocamento para direita. dy = ' + newDy);
        setDy(newDy);
    }

    function finishButton() {
        navigation.navigate('Home');
    }

    function cancelButton() {
        setDx(0);
        setDy(0);
        navigation.navigate('Home');
    }

    function getImage(selected : string) {
      if(selectableAstroList) {
        for(const astro of selectableAstroList) {
          if(astroList[astro.name].name === selected) {
            return astroList[astro.name].image;
          }
        }
      }

      return "";
    }

    return(
      <View style={{flex: 1, justifyContent: "space-around"}}>
        <ImageBackground 
          source={{uri: "https://andromeda-pi2.s3.sa-east-1.amazonaws.com/background.png"}} 
          resizeMode="cover" 
          style={styles.image}
        >
          {isLoading ? 
            <ActivityIndicator size="large" color="#fff" style={{marginTop: 80}}/> 
            :
            <>
              <View style={{flex: 1}}>
                <Text style={{color: 'white', textAlign: "center", fontSize: 18}}>Selecione um astro visível como referência:</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 50, width: 150, backgroundColor: 'white' }}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                  {selectableAstroList && selectableAstroList.map(astro => {
                    return <Picker.Item key={astroList[astro.name].name} label={astroList[astro.name].name} value={astroList[astro.name].name} />
                  })}
                </Picker>
              </View>
              <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri: getImage(selectedValue) }} style={styles.astroImage} />
              </View>
              <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                  <View style={styles.telescopeControl}>
                    <TouchableOpacity style={styles.arrowUp} onPress={handleMoveUp}>
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
              </View>
              <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.astroPositionButton} onPress={handleAstroPosition}>
                  <Text style={styles.astroPositionButtontext}>POSICIONAR TELESCÓPIO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.astroPositionButton} onPress={finishButton}>
                  <Text style={styles.astroPositionButtontext}>FINALIZAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.astroPositionButton} onPress={cancelButton}>
                  <Text style={styles.astroPositionButtontext}>CANCELAR</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        </ImageBackground>
      </View>
    )
}
