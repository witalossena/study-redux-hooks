import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { Container } from '../style';

// Create styles
const styles = StyleSheet.create({
    doc: {
        width: '100%',
        height: '100vh',
    },
    page: {
        width: '100',
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'left',

    }
});


const Pdf = (props) => {
    return (
        <PDFViewer style={styles.doc}>
            <Document style={styles.doc}>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Procura-se cãozinho perdido:{props.race}</Text>
                        <Text>Ele atende pelo nome de: {props.name}</Text>
                        <Text>{props.description}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Pdf;

