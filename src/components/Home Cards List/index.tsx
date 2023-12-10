import { View } from 'react-native'
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
        <View style={styles.Container}>
            {data?.map((item: any) => {
                if (!item?.empty) {
                    return <HomeCard style={styles.HomeCard} lab={lab} item={item} />
                } else {
                    return <View style={styles.invisible} />;
                }
            })}
        </View>
    )
}

export default HomeCardsList