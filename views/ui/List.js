import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableNativeFeedback 
} from 'react-native';
import React, { Component } from 'react';
import styles from '../../styles/style.js';

export default class List extends Component {
    render() {
        var Avatar = null;
        var {
            primaryText,
            secondaryText,
            leftAvatar,
            rightAvatar,
            avatar,
            lines,
            onPress,
            primaryColor,
            secondaryTextMoreLine,
            captionText,
            noteText
        } = this.props;
    
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={() => onPress(this.props.data)}>
                <View>
                    <View style={{flex: 1}}>
                        <View style={styles.listContainer}>
                            {(avatar ? (<View style={styles.leftAvatar}>
                                <Image style={{height: 50, width: 50, borderRadius: 52}} source={avatar} />
                            </View>) : null)}
                            <View style={{flex:1, justifyContent:'center'}}>
                                <View style={styles.firstLine}>
                                    <View style={styles.primaryTextContainer}>
                                        <Text numberOfLines={1} style={styles.primaryText}>{primaryText}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.secondaryText}>{secondaryText.toString()}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <View style={styles.captionTextContainer2}>
                                    <Text style={styles.captionText}>{captionText}</Text>
                                    <Text style={styles.captionText}>{noteText}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.divider} />
                </View>
            </TouchableNativeFeedback>
        )
    }
 
}
