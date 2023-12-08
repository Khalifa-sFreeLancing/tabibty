import { Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from 'components/Header'
import { ScrollView } from 'react-native'
import { Articles } from 'src/utils/Dummy'
import ArticleCard from 'components/Article Card'
import styles from './styles'

const MoreAdviceScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title='مقالات' />
            <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
                <Text style={[styles.Title]}>مقالات قد تناسبكِ</Text>
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

export default MoreAdviceScreen