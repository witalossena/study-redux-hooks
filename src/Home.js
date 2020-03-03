import React from 'react';
import Header from './components/header';
import Dog from './components/dog';
import Pdf from './components/pdf';
import { PDFViewer } from '@react-pdf/renderer';


const Home = () => {
    return (
        <>
            <Header />
            <Dog />
            {/* <PDFViewer>
                <Pdf />
            </PDFViewer> */}

        </>
    );
}

export default Home;
