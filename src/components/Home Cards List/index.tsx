import { View, Text, FlatList } from 'react-native'
import React from 'react'
import HomeCard from '../Home Card'
import styles from './styles';

const HomeCardsList = ({
    data,
    lab
}: {
    data?: any;
    lab?: boolean;
}) => {
    return (
        <FlatList
            data={data}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapperStyle}
            style={styles.FlatList}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                if (!item?.empty) {
                    return <HomeCard lab={lab} item={item} />
                } else {
                    return <View style={styles.invisible} />;
                }

            }}
        />
    )
}

export default HomeCardsList