import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import * as XLSX from "xlsx";
import Login from './Login';
import './style.css';

const MarkSheetECE = ({name, roll}) => {
  const [data,setData]=useState(null);
  const [ind,setInd]=useState(0);
  const [validOrNot,setValidOrNot]=useState(true);
  useEffect(()=>{
    fetch("excel/ECE.xlsx")
    .then((res) => res.arrayBuffer())
    .then((ab) => {
      const wb = XLSX.read(ab, { type: "array" });
      const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const parsedData = XLSX.utils.sheet_to_json(ws, {header:1});
        setData(parsedData);
      });
  },[])

  const callLogin=()=>{
    return <Login valid={false}/>;
  }
  
  const valid=(temp)=>{
    return temp.replace(/ /g, '');
  }
  const findname=()=>{
    console.log('data is',data);
    if(data!==null && data!==undefined)
    {
      for(let key in data) {
        if(data[key][1]===roll && valid(data[key][2]).toUpperCase()===valid(name).toUpperCase()) {
          setValidOrNot(true);
          setInd(key);
          return true;}
        }
        console.log('setvalid is set to false');
        setValidOrNot(false);
        return false;
      }
    }
  return (<>
    {validOrNot?
      <section style={{padding:'50px', fontSize:'14px'}}>
      
      {ind?'':findname()} 
      {
        data && 
          <>
            <h3 style={{fontWeight:'bold', textAlign:'center', marginBottom:'10px'}}>UTTARAKHAND TECHNICAL UNIVERSITY, DEHRADUN</h3>
            <h4 style={{textAlign:'center', marginBottom:'10px'}}>STATEMENT OF PROVISIONAL MARKS</h4>
            <h5 style={{textAlign:'center', marginBottom:'30px'}}>B.Tech 1 Semester(ECE)</h5>
            <div>
              <span style={{display:'flex', justifyContent:'space-between',flexDirection:'row'}}>
                <p style={{marginBottom:'5px'}}><span style={{fontWeight:'bold'}}>Institute Name: </span>{data[2][0]}</p>
                <p style={{marginBottom:'5px'}}><span style={{fontWeight:'bold'}}>Roll No: </span>{roll}</p>
              </span>
              <p style={{marginBottom:'5px'}}><span style={{fontWeight:'bold'}}>Student Name: &nbsp;</span>{data[ind][2]}</p>
              <p style={{marginBottom:'5px'}}><span style={{fontWeight:'bold'}}>Father's Name: &nbsp;</span>{data[ind][3]}</p>
            </div>
            <div>
              <Table striped bordered>
                <colgroup></colgroup>
                <colgroup span="2"></colgroup>
                <colgroup></colgroup>
                <colgroup span="2"></colgroup>
                <colgroup></colgroup>
              <thead>
                <tr>
                  <th className="align-middle" rowSpan="2">Subject Code & Name</th>
                  <th colSpan="2" scope="colgroup">Maximum Marks</th>
                  <th rowSpan="2">Total</th>
                  <th colSpan="2" scope="colgroup">Maximum Marks</th>
                  <th rowSpan="2">Total</th>
                </tr>
                <tr>
                  <th scope="col">Ext</th>
                  <th scope="col">Sess</th>
                  <th scope="col">Ext</th>
                  <th scope="col">Sess</th>
                </tr>
              </thead>
              {/* <tbody>
              {ind &&
                  data[4].map((el)=>{
                    <tr>
                      <td>{el}</td>
                      <td>{data[6][4]}</td>
                      <td>{data[6][5]}</td>
                      <td>{data[6][6]}</td>
                      <td>{data[ind][4]}</td>
                      <td>{data[ind][5]}</td>
                      <td>{data[ind][6]}</td>
                    </tr>
                {console.log(el)}
              })
                }
              </tbody> */}
              {ind?
                <tbody>
                <tr>
                  <td>{data[4][4]}</td>
                  <td className='text-center'>{data[6][4]}</td>
                  <td className='text-center'>{data[6][5]}</td>
                  <td className='text-center'>{data[6][6]}</td>
                  <td className='text-center'>{data[ind][4]}</td>
                  <td className='text-center'>{data[ind][5]}</td>
                  <td className='text-center'>{data[ind][6]}</td>
                </tr>
                <tr>
                  <td>{data[4][7]}</td>
                  <td className='text-center'>{data[6][7]}</td>
                  <td className='text-center'>{data[6][8]}</td>
                  <td className='text-center'>{data[6][9]}</td>
                  <td className='text-center'>{data[ind][7]}</td>
                  <td className='text-center'>{data[ind][8]}</td>
                  <td className='text-center'>{data[ind][9]}</td>
                </tr>
                <tr>
                  <td>{data[4][10]}</td>
                  <td className='text-center'>{data[6][10]}</td>
                  <td className='text-center'>{data[6][11]}</td>
                  <td className='text-center'>{data[6][12]}</td>
                  <td className='text-center'>{data[ind][10]}</td>
                  <td className='text-center'>{data[ind][11]}</td>
                  <td className='text-center'>{data[ind][12]}</td>
                </tr>
                <tr>
                  <td>{data[4][13]}</td>
                  <td className='text-center'>{data[6][13]}</td>
                  <td className='text-center'>{data[6][14]}</td>
                  <td className='text-center'>{data[6][15]}</td>
                  <td className='text-center'>{data[ind][13]}</td>
                  <td className='text-center'>{data[ind][14]}</td>
                  <td className='text-center'>{data[ind][15]}</td>
                </tr>
                <tr>
                  <td>{data[4][16]}</td>
                  <td className='text-center'>{data[6][16]}</td>
                  <td className='text-center'>{data[6][17]}</td>
                  <td className='text-center'>{data[6][18]}</td>
                  <td className='text-center'>{data[ind][16]}</td>
                  <td className='text-center'>{data[ind][17]}</td>
                  <td className='text-center'>{data[ind][18]}</td>
                </tr>
                <tr>
                  <td>{data[4][19]}</td>
                  <td className='text-center'>{data[6][19]}</td>
                  <td className='text-center'>{data[6][20]}</td>
                  <td className='text-center'>{data[6][21]}</td>
                  <td className='text-center'>{data[ind][19]}</td>
                  <td className='text-center'>{data[ind][20]}</td>
                  <td className='text-center'>{data[ind][21]}</td>
                </tr>
                <tr>
                  <td>{data[4][22]}</td>
                  <td className='text-center'>{data[6][22]}</td>
                  <td className='text-center'>{data[6][23]}</td>
                  <td className='text-center'>{data[6][24]}</td>
                  <td className='text-center'>{data[ind][22]}</td>
                  <td className='text-center'>{data[ind][23]}</td>
                  <td className='text-center'>{data[ind][24]}</td>
                </tr>
                <tr>
                  <td>{data[4][25]}</td>
                  <td className='text-center'>{data[6][25]}</td>
                  <td className='text-center'>{data[6][26]}</td>
                  <td className='text-center'>{data[6][27]}</td>
                  <td className='text-center'>{data[ind][25]}</td>
                  <td className='text-center'>{data[ind][26]}</td>
                  <td className='text-center'>{data[ind][27]}</td>
                </tr>
                <tr>
                  <td>{data[4][28]}</td>
                  <td className='text-center'>{data[6][28]}</td>
                  <td className='text-center'>{data[6][29]}</td>
                  <td className='text-center'>{data[6][30]}</td>
                  <td className='text-center'>{data[ind][28]}</td>
                  <td className='text-center'>{data[ind][29]}</td>
                  <td className='text-center'>{data[ind][30]}</td>
                </tr>
                <tr className='row-style'>
                  <td></td>
                  <td  colSpan="2" scope="colgroup">Grand Total</td>
                  <td>{data[6][31]}</td>
                  <td  colSpan="2" scope="colgroup">Total Marks</td>
                  <td>{data[ind][31]}</td>
                </tr>
                <tr style={{border:'none',borderColor:'white'}}>
                  <td></td>
                  <td  colSpan="2" scope="colgroup"></td>
                  <td></td>
                  <td  colSpan="2" scope="colgroup">% of Marks</td>
                  <td>{data[ind][32].toFixed(2)}%</td>
                </tr>
              </tbody>:''}
              </Table>
              <Table borderless>
                <thead></thead>
                <tbody></tbody>
              </Table>
            </div>
          </>
      }
      </section>
    :
    <>
    {callLogin()}
    </>}
  </>)
}

export default MarkSheetECE