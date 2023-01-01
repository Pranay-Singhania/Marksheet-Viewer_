import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignImg from './SignImg';
import MarkSheetCSE from './MarkSheetCSE';
import MarkSheetECE from './MarkSheetECE';

const Login = ({valid}) => {
    const[name,setName]=useState('ABHISHEK KULYAL');
    const[roll,setRoll]=useState(10050101001);
    const [branch,setBranch]=useState('CSE')
    const [showResult,setShowResult]=useState(false);

    useEffect(()=>{
        console.log('valid is set to false',valid)
        if(valid===false) alert('Incorrect name/roll no/batch year/branch')
    },[])

    const onchangename=(e)=>{
        setName(e.target.value);
    }
    const onchangeroll=(e)=>{
        setRoll(parseInt(e.target.value));
    }
    const onchangebranch=(e)=>{
        setBranch(e.target.value);
    }
    const validSubmission=(e)=>{
        e.preventDefault();
        if(name && roll) {
            branch!=='MCA'? setShowResult(branch):alert('MCA marksheet has not been uploaded')}
        else {
            setShowResult(false);
            alert('Please fill all the fields');
        }
    }

    return (
        showResult? 
        (branch==='CSE' ? <MarkSheetCSE name={name} roll={roll}/>:<MarkSheetECE name={name} roll={roll}/>)
        :
        <>
            <div className="container mt-3" style={{padding:'20px 90px'}}>
                    <h2 className='text-center' style={{fontWeight:'bold'}}>Check your result</h2>
                <section className='d-flex justify-content-between'>
                    <div className="left_data p-3" style={{ paddingLeft:'100px',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{minWidth:'360px'}}>
                        <Form onSubmit={validSubmission}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={onchangename}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>University Roll No.</Form.Label>
                                <Form.Control type="number" min="10050101001" max="10050102061" value={roll} placeholder="Enter university roll" onChange={onchangeroll}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Batch Year</Form.Label>
                                <Form.Select>
                                    <option>2019-2023</option>
                                    <option>2020-2024</option>
                                    <option>2021-2025</option>
                                    <option>2022-2026</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Branch</Form.Label>
                                <Form.Select value={branch} onChange={onchangebranch}>
                                    <option>CSE</option>
                                    <option>ECE</option>
                                    <option>MCA</option>
                                </Form.Select>
                            </Form.Group>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Button className='mt-3' variant="success" type="submit" style={{textAlign:'center', width:'100%'}}>
                                Submit
                            </Button>
                            </div>
                        </Form>
                    </div>
                    </div>
                    <div className='p-3' style={{display:'flex', justifyContent:'center', alignItems:'center'}}><SignImg /></div>
                </section>
            </div>
        </>
    )
}

export default Login
