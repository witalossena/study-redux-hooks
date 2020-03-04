import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';


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
        textAlign: 'center',
    },
    text: {
        marginBottom: '12px',

    }
});


const Pdf = (props) => {
    return (
        <PDFViewer style={styles.doc}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.text}>Procura-se cãozinho perdido da raça:{props.race}</Text>
                        <Text style={styles.text}>Ele atende pelo nome de: {props.name}</Text>
                        <Text style={styles.text}>Ele foi visto pela ultima vez em: {props.disappearance}</Text>
                        <Text style={styles.text}>{props.description}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default Pdf;

