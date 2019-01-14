import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View
} from 'react-native';

import Torch from 'react-native-torch';

import {
  POWER,
} from './assets/images';

export default class App extends Component {
  state = {
    isAlight: false
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              isAlight: !this.state.isAlight
            })
            Torch.switchState(this.state.isAlight)
          }}
        >
          <Image
            style={styles.btnImage}
            source={POWER}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  btnImage: {
    width: 100,
    height: 100,
  },
});
