import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Navigation} from '../../helpers/types';
import {NavigationStackScreenOptions} from 'react-navigation';
import {ItineraryInfo, roadmaps} from '../../helpers/constants';
import {useNavigation} from '../../hooks/useNavigation';
import {RoadmapList} from '../../components/RoadmapList';

export function navigationOptions({
  navigation,
}: {
  navigation: Navigation<ItineraryInfo>;
}) {
  const roadMap = navigation.getParam('roadmap');
  const time = navigation.getParam('time');

  return {
    title: `${time} (${roadMap})`,
    headerTitleStyle: {
      fontFamily: 'Roboto',
      color: '#8e44ad',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{width: 20, height: 20, marginLeft: 20}}
          source={require('../../assets/icons/arrow-left.png')}
        />
      </TouchableOpacity>
    ),
  } as NavigationStackScreenOptions;
}

export function ItineraryInfoScreen() {
  const navigation = useNavigation<ItineraryInfo>();

  const getRoadmap = () => {
    const roadmapParam = navigation.getParam('roadmap');

    const roadmap = roadmaps.find(e => e.name === roadmapParam);

    if (roadmap) {
      return roadmap.locations;
    } else {
      return [];
    }
  };

  return (
    <View style={styles.container}>
      <RoadmapList data={getRoadmap()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
