import { StyleSheet } from "react-native";
import { Colors } from "theme/colors";
import Fonts from "theme/fonsFamily";

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    HomeCard: {
        marginBottom: 15,
    },
    invisible: {
        width: 110
    }
})

export default styles