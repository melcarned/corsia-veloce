import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabs: {
    backgroundColor: 'black',
    color: 'black',
  },
  restaurantImage: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 125,
  },
  logo: {
    color: 'black',
    fontSize: 75,
    fontFamily: 'ItalianBreakfastRegular',
  },
  text: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
    color: 'black',
  },
});

