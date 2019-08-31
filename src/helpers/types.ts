import {NavigationScreenProp, NavigationState} from 'react-navigation';

export type Navigation<NavigationParams = {}> = NavigationScreenProp<
  NavigationState,
  NavigationParams
>;
