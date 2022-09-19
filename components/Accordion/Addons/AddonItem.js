import {View, Pressable, Text, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {Checkbox, List} from 'react-native-paper';
import colors from '../../../colors';
import AddonContext from '../../../context/addon/AddonContext';

export default function AddonItem() {
  // context to update addon quantity
  const {setAddonQuantity, addonQuantity} = useContext(AddonContext);

  // state to check checkbox
  const [checked, setChecked] = useState(false);

  // quantity state for this addon item
  const [quantity, setQuantity] = useState([]);

  const styles = StyleSheet.create({
    parent: {
      backgroundColor: 'white',
    },
    row: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    quantity: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 10,
      display: checked === true ? 'flex' : 'none',
      alignItems: 'center',
    },
    inner: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
    },
    text: {
      marginLeft: 10,
    },
  });

  const handleQuantity = condition => {
    if (condition === '+') {
      setQuantity(quantity + 1);
      // const newQuantity = quantity + 1;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleOnPressAddon = () => {
    // check if the "checked" state is false or not, if it is false make it true and add quantity one, if it is checked and user clicks again, than make the "checked" state false and "quantity" state null
    if (checked === false) {
      setChecked(true);
      setQuantity(1);
      // setAddonQuantity(addonQuantity.concat({addon: 'addon', quantity: 1}));
    } else {
      setChecked(false);
      setQuantity([]);
    }
  };

  return (
    <View style={styles.parent}>
      <Pressable style={styles.row} onPress={() => handleOnPressAddon()}>
        <View style={styles.inner}>
          <Checkbox
            status={checked === false ? 'unchecked' : 'checked'}
            color={colors.primary}
            value="hello"
          />
          <Text style={styles.text}>Hello</Text>
        </View>
        <View>
          <Text style={{marginRight: 30}}>PKR 150</Text>
        </View>
      </Pressable>
      <View style={styles.quantity}>
        <Pressable onPress={() => handleQuantity('-')}>
          <List.Icon icon="minus" color={colors.primary} />
        </Pressable>
        <Text style={{color: colors.primary}}>{quantity}</Text>
        <Pressable onPress={() => handleQuantity('+')}>
          <List.Icon icon="plus" color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
}
