import React from 'react';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';

function NormalSelect(props) {
  const {
    label = '',
    zIndex,
    zIndexInverse,
    open,
    value,
    items,
    setOpen,
    setValue,
    setItems,
  } = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        open={open}
        value={value}
        items={items}
        placeholder="Select"
        style={styles.dropdownContainer}
        dropDownContainerStyle={styles.dropDownContainerStyle}
        placeholderStyle={styles.dropdownPlaceHolder}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}

export default NormalSelect;
