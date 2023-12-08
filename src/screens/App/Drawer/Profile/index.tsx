import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { ProfileBackground } from 'assets/images'
import LinearGradient from 'react-native-linear-gradient'
import Input from './components/Input'
import { ScrollView } from 'react-native'
import Header from 'components/Header'
import CustomButton from 'components/Button'

const ProfileScreen = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.Container}>
            <ScrollView>
                <ImageBackground style={styles.ImageBackground} source={ProfileBackground}>
                    <View style={styles.opacityView}>
                        <LinearGradient style={styles.LinearGradient} colors={['#BC08AA', '#EE54DE',]} />
                        <View style={styles.HeaderContainer}>
                            <Header hasBack Title='الصفحة الشخصية' />
                        </View>
                    </View>
                </ImageBackground>
                <Image style={styles.Avatar} source={ProfileBackground} />

                <Text style={styles.USERNAME}>أحمد خليفه</Text>
                <Text style={styles.Email}>Ahmedkhalifa20199@gmail.com</Text>

                <Input Title='العمر' Value='23' />
                <Input Title='الجنس' Value='23' />
                <Input Title='المنطقة' Value='23' />
                <Input Title='المحافظة' Value='23' />

                <CustomButton onPress={() => { }} style={styles.Button} title='تعديل' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen