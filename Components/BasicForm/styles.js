import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    padding: 20,
    margin: 15,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    padding: 20,
    backgroundColor: '#004C6B',
    color: '#ffff',
    fontSize: 24,
    textAlign: 'center',
  },
  normalBox: {
    borderColor: '#E8E8E8',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    color: 'gray',
  },
  label: {
    color: '#25272B',
    fontSize: 14,
    marginBottom: 3,
  },
  terms: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  termslabel: {
    color: '#25272B',
    fontSize: 14,
    marginLeft: 3,
  },
});
