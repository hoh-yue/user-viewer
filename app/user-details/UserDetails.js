import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { avatarLoadingSelector, avatarSelector, selectedUserDetailsSelector } from '../user-list/selectors';

const UserDetails = ({ loading, user, avatar }) => {
    if (loading) {
        console.log()
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator />
            </View>
        );
    }

    const renderImage = () => {
        if (avatar) {
            return (<Image source={{ uri: avatar }} style={styles.image} />);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <View>
                            {renderImage()}
                            <View style={styles.rowContainer}>
                                <Text style={styles.id}>id</Text>
                                <Text style={styles.id}>{user.id}</Text>
                            </View>
                        </View>
                    </View>
                    {renderField('name', user?.name)}
                    {renderField('username', user?.username)}
                    {renderAddress('address', user?.address)}
                    {renderField('phone', user?.phone)}
                    {renderField('website', user?.website)}
                    {renderCompany('company', user?.company)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const renderGeo = (key, geo) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.title}>{key}</Text>
            <Text style={styles.value}>{`${geo.lat}, ${geo.lng}`}</Text>
        </View>
    );
};

const renderAddress = (key, address) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.title}>{key}</Text>
            {renderField('street', address?.street)}
            {renderField('suite', address?.suite)}
            {renderField('city', address?.city)}
            {renderField('zipcode', address?.zipcode)}
            {renderGeo('geo', address?.geo)}
        </View>
    );
};

const renderCompany = (key, company) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.title}>{key}</Text>
            {renderField('name', company?.name)}
            {renderField('catch Phrase', company?.catchPhrase)}
            {renderField('bs', company?.bs)}
        </View>
    );
};

const renderField = (key, value) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.title}>{key}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        margin: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    id: {
        margin: 5,
        fontSize: 12,
        color: '#636363',
        textTransform: 'uppercase',
    },
    fieldContainer: {
        marginVertical: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#636363',
        textTransform: 'uppercase',
    },
    value: {
        fontSize: 16,
    }
});

export default connect((state) => ({
    loading: avatarLoadingSelector(state),
    user: selectedUserDetailsSelector(state),
    avatar: avatarSelector(state),
}))(UserDetails);