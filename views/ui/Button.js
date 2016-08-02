import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback 
} from 'react-native';
import React, {
    Component,
} from 'react';

export default class Button extends Component {
	render() {
    var {
      text,
      textStyle,
      style,
      icon,
      onPress,
      disabled
    } = this.props;
    var disabledStyle = {};
    if(disabled || !onPress) disabledStyle.backgroundColor = '#cccccc';
    var buttonStyle = Object.assign({
    	backgroundColor: '#333333', 
    	height: 44, 
    	flexDirection: 'row', 
    	marginBottom: 10, 
    	alignSelf: 'stretch', 
    	justifyContent: 'center', 
    	alignItems: 'center' 
    }, style, disabledStyle);
    var buttonTextStyle = Object.assign({
			fontSize: 16, 
			color: '#ffffff'
    }, textStyle);
    var button = (        
    	<View style={buttonStyle}>
		  	{(icon ? (<Image style={{width: 22, height: 22, marginRight: 10}} source={icon} />) : null)}
		 		<Text style={buttonTextStyle}>{text}</Text>
      </View>
    );
    if(!onPress) return button;
		else return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={onPress}>
      	{button}
      </TouchableNativeFeedback>
    )
	}
}