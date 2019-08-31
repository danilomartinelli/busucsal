import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
  ItineraryScreen,
  navigationOptions as navigationOptionsItinerary,
} from '../containers/ItineraryScreen';
import {
  ItineraryInfoScreen,
  navigationOptions as navigationOptionsItineraryInfo,
} from '../containers/ItineraryInfoScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ItineraryScreen,
    navigationOptions: navigationOptionsItinerary,
  },
  ItineraryInfoScreen: {
    screen: ItineraryInfoScreen,
    navigationOptions: navigationOptionsItineraryInfo,
  },
});

export const Routes = createAppContainer(AppNavigator);
