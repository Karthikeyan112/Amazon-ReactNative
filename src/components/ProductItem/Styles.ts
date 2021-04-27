import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginVertical: 5
  },
  right: {
    padding: 10,
    flex: 3
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
    marginLeft: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  price: {
    fontSize: 18,
    fontWeight: '600'
  },
  star: {
    margin: 2
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'line-through'
  }
});

export default styles;
