import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  dropdownPlaceHolder: {
    color: '#ABABAB',
  },
  dropdownContainer: {
    borderColor: '#C5C5C5',
    color: '#ABABAB',
    backgroundColor: 'white',
    borderRadius: hp('1%'),
    borderWidth: 1,
    paddingHorizontal: hp('2%'),
    marginBottom: hp('2%'),
  },
  dropDownContainerStyle: {
    // backgroundColor: 'red',
  },
  label: {
    color: '#5A5A5A',
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
  },
});
