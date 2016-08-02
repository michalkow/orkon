import Dashboard from './views/dashboard.js';
import Larp from './views/Larp.js';
import Organizer from './views/Organizer.js';
import Organizers from './views/Organizers.js';

export var routes = [
  {name: 'Dashboard', subtitle: 'Larpy', component: Dashboard, index: 1},
  {name: 'Organizers', subtitle: 'Organizatorzy', component: Organizers, index: 2},
  {name: 'Larp', subtitle: 'Larp', component: Larp, index: 3},
  {name: 'Organizer', subtitle: null, component: Organizer, index: 4},
];

export var getRoute = (name) => {
  for (var i = 0; i < routes.length; i++) {
    if(name == routes[i].name) return routes[i];
  };
}

export var getRouteStack = () => {
  return [
    routes[0]
  ];
}

export var navigate = (navigator, name) => {
  if(navigator) {
    var currentStack = navigator.getCurrentRoutes();
    for (var i = 0; i < currentStack.length; i++) {
      if(name == currentStack[i].name) return navigator.jumpTo(currentStack[i]);
    };
    return navigator.push(getRoute(name));
  }
}
