import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../colors';
import {ActivityIndicator} from 'react-native-paper';

export default function index() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
        style={{marginTop: -35}}
        animating={true}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
