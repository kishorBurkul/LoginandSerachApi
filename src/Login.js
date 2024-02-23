import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show , setShow] = useState(false);

     const navigate =useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://swapi.dev/api/people/1/");
                // console.log( response.data)
                // console.log("data", response.data.name)
                const data = await response.data
                console.log(data.birth_year)
                console.log(data.name)
                       
            } catch (err) {
                console.log(err)
            }

        }
        fetchData()
    }, [])


    const handleLogin = async (e)=>{
        e.preventDefault()
       
            try {
                const response = await axios.get("https://swapi.dev/api/people/1/");
                console.log("data", response.name)
                 const data = await response.data
                 console.log(data.birth_year)
                if(username === data.name || password === data.birth_year){
                    navigate('/search');
                    setPassword('');
                    setUsername('')
                }else{
                    console.log("need login")
                    
                }
              } catch (err) {
                console.log(err)
            }


    }






    return (
        <>
        {show &&<div className='offset-3 col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <p className='h-3 text-center' >Login</p>
                    </div>
                    <div className='card-body'>
                        <form className='form-group' onSubmit={handleLogin}>
                            <label>Username</label>
                            <input type='text' value={username} name='name' onChange={(e) => setUsername(e.target.value)} className='form-control'></input>
                            <label>Password</label>
                            <input type='password' value={password} name='birth_year' onChange={(e) => setPassword(e.target.value)} className='form-control'></input>
                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </div>

            </div>}
            
        </>
    )
}

export default Login