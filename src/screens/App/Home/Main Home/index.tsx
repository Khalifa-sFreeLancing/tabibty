import { Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import HomeCardsList from 'components/Home Cards List'
import { Articles } from 'src/utils/Dummy'
import MoreHeader from './components/MoreHeader'
import ArticleCardsList from 'components/Home Article List'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from 'src/redux/store'
import AppThunks from 'src/redux/app/thunks'
import { useSelector } from 'react-redux'
import { selectHomeData } from 'src/redux/app'

const HomeScreen = () => {
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const HomeData = useSelector(selectHomeData)
    const [Loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        setLoading(true)
        dispatch(AppThunks.doGetHomeData()).then(() => {
            setLoading(false)
        })
    }, [])
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Text style={styles.Header}>طبيبتي</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MoreHeader hasMore onPress={() => navigate('More', { type: 'doc' })} title='الطبيبات الأكثر تقيمًا في منطقتك ' />
                <HomeCardsList isLoading={Loading} data={HomeData?.topRatedDoctors?.slice(0, 3)?.length % 3 === 2 ? [...(HomeData?.topRatedDoctors?.slice(0, 3)), { empty: true }] : HomeData?.topRatedDoctors?.slice(0, 3)} />

                <MoreHeader hasMore onPress={() => navigate('More', { type: 'lab' })} title='المعامل الأكثر تقيمًا في منطقتك' />
                <HomeCardsList isLoading={Loading} lab data={HomeData?.topRatedLabs?.slice(0, 3)?.length % 3 === 2 ? [...(HomeData?.topRatedLabs?.slice(0, 3)), { empty: true }] : HomeData?.topRatedLabs?.slice(0, 3)} />

                <MoreHeader hasMore onPress={() => navigate('MoreAdvice')} title='مقالات طبية' />
                <ArticleCardsList isLoading={Loading} data={Articles?.slice(0, 1)} />
            </ScrollView>


        </SafeAreaView >
    )
}

export default HomeScreen