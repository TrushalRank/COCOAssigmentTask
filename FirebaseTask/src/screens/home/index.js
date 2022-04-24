//----- Import Statement -----//
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import { Header } from '../../components';
import { interests } from '../../components/textfield';
import { Color } from '../../common';

//----- Home Screen -----//
const Home = (props) => {

    //----- Component State -----//
    const [users, setUsers] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('')
    const [filterArr, setFilterArr] = useState([])

    //----- Component Lifycycles -----//
    useEffect(() => {
        // firestore().collection('users').get().then(async r => console.log(await r.size())).catch(e => console.log(e))
        getUsersList()
    }, [])

    //----- Custom Functions -----//
    const getUsersList = async () => {
        await firestore().collection('Users').get().then(res => {
            let arr = []
            res.forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                arr.push(documentSnapshot.data())
            });
            setUsers(arr)
        }
        ).catch(e => console.log(e))
    }

    const filterUserList = async (selectedItem) => {
        let filterArr = users.filter(i => { return i.interests.includes(selectedItem) })
        setFilterArr(filterArr)
    }

    const onPressFilterItem = (item) => {
        setSelectedFilter(item.item.label);
        setShowFilter(false);
        filterUserList(item.item.label)
    }

    const filterOptions = () => {
        return <FlatList
            data={interests}
            renderItem={(item) => <View style={{ padding: 5 }}>
                <TouchableOpacity onPress={() => onPressFilterItem(item)}>
                    <Text style={{ fontSize: 16, color: Color.black, fontWeight: selectedFilter === item.item.value ? '800' : '400' }}>
                        {item.item.label}
                    </Text>
                </TouchableOpacity>
            </View>}
        />
    }

    //----- Return Statement -----//
    return (
        <View style={styles.mainContainer}>
            <Header title='Home' isFliter={true} onFilter={() => setShowFilter(!showFilter)} />
            {showFilter == true ? <View style={styles.filterViewStyle}>
                {filterOptions()}
            </View> : null}
            <FlatList
                data={selectedFilter !== '' ? filterArr : users}
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={(item) => {
                    return <View style={styles.listItemContainer}>
                        <Text style={styles.listItemTextStyle}>Name : {item.item.name}</Text>
                        <Text style={styles.listItemTextStyle}>Proffesion : {item.item.proffesion}</Text>
                        <Text style={styles.listItemTextStyle}>Interest : {item.item.interests?.join(', ')}</Text>
                    </View>
                }} />
        </View >
    )
}

export default Home;