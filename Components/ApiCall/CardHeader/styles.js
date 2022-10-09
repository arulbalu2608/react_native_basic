import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7FB',
  },
  title: {
    padding: hp('2%'),
    color: 'black',
    fontSize: hp('3%'),
  },
  content: {
    paddingHorizontal: hp('2%'),
    color: 'black',
    fontSize: hp('2%'),
  },
});
