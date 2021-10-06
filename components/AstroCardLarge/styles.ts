import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    backgroundColor: '#141A26',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 16,
    marginBottom: 16
  },

  astroInfo: {
    marginLeft: 80,
    height: '100%'
  },

  astro: {
    position: "absolute",
    top: '-50%',
    left: '-15%',
    height: 136,
    width: 136,
  },

  aim: {
    height: 24,
    width: 24,
  },

  astroTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 8
  },

  astroVisibility: {
    fontSize: 13,
    color: '#fff',
  }
});
