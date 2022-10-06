import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  formContainer: {
    width: wp('85%'),
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: '#00B7AC',
    fontWeight: '500',
    fontSize: hp('3%'),
    textAlign: 'center',
    marginBottom: hp('5%'),
  },

  label: {
    color: '#5A5A5A',
    fontSize: hp('2%'),
    marginBottom: hp('1%'),
  },

  normalTextBox: {
    borderColor: '#C5C5C5',
    color: '#ABABAB',
    backgroundColor: 'white',
    borderRadius: hp('1%'),
    borderWidth: 1,
    marginBottom: hp('2%'),
    paddingHorizontal: hp('2%'),
  },

  uploadButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    backgroundColor: 'white',
    borderRadius: hp('1%'),
    borderWidth: 1,
    borderColor: '#ABABAB',
    marginBottom: hp('2%'),
  },

  uploadLabel: {
    color: '#ABABAB',
    marginLeft: hp('1%'),
  },
  normalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    backgroundColor: '#034EA1',
    borderRadius: hp('1%'),
    borderColor: '#034EA1',
    borderWidth: 1,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
  },
});
