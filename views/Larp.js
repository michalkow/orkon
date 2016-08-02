'use strict';
import styles, {MUTE_COLOR, LINK_COLOR, TEXT_COLOR, HEADER_COLOR} from '../styles/style.js';
import Button from './ui/Button.js';
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
import { selectLarps, selectOrganizers, setNavbarTitles } from '../redux/actions.js';


function mapStateToProps(state) {
  return {
    larps: state.larps,
  };
}

const fblogo = require('../img/fblogo.png');
const messengerlogo = require('../img/messengerlogo.png');
const maillogo = require('../img/mail.png');
 
export class Larp extends Component {
  viewOrganizer = (org) => {
    this.props.dispatch(selectOrganizers(org));
    this.props.dispatch(setNavbarTitles(org.name));
    navigate(this.props.navigator, 'Organizer');
  };
  render() {
  	var larp = this.props.larps.selected;
  	if(larp) return (
    	<View style={styles.scene}>
    		<View style={{height: 180, backgroundColor: '#000000'}}>
  		  	<Image style={{flex: 1, flexDirection: 'column', width: null, height: null}} source={(larp.drop || require('../img/drop1.jpg'))}>
  		  	  <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0)'}}>
		    			<View style={{position: 'absolute', right: 16, top: 16}}>
		    				<TouchableHighlight onPress={() => Linking.openURL(larp.fblink)}>
		    					<Image style={{width: 22, height: 22}} source={fblogo} />
		    				</TouchableHighlight>
		    			</View>
  					</View>
	    			<View style={{height: 80, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0.5)'}}>
	    				<View style={{flex: 1, flexDirection: 'row'}}>
	    					<View style={{flex: 1, flexDirection: 'column'}}>
			    				<Text style={{color: '#ffffff', fontSize: 18}}>{larp.name}</Text>
			    				<Text style={{color: '#dddddd'}}>{larp.system}</Text>
	    					</View>
	    					<View style={{width: 80, alignItems: 'flex-end'}}>
			    				<Text style={{color: '#dddddd'}}>{larp.date}</Text>
			    				<Text style={{color: '#dddddd'}}>{larp.daytime}</Text>
	    					</View>
	    				</View>
	    			</View>
  		  	</Image>
    		</View>
    		<View style={styles.larpBody}>
    			<ScrollView>
	          <Header text={"Wprowadzenie:"} />     
	          <TextBloc text={larp.desc} />
	          <Header text={"Organizatorzy:"} />   
	          {((typeof larp.organizers === 'string') ? (<TextBloc text={larp.organizers} />) : (larp.organizers.map((org) => <Organizer onPress={(data) => this.viewOrganizer(data)} key={org.name} data={org} />)))}
	         	<Header text={"Kontakt:"} />   
	         	<View style={{ paddingLeft: 16, paddingRight: 16  }}>
		          <Button style={{backgroundColor: '#E75A4D'}} icon={maillogo} text={"Email"} onPress={(larp.email ? (() => Linking.openURL("mailto:"+larp.email)):null)} />
		          <Button style={{backgroundColor: '#0084FF'}} icon={messengerlogo} text={"Messenger"} onPress={(larp.msglink ? (() => Linking.openURL(larp.msglink)):null)} />
						</View>
          </ScrollView>
    		</View>
    	</View>
  	);
  	else return (
      <View style={styles.scene}>
      	<Text>{"Błąd"}</Text>
      </View>
    );
  }
}

export class Header extends Component {
	render() {
		return(
			<View style={{ padding: 16 }}>
        <Text style={{ color: HEADER_COLOR, fontWeight: '500' }}>
          {this.props.text}
        </Text>
      </View>
	  );
	}
}

export class TextBloc extends Component {
	render() {
		return(
			<View style={{ paddingLeft: 16, paddingRight: 16  }}>
        <Text style={{ color: TEXT_COLOR }}>
          {this.props.text}
        </Text>
      </View>
	  );
	}
}

export class Organizer extends Component {
  render() {
    var {
      data,
      name,
      picture,
      note,
      style,
      onPress
    } = this.props;
    var disabledStyle = {};
    var orgStyle = Object.assign({
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      height: 30,
      alignItems: 'center',
    }, style, disabledStyle);
    var orgTextColor = (data.note ? MUTE_COLOR : (data.picture ? LINK_COLOR : TEXT_COLOR));
    var button = (        
      <View style={{flex: 1}}>
        <View style={orgStyle}>
          {(data.picture ? (<View style={{width: 36, justifyContent: 'center'}}>
              <Image style={{height: 24, width: 24, borderRadius: 24}} source={data.picture} />
          </View>) : null)}
          <View style={{flex:1, justifyContent:'center'}}>
            <Text numberOfLines={1} style={{fontSize: 14, color: orgTextColor}}>{(data.role ? (data.name+" "+data.role) : data.name)}</Text>
          </View>
        </View>
      </View>
    );
    if(!data.picture) return button;
    else return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => onPress(this.props.data)}>
        {button}
      </TouchableNativeFeedback>
    )
  }
}


export default connect(
  mapStateToProps
)(Larp)