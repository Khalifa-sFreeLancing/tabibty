import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTab/MainBottomTabs';
import AuthStackScreens from './Auth';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from 'screens/App/Home/Item Details';
import ExperienceScreen from 'screens/App/Home/Experience';
import ReviewScreen from 'screens/App/Home/Reviews';
import MoreAdviceScreen from 'screens/App/Home/More Advice';
import MoreScreen from 'screens/App/Home/More ';
import { selectIsAuth } from 'src/redux/auth';


export type RootStack = {
    Splash: undefined;
    Auth: undefined;
    App: undefined;

    Details: undefined;
    Experience: undefined;
    Review: undefined;
    MoreAdvice: undefined;
    More: undefined;
};

const RootStack = createNativeStackNavigator<RootStack>();

const RootStackScreens = () => {
    const [Splash, setSplash] = React.useState<boolean>(true)
    const IsAuth = useSelector(selectIsAuth)

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }
                }
                initialRouteName="Auth"
            >
                {/* {Splash && <RootStack.Screen name="Splash" component={SplashScreen} />} */}
                {
                    !IsAuth ?
                        <RootStack.Screen name="Auth" component={AuthStackScreens} />

                        :
                        <>
                            <RootStack.Screen name="App" component={BottomTabs} />


                            <RootStack.Screen name="Details" component={DetailScreen} />
                            <RootStack.Screen name="Experience" component={ExperienceScreen} />
                            <RootStack.Screen name="Review" component={ReviewScreen} />
                            <RootStack.Screen name="MoreAdvice" component={MoreAdviceScreen} />
                            <RootStack.Screen name="More" component={MoreScreen} />


                        </>
                }

            </RootStack.Navigator>
        </NavigationContainer>

    );
};

export default RootStackScreens;
