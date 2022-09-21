import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MenuItem from '../components/MenuItem';
import axios from 'axios';
import {getAllCats} from '../utils/apis';
import Container from 'toastify-react-native';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../colors';

export default function Menu({navigation}) {
  // state for categories
  const [categories, setCategories] = useState(null);

  // loading state
  const [loading, setLoading] = useState(true);

  // handle when someone presses on any menu item
  const handleMenuPress = (title, id) => {
    navigation.navigate('MenuProducts', {
      id: id,
      title: title,
    });
  };

  const getAllCategories = async () => {
    if (categories === null) {
      try {
        const {data} = await axios.get(getAllCats);
        setCategories(data.getCategories);
        setLoading(false);
      } catch (error) {
        console.warn(error);
        Toast.error('Please Check Your Internet Connection!');
        setLoading(false);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <View>
      <View>
        <Container
          duration={2000}
          width={Dimensions.get('window').width - 100}
          height={100}
          position="top"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.header.text}>Menu</Text>
      </View>
      {loading === true ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            animating={true}
            color={colors.primary}
          />
        </View>
      ) : (
        <FlatList
          data={categories}
          style={styles.parent}
          renderItem={({item, index, separators}) => (
            <MenuItem item={item} handleMenuPress={handleMenuPress} />
          )}
        />
        // <ScrollView
        //   style={styles.parent}
        //   showsVerticalScrollIndicator={false}
        //   showsHorizontalScrollIndicator={false}>

        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        //   <MenuItem handleMenuPress={handleMenuPress} />
        // </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 5,
    shadowColor: 'black',
    elevation: 5,
    text: {
      fontFamily: 'Poppins-Medium',
      fontSize: 20,
      color: 'black',
    },
  },
  parent: {
    margin: 15,
  },
  loadingContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
