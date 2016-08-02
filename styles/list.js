'use strict';
import { StyleSheet } from 'react-native';

export const TEXT_COLOR = "#000000";
export const DIVIDER_COLOR = "rgba(0,0,0,.12)";
export const MUTE_COLOR = "rgba(0,0,0,.45)";

export default StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    alignItems: 'center',
  },
  divider: {
      backgroundColor: DIVIDER_COLOR,
      height:1
  },
  leftIcon: {
      width: 56,
  },
  rightIcon: {
      paddingLeft: 16,
  },
  leftAvatar: {
      width: 56,
      justifyContent: 'center'
  },
  rightAvatar: {
      width: 56,
  },
  primaryText: {
      lineHeight: 24,
      fontSize: 16,
      color: TEXT_COLOR
  },
  secondaryText: {
      lineHeight: 22,
      height: 18,
      fontSize: 14,
      color: MUTE_COLOR
  },
  firstLine: {
      flexDirection: 'row'
  },
  primaryTextContainer: {
      flex: 1,
      paddingRight: 16
  },
  captionText: {
      fontSize: 12,
      color: MUTE_COLOR
  },
  captionTextContainer: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start'
  },
  captionTextContainer2: {
      alignSelf: 'flex-end',
      alignItems: 'flex-end'
  }
});