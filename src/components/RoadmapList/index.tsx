import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface IProps {
  data: string[];
}

function RoadmapListRaw({data}: IProps) {
  return (
    <FlatList
      data={data}
      renderItem={element => (
        <View style={styles.item}>
          <Text>{`${element.index + 1}ª Parada: ${element.item}`}</Text>
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
  },
  separator: {
    borderWidth: 0.5,
    borderColor: '#000',
    margin: 10,
  },
});

export const RoadmapList = memo(RoadmapListRaw);
