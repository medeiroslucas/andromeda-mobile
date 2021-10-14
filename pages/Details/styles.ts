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
        justifyContent: 'space-between',
        paddingBottom: 16
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

    astroPositionButton: {
        marginVertical: 24,
        backgroundColor: '#5833A5',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4
    },

    astroPositionButtontext: {
        color: '#fff',
        fontSize: 20
    },

    astroInfo: {
        backgroundColor: '#2E3D5A',
        height: '100%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingBottom: 40
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
        fontWeight: '500',
        marginBottom: 8
    },

    astroGalery: {
        marginTop: 24
    },

    astroGaleryTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8
    },

    astroGaleryImage: {
        width: 160,
        height: 120,
        marginRight: 16,
        borderRadius: 8
    },

    telescopeControl: {
        position: 'relative',
        height: 130,
        width: 130,
        backgroundColor: '#5833A5',
        borderRadius: 65,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    controlIcon: {
        color: '#fff',
        height: 200,
        width: 200,
    },

    arrow: {
        width: 37,
        height: 37
    },

    arrowUp: {
        position: 'absolute',
        top: 5,
        left: '50%',
        transform: [{ translateX: -19 }]
    },

    arrowDown: {
        position: 'absolute',
        bottom: 5,
        left: '50%',
        transform: [{ translateX: -19 }]
    },

    arrowRight: {
        position: 'absolute',
        right: 5,
        top: '50%',
        transform: [{ translateY: -20 }]
    },

    arrowLeft: {
        position: 'absolute',
        left: 5,
        top: '50%',
        transform: [{ translateY: -20 }]
    }
});