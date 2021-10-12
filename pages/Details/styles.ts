import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 24
    },

    image: {
        width: '100%',
        height: '100%',
        flex: 1 
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    infoDatetime: {
        color: '#fff',
        fontSize: 14
    },

    astroHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 32
    },

    astroImage: {
        height: 200,
        width: 200,
        marginBottom: 8
    },

    astroPositionTitle: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 8
    },
    astroPositionValue: {
        color: '#fff',
    },

    astroInfo: {
        backgroundColor: '#2E3D5A',
        height: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },

    astroTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },

    astroDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24
    },

    astroCategory: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff'
    },

    astroDistance: {
        alignItems: 'flex-end'
    },

    astroDistanceValue: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },

    astroDistanceDescription: {
        color: '#fff'
    },

    astroMoreInfos: {
        color: '#fff'
    },
    
    astroBirth: {
        color: '#fff',
        fontWeight: '500'
    },

    astroGalery: {
        marginTop: 24
    },

    astroGaleryTitle: {
        color: '#fff',
        fontSize: 18,,
        marginBottom: 8
    },

    astroGaleryImage: {
        width: 160,
        marginRight: 20
    }
});