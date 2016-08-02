'use strict';
import styles from '../styles/style.js';
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import List from './ui/List.js';

import { connect } from 'react-redux';
import { getRoute, navigate } from '../router.js';
import { selectOrganizers, setNavbarTitles } from '../redux/actions.js';


function mapStateToProps(state) {
  return {
    organizers: state.organizers,
  };
}

class Organizers extends Component {
  state = {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.organizers.items)
  };
  selectOrganizer = (org) => {
    console.log(org);
    this.props.dispatch(selectOrganizers(org));
    this.props.dispatch(setNavbarTitles(org.name));
    navigate(this.props.navigator, 'Organizer');
  };
  render() {
    return (
      <View style={styles.scene}>
        <ListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(org) => 
            <List 
              data={org}
              onPress={(data) => this.selectOrganizer(data)}
              avatar={org.picture} 
              primaryText={org.name} 
              secondaryText={org.role} 
              captionText={""} 
              noteText={""} />} 
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(Organizers)