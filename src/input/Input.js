import React, { useEffect,useState } from 'react'
import './Input.css'
import Checkbox from './Checkbox'
import axios from 'axios'
export default function Input(){

    const [checkbox,setCheckbox] = useState([])
    // const [date, setDate] = useState('')
    // const [date2, setDate2] = useState('')
    const [radio,setRadio] = useState(false)
    // const [range,setRange] = useState(0)
    const [FormData, setFormData]= useState({
        userName:'',
        password: '',
        email:''
    })


    const handelFormData=(e)=>{
        const {name, value} = e.target
        setFormData((pre,e)=>({...pre,[name]:value}))
    }
    

    const handleCheck=(e)=>{
        if(e.target.checked){
            setCheckbox([...checkbox,e.target.value])
            console.log('working')
        }else {
            setCheckbox(checkbox.filter((list)=> list !== e.target.value))
            console.log('running')
        }
    }

  

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',{
            username: FormData.userName,
            email: FormData.email

        })
        .then((resp)=>console.log(resp))
        console.log(
        // {FormData.userName},
        //  ${FormData.email} 
        //  ${FormData.password}
         {checkbox},
        //   {date} {date2} 
          {radio} ,{FormData})
    }

    // && Number() && '.com'
    return(
        
        <div className='Form' onSubmit={()=>handleSubmit()}>
            <div className='container'>
                    <form>
                    <div className='row'>
                         
                           
                            {/* <div className='col-7'> */}
                            <div className='mainnav col col-sm-9 col-md-7 col-lg-7'>

                                {/* <div className='row'> */}
                                    <div className='col-6'>
                                <div className='register mb-3'>
                               <p>𝓡𝓮𝓰𝓲𝓼𝓽𝓮𝓻 </p>
                                </div>
                                {/* </div> */}
                    {/* <div className='col-4'>
                                <div className='row mx-3'>
                        <input
                        className='input p-3 col-4' 
                        type='date' 
                        value= {date} 
                        onChange={(e)=>setDate(e.target.value)}/>
                        <p className='m-2 col-2'>
                            <b>to</b>
                        </p>
                    <input 
                        className='input p-3 col-4'
                        type='date' 
                        name='date2'
                        value= {date2} 
                        onChange={(e)=>setDate2(e.target.value)}/>
                        </div>
                        </div> */}
                    </div>

                    <div className='margin col-11'>
                                <div className='row'>
                                    <label className='col-sm-3 mt-3'>
                                <b>𝓤𝓼𝓮𝓻𝓷𝓪𝓶𝓮</b></label>
                                <input className='input mx-3 col col-sm-6 col-md-6 col-lg-6' name='userName' type='text' value={FormData.userName} placeholder='  Enter Username ...' onChange={handelFormData}/>
                                {/* <button className='button col-1 mx-4' onClick={()=>handleAll()}>
                                    ADD
                                </button> */}
                                
                                </div>

                                <div className='row'>
                                    <label className='col-sm-3 mt-3'>
                                   <b> 𝓔𝓶𝓪𝓲𝓵 𝓲𝓭 </b></label>
                                    
                                    <input className='input mx-3 col col-sm-7 col-md-6 col-lg-6' name='email' type='email' placeholder='  Enter a Email Id' value={FormData.email} onChange={handelFormData}/>
                                    {/* <button onClick={handleEmail}>
                                        Submit
                                    </button> */}
                                    
                                </div>



                                <div className='row'>
                                    <label className='col-sm-3 mt-3'>
                                  <b>  𝓟𝓪𝓼𝓼𝔀𝓸𝓻𝓭 </b></label>    
                                 
                                    <input className='input mx-3 col col-sm-6 col-md-6 col-lg-6' name='password' type='password' placeholder=' Enter a password' value={FormData.password} onChange={handelFormData}/>
                                    {/* <button  onClick={handlePassword}>
                                        change
                                    </button> */}
                                    
                                </div>
                    </div>
                                <div className='row mx-2 mt-4'>
                                <div className='checkbox-box col-sm-4 col-md-7 col-lg-9'>
                            <Checkbox label = 'I agree with all terms & conditions' value='Happy' checkbox={checkbox} onChange={handleCheck}/><br/>
                            <Checkbox label = 'I agree with all privacy & policy' value='JS' checkbox={checkbox} onChange={handleCheck}/><br/>
                            {/* <Checkbox label = 'classes' value='classes' checkbox={checkbox} onChange={handleCheck}/><br/>
                            <Checkbox label = 'slice' value='slice' checkbox={checkbox} onChange={handleCheck}/><br/>
                            <Checkbox label = 'splice' value='splice' checkbox={checkbox} onChange={handleCheck}/><br/> */}
                            </div>

                            <div className='checkbox-box col-sm-2 col-md-2 col-lg-2'>
                        {/* <label style={{fontSize:'20px',fontWeight:'700'}}>
                        <input type='radio' value='JS' checked={radio === 'JS'} onChange={(e)=>setRadio(e.target.value)}/>
                        JS
                        </label><br/> */}
                        {/* <label style={{fontSize:'20px',fontWeight:'700'}}>
                        <input type='radio' value='CSS' checked={radio === 'CSS'} onChange={(e)=>setRadio(e.target.value)}/>
                        CSS
                        </label><br/> */}
                        <label>
                        <input type='radio' className='mx-2' value='HTML' checked={radio === 'HTML'} onChange={(e)=>setRadio(e.target.value)}/>
                        Remember me
                        </label>
                    </div>

                            </div>
                                <button className='button col-7 p-2 mt-4' type='Submit' onClick={handleSubmit}>
                                    <b>Submit</b>
                                </button>
                            </div>


                            {/* <div className='sidenav'> */}
                                {/* <div className='select'> */}
                            {/* 𝓢𝓮𝓵𝓮𝓬𝓽 𝓘𝓷𝓹𝓾𝓽𝓼 */}
                            {/* </div> */}
                            
                   

                   

                    {/* <div className='checkbox-box p-3'> */}
                        {/* <h1>
                            Range
                        </h1> */}
                        {/* <h5>{range}</h5> */}
                        {/* <input type='range' className='range-input' value={range} onChange={(e)=>setRange(e.target.value)}/> */}
                    {/* </div> */}
                            
                    {/* </div>   */}
                            </div>
                    {/* </div> */}
                    </form>
        </div>
        </div>
    )
}