import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  menu: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
  },
  menuSectionHeader: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  menuSection: {
    paddingBottom: 5,
    borderBottomWidth: 0,
  },
  menuSectionText: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  menuItem: {
    paddingLeft: 0,
    marginLeft: 0,
    borderBottomWidth: 0,
  },
  menuItemBody: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontFamily: 'ProximaNovaAltBold',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  menuItemNote: {
    paddingBottom: 10,
  },
});

