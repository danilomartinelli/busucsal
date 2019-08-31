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
            <Text>
              {`${element.item.time} (${element.item.roadmap.toUpperCase()})`}
            </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#000',
    margin: 10,
  },
});

export const ItineraryList = memo(ItineraryListRaw);
