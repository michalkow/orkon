'use strict';
import styles from '../styles/style.js';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    Linking,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { getRoute, navigate } from '../router.js';
import { selectLarps } from '../redux/actions.js';
import Button from './ui/Button.js';

function mapStateToProps(state) {
  return {
    organizers: state.organizers,
  };
}

const messengerlogo = require('../img/messengerlogo.png');
 
export class Organizer extends Component {
  render() {
  	var organizer = this.props.organizers.selected;
  	if(organizer) return (
  		<View style={{flex: 1, backgroundColor: '#111111'}}>
		  	<Image style={{flex: 1, flexDirection: 'column', width: null, height: null}} source={(organizer.picture || require('../img/kaja.jpg'))}>
		  	  <View style={{flex: 1}} />
    			<View style={{height: 64, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <Button style={{backgroundColor: '#0084FF'}} icon={messengerlogo} text={"Messenger"} onPress={(organizer.msglink ? (() => Linking.openURL(organizer.msglink)):null)} />
          </View>
		  	</Image>
  		</View>
  	);
  	else return (
      <View style={styles.scene}>
      	<Text>{"Błąd"}</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(Organizer)