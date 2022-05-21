export const GET_API_INFO = 'GET_API_INFO';
export const FILTER_BY_PLANET = "FILTER_BY_PLANET"
export const FILTER_BY_DATE = "FILTER_BY_DATE"  
export const ORDER_NAME = 'ORDER_NAME'
export const GET_CHARACTER = 'GET_CHARACTER'
 

const axios = require('axios');

export const getCharacter = (name) => (dispatch) => {
   
    return {
        type: GET_CHARACTER,
        payload: name
        }
}

export const getApiInfo = () => (dispatch) =>{
    return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => {dispatch({ type: GET_API_INFO, payload:json})})
}

export function planetFilter(value){
    return{
        type: FILTER_BY_PLANET,
        payload: value
    }
}

export function datesFilter(value){
    return{
        type: FILTER_BY_DATE,
        payload: value
    }
}

export function orderName(value){
    return{
        type: ORDER_NAME,
        payload: value
    }
}
