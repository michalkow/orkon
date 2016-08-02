'use strict';
import styles from '../styles/style.js';
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import List from './ui/List.js';

import { connect } from 'react-redux';
import { getRoute, navigate } from '../router.js';
import { selectLarps, setNavbarTitles } from '../redux/actions.js';


function mapStateToProps(state) {
  return {
    larps: state.larps,
  };
}

class Larps extends Component {
  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.larps.items)
  };
  selectLarp = (data) => {
    console.log(data);
    this.props.dispatch(selectLarps(data));
    navigate(this.props.navigator, 'Larp');
  };
  render() {
    return (
      <View style={styles.scene}>
        <ListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(larp) => 
            <List 
              data={larp}
              onPress={(data) => this.selectLarp(data)}
              avatar={larp.avatar} 
              primaryText={larp.name} 
              secondaryText={larp.system} 
              captionText={larp.date} 
              noteText={larp.daytime} />} 
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(Larps)