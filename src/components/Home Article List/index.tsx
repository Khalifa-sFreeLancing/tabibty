import { FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import ArticleCard from '../Article Card';
import { SkeletonPlaceholder } from 'rn-skeleton-placeholder';

const ArticleCardsList = ({
    data,
    isLoading
}: {
    data?: any;
    isLoading?: boolean;
}) => {
    return (
        isLoading ?
            <FlatList
                data={[{}]}
                renderItem={() => (
                    <SkeletonPlaceholder
                        itemWidth={'100%'}
                        itemHeight={135}
                        itemStyle={styles.Skeleton}
                    />
                )}
            />
            :
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