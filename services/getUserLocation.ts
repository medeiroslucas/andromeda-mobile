import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export type UserCoords = {
    longitude: number;
    latitude: number;
}

export const getUserLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});

    if (location) {
        const { latitude, longitude } = location.coords
        return { latitude, longitude }
    }
}

export const requestUserLocationPermission = async () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
        throw('Oops, this will not work on Snack in an Android emulator. Try it on your device!');
    }

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        throw('É necessário o acesso à sua localização para o uso do aplicativo!');
    }

    return await getUserLocation();
}