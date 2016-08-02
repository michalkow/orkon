'use strict';
import {
  StyleSheet
} from 'react-native';

export const STATUSBAR_COLOR = "#2D5025";
export const TOOLBAR_COLOR = "#529143";
export const TOOLBAR_TITLE_COLOR = "#ffffff";
export const TOOLBAR_SUBTITLE_COLOR = "#ffffff";

export const BACKGROUND_COLOR = "#ffffff";
export const HEADER_COLOR = "#333333";
export const TEXT_COLOR = "#000000";
export const DIVIDER_COLOR = "rgba(0,0,0,.12)";
export const MUTE_COLOR = "rgba(0,0,0,.45)";
export const LINK_COLOR = "#529143";


/*
export const STATUSBAR_COLOR = "#000000";
export const TOOLBAR_COLOR = "#333333";
export const TOOLBAR_TITLE_COLOR = "#ffffff";
//export const STATUSBAR_COLOR = "#54381C";
//export const TOOLBAR_COLOR = "#963";
export const TOOLBAR_SUBTITLE_COLOR = "#ffffff";

export const BACKGROUND_COLOR = "#E5E5E5";
export const HEADER_COLOR = "#333333";
export const TEXT_COLOR = "#000000";
export const DIVIDER_COLOR = "#ccc";
export const MUTE_COLOR = "#999";
export const LINK_COLOR = "#963";
*/

export default StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 56,
    backgroundColor: BACKGROUND_COLOR
  },
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignSelf: 'flex-start',
    backgroundColor: TOOLBAR_COLOR,
    height: 56,
  },
  larpBody: {
    flex: 1, 
    backgroundColor: BACKGROUND_COLOR
  },
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