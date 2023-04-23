import React from 'react'
import styles from "./styles.module.css";
import { Meme } from '../Meme/Meme';
import { BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';

export const App = () => {
  return (
        <>
     <h1>Siva's meme creator App</h1>


<Routes>
       <Route exact  path='/' element={<Meme></Meme>}></Route>

        <Route path='/generated' element={ <MemeGenerated></MemeGenerated>}></Route>
        </Routes>
      

     
        </>    
  )
}


