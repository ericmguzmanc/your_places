import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';
import { Fonts } from '../../utils/fonts';

const placeDetail = (props) => {
    let modalContent = null;
    const { selectedPlace, onItemDeleted, onModalClosed } = props;

    if (selectedPlace) {
        modalContent = (
            <View style={styles.modalContent}>
                <Image source={selectedPlace.image} resizeMode="cover" style={styles.modalImage}/>
                <Text style={styles.placeText}>{ selectedPlace.name }</Text>
            </View>
        );
    }

    return (
        <Modal visible={selectedPlace !== null} animationType="slide" onRequestClose={onModalClosed}>
            <View style={styles.modalContainer}>
                { modalContent }
                <View style={styles.buttonsContainer}>
                    <Button title="Delete" color="red" onPress={onItemDeleted}/>
                    <Button title="Close" onPress={onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

export default placeDetail;

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    buttonsContainer: {
        // marginTop: 15,
        // flexDirection: "row",
        // alignContent: "center",
        // alignItems: "center",
    },  
    modalContent: {
        flexDirection: "column",
        alignItems: "center",
    },  
    modalImage: {
        width: "100%",
        height: 200,
    },
    placeText: {
        fontFamily: Fonts.OpenSansBolder,
        color: "#000",
        fontSize: 20,
        margin: 10
    }
});