import React, { useState } from 'react';
import './App.css';
// import HowToUse from './HowToUse.jsx';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';



const CcScan = (props) => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults(prev => [...prev, decodedResult]);
  };




  return (
    <div className="App">
      <section className="App-section">
        <div className="App-section-title" style={{fontFamily:"Castoro Titling"}}><h1>CC-Scan</h1></div>
        <br />
        {/* <br /> */}
        {/* <br />  */}
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult} />
        <ResultContainerPlugin results={decodedResults} />
        {/* <HowToUse /> */}
      </section>
    </div>
  );
}


export default CcScan;




































