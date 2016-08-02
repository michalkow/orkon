export var selectLarps = (selected) => {
  return {
    type: 'SELECT_LARPS',
    selected: selected
  }
} 

export var selectOrganizers = (selected) => {
  return {
    type: 'SELECT_ORGANIZERS',
    selected: selected
  }
} 

export var selectOrganizers = (selected) => {
  return {
    type: 'SET_NAVBAR_TITLES',
    subtitle: subtitle
  }
} 

export var changeRoute = (route) => {
  return {
    type: 'CHANGE_ROUTE',
    route: {
      name: route.name,
      index: route.index,
      props: route.props || {},
      onFocus: route.onFocus
    }
  }
}

