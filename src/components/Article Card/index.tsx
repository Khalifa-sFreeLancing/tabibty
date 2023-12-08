import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Bookmark, Star } from 'assets/svgs'
import LinearGradient from 'react-native-linear-gradient'

const ArticleCard = ({
    item,
}: {
    item?: any,
}) => {
    return (
        <ImageBackground source={{ uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais' }}
            style={styles.container}
            imageStyle={styles.imageStyle}
        >
            <TouchableOpacity activeOpacity={1} style={styles.Heart}>
                <Bookmark />
            </TouchableOpacity>
            <View style={styles.TextContainer}>
                <Text numberOfLines={1} style={styles.Title}>{item?.title}</Text>
                <Text style={styles.Name}>{item?.name}</Text>
            </View>
            <LinearGradient style={styles.LinearGradient} colors={['rgba(250, 250, 252, 0.00)', '#D63EC7']} />
        </ImageBackground>
    )
}

export default ArticleCard