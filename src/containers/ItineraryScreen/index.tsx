import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Navigation} from '../../helpers/types';
import {NavigationStackScreenOptions} from 'react-navigation';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import {getDay} from 'date-fns';
import {days, itinerary, ItineraryInfo} from '../../helpers/constants';
import {ItineraryList} from '../../components/ItineraryList';
import {useNavigation} from '../../hooks/useNavigation';

export function navigationOptions({navigation}: {navigation: Navigation}) {
  return {
    title: 'Itinerário',
    headerTitleStyle: {
      fontFamily: 'Roboto',
      color: '#8e44ad',
    },
  } as NavigationStackScreenOptions;
}

export function ItineraryScreen() {
  const navigation = useNavigation();

  const [day, setDay] = useState(NaN);

  const didMount = () => {
    const currentDay = getDay(new Date());
    setDay(currentDay);
  };

  const getWeekDay = () => {
    let name = '';

    Object.values(days).forEach(e => {
      if (e.value === day) {
        name = e.name;
      }
    });

    return name;
  };

  const getItineraryInfo = () => {
    const item = itinerary.find(e => e.weekday.some(wd => wd === day));
    if (item) {
      return item.info;
    } else {
      return [];
    }
  };

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationX < 0) {
        setDay(day === 6 ? 0 : day + 1);
      } else {
        setDay(day === 0 ? 6 : day - 1);
      }
    }
  };

  const onPressLeftButton = () => setDay(day === 0 ? 6 : day - 1);

  const onPressRightButton = () => setDay(day === 6 ? 0 : day + 1);

  const onPressItem = (item: ItineraryInfo) => {
    navigation.push('ItineraryInfoScreen', item);
  };

  useEffect(didMount, []);

  return (
    <PanGestureHandler
      activeOffsetX={[-100, 100]}
      failOffsetY={[-30, 30]}
      onHandlerStateChange={onHandlerStateChange}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={onPressLeftButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/arrow-left.png')}
            />
          </TouchableOpacity>
          <Text style={styles.weekday}>{getWeekDay()}</Text>
          <TouchableOpacity onPress={onPressRightButton}>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/arrow-right.png')}
            />
          </TouchableOpacity>
        </View>
        <ItineraryList onPressItem={onPressItem} data={getItineraryInfo()} />
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  icon: {
    height: 20,
    width: 20,
  },
  weekday: {
    fontFamily: 'Roboto',
    color: '#8e44ad',
    fontSize: 18,
  },
});
