import larps from '../larps.js';
import organizers from '../organizers.js';

export function createReducer(name, customState, customActions) {
  if(!customState) customState = {};
  if(!customActions) customActions = {};
  let initialState = Object.assign({}, customState);
  name = toUndersocore(name);
  return function(rState = initialState, rAction) {
    var defaultActions = Object.assign({
      [`RESET_${name}`](state, action) {
        return Object.assign({}, initialState);
      }
    });
    if(customActions[rAction.type]) return customActions[rAction.type](rState, rAction);
    else if(defaultActions[rAction.type]) return defaultActions[rAction.type](rState, rAction);
    else return rState;
  }
}

export default {
  larps: createReducer('larps', {
    items: larps,
    selected: null
  }, {
    SELECT_LARPS(state, action) {
      return Object.assign({}, state, {
        selected: action.selected
      })         
    }
  }),
  organizers: createReducer('organizers', {
    items: organizers,
    selected: null
  }, {
    SELECT_ORGANIZERS(state, action) {
      return Object.assign({}, state, {
        selected: action.selected
      })         
    }
  }),
  router: createReducer('router', {
    route: {
      name: null,
      subtitle: "",
      index: 0,
      props: {},
      onFocus: null
    },
    lastRoute: null,
    stack: []
  }, {
    CHANGE_ROUTE(state, action) {
      return Object.assign({}, state, {
        lastRoute: state.route,
        route: action.route
      })      
    }   
  }),
  navbar: createReducer('navbar', {
    visible: true,
    subtitle: "Dashboard",
  }, {
    SET_NAVBAR_TITLES(state, action) {
      return Object.assign({}, state, {
        subtitle: action.subtitle
      })      
    },   
    TOGGLE_NAVBAR(state, action) {
      let status = ((typeof(action.status) != "undefined") ? action.status : !state.visible);
      return Object.assign({}, state, {
        visible: status
      })      
    }  
  })
};
