import React ,{useContext}from 'react'
import {Link} from 'react-router-dom'
import NameContextProvider, { NameContext,PopUpContext } from '../context/NameContext'

function Introduction() {
    const [nameContext,setNameContext] = useContext(NameContext)
    const [popupContext, setPopupContext] = useContext(PopUpContext)
    return (
        <div>
            <label htmlFor='name' >Enter your name:</label>
            <input type='text' id='name' value={nameContext} onChange={(e)=>setNameContext(e.target.value)}/>
            <button type='button' onClick={()=>setPopupContext(!popupContext)}>Submit </button>
        </div>
    )
}

export default Introduction
