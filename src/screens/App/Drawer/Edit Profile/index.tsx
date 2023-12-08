import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import Header from 'components/Header'
import { ProfileBackground } from 'assets/images'
import Input from './components/Input'
import CustomButton from 'components/Button'
import { ScrollView } from 'react-native'
import { Camera } from 'assets/svgs'

const EditProfileScreen = () => {
    const [{ name, age, gender, area, government }, setData] = React.useState({ name: 'أحمد خليفه', age: '23', gender: 'ذكر', area: 'ابوقير', government: 'الأسكندرية' })
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ScrollView>
                <View style={styles.HeaderContainer}>
                    <Header hasBack Title='الصفحة الشخصية' />
                </View>

                <ImageBackground style={styles.Avatar} imageStyle={{ borderRadius: 200 }} source={ProfileBackground} >
                    <View style={styles.CameraContainer}>
                        <Camera fill={'#000'} />
                    </View>
                </ImageBackground>

                <Text style={styles.Email}>Ahmedkhalifa20199@gmail.com</Text>

                <Input Title='الإسم' Value={name} />
                <Input Title='العمر' Value={age} />
                <Input Title='الجنس' Value={gender} />
                <Input Title='المنطقة' Value={area} />
                <Input Title='المحافظة' Value={government} />

                <CustomButton onPress={() => { }} style={styles.Button} title='حفظ' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditProfileScreen