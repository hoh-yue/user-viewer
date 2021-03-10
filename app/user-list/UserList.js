import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GET_USER_LISTS_REQUEST, NAVIGATE_TO_USER_DETAILS } from './actions';
import { userLoadingSelector, usersWithUsernameAndEmailSelector } from './selectors';

const UserList = ({ loading, usersWithUsernameAndEmail, getUserList, navigateToUserDetails }) => {
    useEffect(() => {
        getUserList();
    }, [getUserList])

    const onPress = (id) => {
        navigateToUserDetails(id)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onPress(item.id)} style={styles.itemContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>Username: </Text>
                    <Text>{item.username}</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>E-mail: </Text>
                    <Text>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={usersWithUsernameAndEmail}
                renderItem={renderItem}
                keyExtractor={item => JSON.stringify(item.id)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        marginTop: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    },
    rowContainer: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: '600',
    },
});

const mapDispatchToProps = (dispatch, props) => ({
    getUserList: () => dispatch({ type: GET_USER_LISTS_REQUEST }),
    navigateToUserDetails: (id) => dispatch({ type: NAVIGATE_TO_USER_DETAILS, payload: id }),
});

export default connect(
    (state) => ({
        loading: userLoadingSelector(state),
        usersWithUsernameAndEmail: usersWithUsernameAndEmailSelector(state),
    }),
mapDispatchToProps)(UserList);