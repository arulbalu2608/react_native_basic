import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import NormalSelect from '../Common/NormalSelect';
import upload from '../../assets/icons/logout.png';
import {styles} from './styles';

function EnquiryForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setmessage] = useState('');
  const [isStateOpen, setisStateOpen] = useState(false);
  const [state, setState] = useState(null);
  const [isCityOpen, setisCityOpen] = useState(false);
  const [city, setcity] = useState(null);
  const [stateOption, setStateOption] = useState([
    {label: 'Tamil Nadu', value: '1'},
    {label: 'Kerala', value: '2'},
  ]);
  const [cityOption, setCityOption] = useState([
    {label: 'Chennai', value: '1'},
    {label: 'Trichy', value: '2'},
  ]);

  const handleSubmit = () => {
    console.log('submited');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>How can we help?</Text>

        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.normalTextBox}
          value={name}
          placeholder="Enter your name"
          placeholderTextColor="#ABABAB"
          onChangeText={setName}
        />

        <Text style={styles.label}>Mobile Number *</Text>
        <TextInput
          style={styles.normalTextBox}
          keyboardType="number-pad"
          value={number}
          placeholder="Enter your name"
          placeholderTextColor="#ABABAB"
          onChangeText={setNumber}
        />

        <NormalSelect
          label="State"
          open={isStateOpen}
          value={state}
          items={stateOption}
          placeholder="Select"
          setOpen={setisStateOpen}
          setValue={setState}
          setItems={setStateOption}
          zIndex={1000}
        />

        <NormalSelect
          label="City"
          open={isCityOpen}
          value={city}
          items={cityOption}
          placeholder="Select"
          setOpen={setisCityOpen}
          setValue={setcity}
          setItems={setCityOption}
          zIndex={-1}
        />

        <Text style={styles.label}>Message (optional)</Text>
        <TextInput
          style={styles.normalTextBox}
          multiline
          numberOfLines={4}
          value={message}
          placeholder="Enter here"
          placeholderTextColor="#ABABAB"
          onChangeText={setmessage}
        />

        <Text style={styles.label}>Precsription (optional)</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Image source={upload} />
          <Text style={styles.uploadLabel}>Upload </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.normalButton} onPress={handleSubmit}>
          <Text style={styles.buttonLabel}>Enquiry Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EnquiryForm;
