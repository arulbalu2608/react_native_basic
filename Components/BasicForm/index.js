import React, {useState} from 'react';
import {Button, Alert, Text, View, TextInput, Switch} from 'react-native';
import {styles} from './styles';

function BasicForm() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isaccept, setisaccept] = useState(true);

  const toggleSwitch = () => setisaccept(!isaccept);

  const handleSubmit = () => {
    isaccept
      ? Alert.alert('User Value', `Email: ${email} \n \n Password: ${password}`)
      : Alert.alert('Error', 'Accept Terms and conditions to continue');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Form</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.normalBox}
          value={email}
          onChangeText={setemail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.normalBox}
          secureTextEntry={true}
          value={password}
          onChangeText={setpassword}
        />
        <View style={styles.terms}>
          <Switch
            onChange={toggleSwitch}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            value={isaccept}
          />
          <Text style={styles.termslabel}>Accept Terms and Conditions</Text>
        </View>

        <Button title="Login" color="#f194ff" onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default BasicForm;
