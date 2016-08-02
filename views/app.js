import React, { Component } from 'react';
import styles, { STATUSBAR_COLOR, TOOLBAR_TITLE_COLOR, TOOLBAR_SUBTITLE_COLOR } from '../styles/style.js';
import { connect } from 'react-redux';
import { getRoute, getRouteStack, navigate } from '../router.js';
import { changeRoute } from '../redux/actions.js';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  Navigator,
  TouchableHighlight,
  TouchableNativeFeedback,
  DeviceEventEmitter,
  ViewPagerAndroid,
  ToolbarAndroid,
  AsyncStorage,
  NetInfo,
  BackAndroid,
  StatusBar
} from 'react-native';

const backicon = require('../img/back.png');

function mapStateToProps(state) {
  return {
    navbar: state.navbar,
    router: state.router
  };
}
class App extends Component {
  state = {
    initialRoute: getRoute("Dashboard"),
    statusbarVisible: true,
  };
  componentDidMount() {
    console.log("App", "Redux", this.props.navbar);
    let route = getRoute("Dashboard");
    this.props.dispatch(changeRoute(route));
    this.props.dispatch(setNavbarTitles(route.subtitle));
    // Color of the statusbar
    //StatusBarAndroid.setHexColor('#1A4F82');
    // Check if connected and get data form the storage or internet
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log("App", "isConnected", isConnected);
    }); 

    BackAndroid.addEventListener('hardwareBackPress', () => {
      console.log("App", "onPop", this.props.router.route.name);
      if(this.navigator && this.props.router.route.name != "Dashboard") {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  }
  _onDidFocus = (e) => {
    var route = e.data.route;
    console.log('ROUTER', route, this.props.router)
    if(route.name != this.props.router.route.name) {
      // Route change!
      this.props.dispatch(changeRoute(route));
      if(route.subtitle) this.props.dispatch(setNavbarTitles(route.subtitle));
    }
  };
  logout() {

  }
  onActionSelected = (i) => {
    if(i==0) navigate(this.navigator, 'Dashboard');  
    else if(i==1) navigate(this.navigator, 'Organizers');  
    //else if(i==2) this.logout();
  };
  render() {
    var navIcon = null;
    var actions = [
      {title: 'Larpy'},
      {title: 'Organizatorzy'}
    ];
    if(this.props.router.route.name == "Login") actions = [];
    if(this.props.router.route.name && this.props.router.route.name != "Dashboard") navIcon = backicon;
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={STATUSBAR_COLOR}
          barStyle="light-content" 
        />
        <Navigator 
          style={{flex: 1, flexDirection: 'column'}}
          sceneStyle={{alignSelf: 'flex-end'}}
          initialRoute={getRoute('Dashboard')}
          initialRouteStack={getRouteStack()}
          navigationBar={(
            <ToolbarAndroid
              navIcon={navIcon}
              style={styles.toolbar}
              title="Orkon 2016"
              titleColor={TOOLBAR_TITLE_COLOR}
              onIconClicked={() => this.navigator && this.navigator.pop()}
              subtitle={this.props.navbar.subtitle}
              subtitleColor={TOOLBAR_SUBTITLE_COLOR}
              actions={actions}
              onActionSelected={(index) => this.onActionSelected(index)} />
          )}
          ref={navigator => {
            this.navigator = navigator;
            navigator && navigator.navigationContext.addListener('didfocus', (e) => this._onDidFocus(e));
          }}
          renderScene={(route, navigator) => {
              console.log(route);
              return (<route.component logout={this.logout} route={route} navigator={navigator} />);
            }
          } 
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(App)
