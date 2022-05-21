import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacter } from '../../redux/actions';
import "./styles-nav.css";

export default function SerachBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(a){
        a.preventDefault()
        setName(a.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
        dispatch(getCharacter(name))
        setName('')
        
    }
    
    return(
        <div>
           <input className="input_search"  onChange={e => {handleInputChange(e)}} type="text" placeholder="Search..."/>
           <button className="button_search" onClick={e => {handleSubmit(e)}} type="submit">Search</button>
        </div>
    )

}