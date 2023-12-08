import React from 'react';
import { Formik } from 'formik';
import { regist_initial_values } from 'src/Formik/initialValues';
import { RegistSchema } from 'src/Formik/schema';
import CustomInput from 'components/Input';
import { View } from 'react-native';
import { styles } from '../styles';
import CustomButton from 'components/Button';
import { Lock, Mail, User } from 'assets/svgs';
import { useAppDispatch } from 'src/redux/store';
import AuthThunks from 'src/redux/auth/thunks';
import { useSelector } from 'react-redux';
import AuthSlice, { selectSignedUp } from 'src/redux/auth';
import { useNavigation } from '@react-navigation/native';

function Form() {
  const { navigate } = useNavigation<any>()
  const dispatch = useAppDispatch()
  const SignedUp = useSelector(selectSignedUp)
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    dispatch(AuthSlice.changeIsVerivied(false))
    SignedUp && navigate('OTP', { email, type: 'verivy' })
  }, [SignedUp])
  return (
    <Formik
      initialValues={regist_initial_values}
      validationSchema={RegistSchema}
      onSubmit={values => {
        setLoading(true)
        setEmail(values.Email)
        dispatch(AuthThunks.doSignUp({
          email: values.Email,
          password: values.Password,
          fullname: values.FullName
        })).then(() => setLoading(false))
        // 
      }}>
      {props => (
        <>
          <View style={styles.InputsContainer}>
            <CustomInput
              {...props}
              name="الاسم"
              Label={'FullName'}
              keyboardType='email-address'
              Icon={<User />}
            />
            <CustomInput
              {...props}
              name="البريد الإكتروني"
              Label={'Email'}
              keyboardType='email-address'
              Icon={<Mail />}
            />
            <CustomInput
              {...props}
              name="كلمة السر"
              Label={'Password'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />
            <CustomInput
              {...props}
              name="إنشاء حساب"
              Label={'ConfirmPassword'}
              keyboardType='email-address'
              secureTextEntry
              Icon={<Lock />}
            />


            <CustomButton loading={loading} style={{ marginTop: 75 }} title="إنشاء حساب" onPress={() => props.handleSubmit()} />

          </View>
        </>
      )
      }
    </Formik >
  );
}

export default Form;
