//----- Import Statement -----//
import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Images } from '../../common';
import { Button, Header, TextField } from '../../components';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Signup Screen -----//
const Signup = (props) => {

    //----- Component State -----//
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('Male')
    const [proffesion, setProffesion] = useState('')
    const [interests, setInterests] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    //----- Component Lifycycles -----//
    useEffect(() => {

    }, [])

    //----- Custom Functions -----//
    const onHandlePress = (item) => {
        const index = interests.indexOf(item);
        if (index > -1) {
            interests.splice(index, 1);
        }
        setInterests([...interests])
    }
    const interestsView = () => {
        return interests?.map((item, index) => {
            return <View key={index} style={styles.selectedInterestViewStyle}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => onHandlePress(item)}>
                    <Image source={Images.img_close} style={styles.imgCloseStyle} />
                </TouchableOpacity>
            </View>
        })
    };
    const errorView = () => {
        setTimeout(() => {
            setError('')
        }, 5000);
        return <Text style={styles.errorViewContainer}>{error}</Text>
    }

    //----- Register User -----//
    const onRegister = async () => {
        if (name == '')
            setError('Please enter name');
        else if (username == '')
            setError('Please enter username')
        else if (proffesion == '')
            setError('Please enter profession')
        else if (interests.length == 0)
            setError('Please select interests')
        else {
            setError('')
            setLoading(true)
            let obj = {
                name: name,
                username: username,
                gender: gender,
                proffesion: proffesion,
                interests: interests
            }
            firestore().collection('Users')
                .add(obj).then(() => {
                    setLoading(false);
                    AsyncStorage.setItem('userinfo', JSON.stringify(obj))
                    // navigation.navigate('Home')
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: 'Home' }
                            ],
                        })
                    );
                })
                .catch(error => { console.log(error); setLoading(false) })
        }
    }

    //----- Return Statement -----//
    return (
        <View style={styles.mainContainer}>
            <Header title='Signup' />
            <View style={{ flex: 1 }}>
                <TextField title='Name' value={name} onChangeText={(text) => { setName(text) }} />
                <TextField title='UserName' value={username} onChangeText={(text) => { setUsername(text) }} />
                <TextField title='Gender' value={gender} onPress={(value) => setGender(value)} />
                <TextField title='Proffesion' value={proffesion} onChangeText={(text) => { setProffesion(text) }} />
                <TextField title='Interests' value={interests} onPress={(value) => setInterests(value)} />
                <View style={styles.interestContainer}>
                    {interestsView()}
                </View>
            </View>
            {errorView()}
            <Button title='Register' onPress={() => { onRegister() }} loading={loading} />
        </View >
    )
}

export default Signup;