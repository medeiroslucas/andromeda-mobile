import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 176,
    width: 176,
    backgroundColor: '#141A26',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 8,
    marginRight: 12
  },

  images: {
    alignItems: 'flex-end'
  },

  astro: {
    position: "absolute",
    top: '-30%',
    left: '-20%',
    transform: [{ translateY: -30 }],
    height: 136,
    width: 136,
  },

  gps: {
    height: 24,
    width: 24,
  },

  astroTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 8
  },

  astroVisibility: {
    fontSize: 14,
    color: '#fff',
  }
});
