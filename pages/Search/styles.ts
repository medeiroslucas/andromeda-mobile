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
  
  welcomeTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 8
  },

  welcomeCaption: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400'
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    marginVertical: 24,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  searchInput: {
    height: 48,
    width: '100%',
  },

  searchIcon: {
    height: 24,
    width: 24
  },

  filtersSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  
  filterButton: {
    width: '48%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5833A5',
  },
  
  filterTitle: {
    height: '100%',
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});
