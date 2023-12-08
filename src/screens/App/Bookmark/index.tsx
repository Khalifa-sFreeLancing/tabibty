import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import styles from './styles'
import { FlatList, Text, View } from 'react-native'
import { Articles } from 'src/utils/Dummy'
import ArticleCard from 'components/Article Card'
import { ScrollView } from 'react-native'

const BookmarkScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header Title='العناصر المحفوظة' />
            <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                <Text style={[styles.Title]}>مقالات تم حفظها</Text>
                <FlatList
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={Articles}
                    style={styles.FlatList}
                    renderItem={({ item }) => {
                        return (
                            <ArticleCard item={item} />
                        )
                    }}
                />
            </ScrollView>

        </SafeAreaView>
    )
}

export default BookmarkScreen