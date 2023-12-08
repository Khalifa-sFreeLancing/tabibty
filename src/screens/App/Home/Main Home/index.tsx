import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Colors } from 'theme/colors'
import Fonts from 'theme/fonsFamily'
import { Arrow } from 'assets/svgs'
import HomeCardsList from 'components/Home Cards List'
import { Articles, Doctors, Labs } from 'src/utils/Dummy'
import MoreHeader from './components/MoreHeader'
import ArticleCardsList from 'components/Home Article List'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const { navigate } = useNavigation<any>()
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Text style={styles.Header}>طبيبتي</Text>
            <ScrollView showsVerticalScrollIndicator={false}>

                <MoreHeader hasMore onPress={() => navigate('More', { type: 'doc' })} title='الطبيبات الأكثر تقيمًا في منطقتك ' />
                <HomeCardsList data={Doctors?.slice(0, 2)?.length % 3 === 2 ? [...(Doctors?.slice(0, 2)), { empty: true }] : Doctors?.slice(0, 2)} />

                <MoreHeader hasMore onPress={() => navigate('More', { type: 'lab' })} title='المعامل الأكثر تقيمًا في منطقتك' />
                <HomeCardsList lab data={Labs?.slice(0, 2)?.length % 3 === 2 ? [...(Labs?.slice(0, 2)), { empty: true }] : Labs?.slice(0, 2)} />

                <MoreHeader hasMore onPress={() => navigate('MoreAdvice')} title='مقالات طبية' />
                <ArticleCardsList data={Articles?.slice(0, 1)} />
            </ScrollView>


        </SafeAreaView >
    )
}

export default HomeScreen