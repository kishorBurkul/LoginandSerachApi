import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const LoginUser = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate

    useEffect(()=>{
        const fetchResults = async (query) => {
            try {
              const response = await axios.get(`https://swapi.dev/api/people/?search=${username}`);
              console.log(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchResults()
       },[])
       
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        fetch(`https://swapi.dev/api/people/?search=${username}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.count === 0) {
                    setError('Character not found');
                } else {
                    const character = data.results[0];
                    if (character.birth_year === password) {
                        setPassword('');
                        setUsername('');
                        alert('Login successful!');
                        navigate('/search')
                    } else {
                        setError('Incorrect password');
                    }
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('An error occurred. Please try again later.');
            });
    };

    return (

        <div>

            <div className='offset-3 col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <p className='h-3 text-center' >Login</p>
                    </div>
                    <div className='card-body'>
                        <form className='form-group' onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input 
                            className='form-control'
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label>Password</label>
                            <input
                             className='form-control'
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button  className='btn btn-primary ml-5 mt-3 '>Login</button>
                        </form>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </div>
                </div>

            </div>
            <h2>Login as a Star Wars character</h2>


        </div>
    );
};

export default LoginUser;
