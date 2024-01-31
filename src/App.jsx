// @ts-check
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import React, { useState } from 'react';
import React from "react";
import './App.css';
// import HowToUse from './HowToUse.jsx';
// import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
// import ResultContainerPlugin from './ResultContainerPlugin.jsx';
import Search from "./Search";
import CcScan from './CcScan';
import Navbar from "./Navbar";


// const App = (props) => {
//     const [decodedResults, setDecodedResults] = useState([]);
//     const onNewScanResult = (decodedText, decodedResult) => {
//         console.log("App [result]", decodedResult);
//         setDecodedResults(prev => [...prev, decodedResult]);
//     };
function App() {
    return (
        <>
      
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/" element={<CcScan />} />
                </Routes>
            </BrowserRouter>

            </>
    );
}

export default App;
