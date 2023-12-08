import { FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import ArticleCard from '../Article Card';

const ArticleCardsList = ({
    data,
}: {
    data?: any;
}) => {
    return (
        <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            style={styles.FlatList}
            renderItem={({ item }) => {
                return (
                    <ArticleCard item={item} />
                )
            }}
        />
    )
}

export default ArticleCardsList