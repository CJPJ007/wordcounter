import React, { useEffect, useState } from 'react'
import { callAPI } from '../helper/RestServiceCaller';
import Title from './Title';

export default function NorrisJoke() {
   const [joke,setJoke] = useState('');

    const callChuckNorrisAPI = async ()=>{
        
   
                callAPI("https://api.api-ninjas.com/v1/chucknorris?",null,"GET",{
                "X-api-key":`1u1gJ8xl1nxsnlQjigDtjA==pOLHLtmPUmo8CHqU`
    
            }).then((response)=>{
               return response.json()
            }).then((responseJson)=>{
                console.log(responseJson);
                setJoke(responseJson.joke);
            }).catch((error)=>{
                console.log(error);
                setJoke("No Joke For Today. Keep Smiling");
            });
    }
    useEffect(()=>{
        callChuckNorrisAPI();
    },[])
  return (
    <div className='flex flex-col items-center m-4 space-y-4'>
        <Title title={"ChuckNorris Jokes"}/>
        <p>Free JSON API for hand currated ChuckNorris Jokes</p>
       <div className='text-xs p-2 border-[1px] border-black rounded-md'>
       {joke}
        </div>
    </div>
  )
}
