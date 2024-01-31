// import React from 'react'
// import { useEffect, useState } from 'react';
// import './App.css';
// 
//  import { json } from 'react-router-dom';

// class Search extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     items: [],
//     isLoaded: false
//   }
// };

// async componentDidMount(){
//   const address = '0x002Bf459dC58584D58886169EA0E80f3Ca95FFAF';
//   const res = await fetch(
//     `https://api.tatum.io/v3/security/address/${address}/type=testnet`,
//     {
//       method: 'GET',
//       headers: {
//         'x-api-key': '682ac6bf-85ca-4078-857c-dcde239ad9b6'
//       }
//     }
//   )



//      .then(res => res.json())
//      .then(json => {
//        this.setState({
//          isLoaded: true,
//          items: json
//        })
//      })
//     //  const data = await res.json();
//      console.log(res);




// };


import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import { json } from 'react-router-dom';

// import { json } from 'react-router-dom';

const address2 = '0x3223AEB8404C7525FcAA6C512f91e287AE9FfE7B';
const address3 = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const address4 = '0x8ce4e40889a13971681391aad29e88efaf91f784';
const query = new URLSearchParams({ pageSize: '10' }).toString();

const address1 = '16PTM8fpE9D4RVGvpwNKem91rscqnK54Kg';
const currency = 'BNB';
// const apiKey = 'd650d84d-9d6e-4f04-801e-6e80f98a018b'


// function Search() {
const Search = () => {
  const [Status, setStatus] = useState();
  const [info, setInfo] = useState();
  const [time, setTime] = useState();
  const [Count, setCount] = useState();
  // let Count;

  useEffect(() => {
    const fetchData = async () => {

      const checkValid = await fetch(
        `https://api.tatum.io/v3/security/address/${address1}`, {
        method: 'GET',
        headers: {
          'x-api-key': 'd650d84d-9d6e-4f04-801e-6e80f98a018b'
        }
      }
      )


      const cryptoInfo = await fetch(
        `https://api.tatum.io/v3/ethereum/account/balance/${address2}`,
        {
          method: 'GET',
          headers: {
            'x-api-key': 'd650d84d-9d6e-4f04-801e-6e80f98a018b'
          }
        }
      )

      const count = await fetch(
        `https://api.tatum.io/v3/ethereum/transaction/count/${address3}`,
        {
          method: 'GET',
          headers: {
            'x-api-key': '682ac6bf-85ca-4078-857c-dcde239ad9b6'
          }
        }
      );

      const timeStamp = await fetch(
        `https://api.tatum.io/v3/ethereum/account/transaction/${address4}?${query}`,
        {
          method: 'GET',
          headers: {
            'x-api-key': '682ac6bf-85ca-4078-857c-dcde239ad9b6'
          }
        }
      );

      //  const address3 = "https://api.tatum.io/v3/offchain/account/address/tbnb1sfj9981j2eo1ij2e09/BNB";


      //  const getstatus = checkValid;
      //  const getinfo = crytoInfo;
      //  axios.all([getinfo]).then(
      //    axios.spread((...allData) => {
      //     //  const getCryptoStatus = allData[0].status
      //      const getCryptoInfo = allData[0].balance


      //       // console.log(getCryptoStatus)
      //       console.log(getCryptoInfo)



      //    })


      cryptoInfo.json().then(json => {
        setInfo(json.balance);
        //  console.log(json);
      })

      checkValid.json().then(json => {
        setStatus(json.status);
        // console.log(json);
      })
      timeStamp.json().then(json => {
        // setTime(json.timestamp);
        console.log(json);
      })
      count.json().then(json => {
        setCount(json);
        // console.log(json);
      })


    }
    fetchData();
  }, []);

  // style="background-color: #7183cb; color: white;"
  return (
    <div className='App' >
      <section className="App-section">
        <div className="App-section-title" style={{ fontFamily: "Castoro Titling" }}><h1>Check malicious address</h1></div>
        <br />
        {/* <br />
        <br /> */}
        <div>
          <nav class="navbar navbar-light " style={{ width: "600px", backgroundColor: "#38cfdc" }}>
            <div class="container-fluid">
              <form class="d-flex" style={{ width: "600px" }}>
                <input class="form-control me-2" type="search" placeholder="Search the address or key" aria-label="Search" />
                <button style={{ backgroundColor: "#7183cb", color: "white" }} class="btn btn-outline-success" type="submit" >Search</button>
              </form>
            </div>
          </nav>
          <br />
          <br />
          <br />
          {/* <div>
            <p className='head'>Status of given public address:  <strong>{Status}</strong></p>
          </div> */}
          <table class="table table-striped caption-top ">
          <caption style={{  color: "white", fontFamily: "Castoro Titling" }}><h5> Status:  <strong>{Status}</strong></h5></caption>
          <thead class="table " style={{ fontFamily: "Castoro Titling", fontSize:"12px", backgroundColor: "rgb(142 237 245)" }}>
              <tr>
                <th  scope="col" style={{color:"black",fontFamily:"Castoro Titling", fontSize:"14px"}}>#</th>
                <th  scope="col" style={{color:"black",fontFamily:"Castoro Titling", fontSize:"14px"}}><strong>Transactions Count</strong> </th>
                <th  scope="col" style={{color:"black",fontFamily:"Castoro Titling", fontSize:"14px" }}>Last balance change</th>
                <th  scope="col" style={{color:"black",fontFamily:"Castoro Titling", fontSize:"14px"}}>Current balance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table" >
                <th class="th-lg" scope="row">1</th>
                <td>5</td>
                <td>2018-11-16 00:52:45</td>
                <td>1337001337</td>
                {/* <td>{Count}</td>
                <td>{time}</td>
                <td>{info}</td> */}
              </tr>
              {/* <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td> 
              </tr> */}
              {/* <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </table>




          {/* <div> */}
            {/* <table className='Table' > */}
              {/* <tr style={{ backgroundColor: "#38cfdc" }} > */}
                {/* <thead className='h5' >Detalis of Crypto-currency: <strong>{Status}</strong></thead> */}

              {/* </tr> */}
              {/* <tr> */}
                {/* <td>Coin name </td> */}
                {/* <td>Transactions Count </td> */}
                {/* <td>Last balance change </td> */}
                {/* <td>Current balance </td> */}
              {/* </tr> */}
              {/* <tr> */}
                {/* <td>###</td> */}
                {/* <td>{Count}</td> */}
                {/* <td>{time}</td> */}
                {/* <td>{info}</td> */}
              {/* </tr> */}
            {/* </table> */}
          {/* </div> */}
        </div>
      </section>
    </div>
    
  )
}

// render () {

//   var { isLoaded, items } = this.state;

//   if (!isLoaded) {
//     return <div> Loadin....</div>
//   }

//   else {
//     return (
//       <div>
//         <h1> This is a search.</h1>
//           {/* <ul type='none'>
//             {
//               items.map(item => (
//                 <td>
//                     Status: {item.status} 

//                 </td>
//               ))}
//           </ul> */}
//       </div>
//     )
//   }
// }
// }
export default Search;



//   <div >
//   <div className='headerSearch'>
//     <input
//       type="text"
//       placeholder="What is pubtdc address"
//       className="headerSearchInput"
//     //   onChange={(e) => setDestination(e.target.value)}
//     />
//     {/* <button className="headerBtn" onCtdck={handleSearch}> */}
//     <button className="headerBtn">
//       Search
//     </button>
//   </div>
// </div>