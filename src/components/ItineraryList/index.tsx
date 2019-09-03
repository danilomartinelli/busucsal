import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ItineraryInfo} from '../../helpers/constants';

interface IProps {
  data: ItineraryInfo[];
  onPressItem: (item: ItineraryInfo) => void;
}

function ItineraryListRaw({data, onPressItem}: IProps) {
  return (
    <FlatList
      data={data}
      renderItem={element => (
        <View style={styles.item}>
          <TouchableOpacity onPress={() => onPressItem(element.item)}>
            <Text style={styles.text}>{element.item.time}</Text>
            <Text style={styles.text2}>({element.item.roadmap})</Text>
          </TouchableOpacity>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={(_, idx) => idx.toString()}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  item: {
    alignSelf: 'stretch',
    paddingVertical: 20,
    marginLeft: 40,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    color: '#8e44ad',
    fontSize: 14,
  },
  text2: {
    fontFamily: 'Roboto',
    color: '#8e44ad',
    fontSize: 12,
  },
  separator: {
    borderWidth: 0.3,
    borderColor: '#ecf0f1',
    margin: 10,
  },
});

export const ItineraryList = memo(ItineraryListRaw);
