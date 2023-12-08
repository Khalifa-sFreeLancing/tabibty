import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import { useRoute } from '@react-navigation/native'
import MoreHeader from '../Main Home/components/MoreHeader'
import SearchInput from 'screens/App/Search/components/SearchInput'
import HomeCardsList from 'components/Home Cards List'
import { Doctors, Labs } from 'src/utils/Dummy'

const MoreScreen = () => {
    const { type }: any = useRoute().params
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <Header hasBack Title={type == 'doc' ? 'الطبيبات' : 'المعامل'} />
            <SearchInput />
            <MoreHeader title={type == 'doc' ? 'الطبيبات الأكثر تقيمًا في منطقتك' : 'المعامل الأكثر تقيمًا في منطقتك'} />
            <HomeCardsList data={(type == 'doc' ? Doctors : Labs)?.length % 3 === 2 ? [...((type == 'doc' ? Doctors : Labs)), { empty: true }] : (type == 'doc' ? Doctors : Labs)} />

        </SafeAreaView>
    )
}

export default MoreScreen