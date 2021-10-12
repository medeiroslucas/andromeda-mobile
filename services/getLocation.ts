import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const getLocation = async() => {
    /*
    const result = await requestMultiple(
      [
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
      ]).then((statuses: any) => {
        const statusFine = statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];
        const statusBack = statuses[PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION]; 
        // Em APIs do Android abaixo da 29 não é necessário permissão para background location,
        // apenas solicitar acesso ao GPS já oferece tudo que é necessário para utilizar a localização em primeiro e segundo plano.
        // Nesse caso, apenas verificamos se a autorização do GPS é positiva
        if (Platform.Version < 29) { 
          if (statusFine == 'granted') {
            return true;
          } else {
            // 'Usuário não aceitou solicitação de uso do GPS'
          }
        }
        // Caso a API seja > 29, é necessário verificar se ambas as autorizações foram positivas.
        else {
          if (statusFine == 'granted' && statusBack == 'granted') {
            return true;
          } else {
            // 'Usuário não aceitou solicitação de uso do GPS'
          }
        } 
      },
    );

    if (result) {
      Geolocation.getCurrentPosition(
        ({ coords }: {coords: {latitude: number, longitude: number}}) => {
          return {
            latitude: coords.latitude,
            longitude: coords.longitude,
          }
        }, (error: any) => {
          // 'Não foi possível obter a localização'
        }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, showLocationDialog: true } 
      )
    }
    */

    return {
        latitude: -16.6653,
        longitude: -46.2702
    }
}