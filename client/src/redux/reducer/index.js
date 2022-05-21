import { GET_API_INFO,
    ORDER_NAME,
    FILTER_BY_PLANET,
    GET_CHARACTER,
    FILTER_BY_DATE
        } from "../actions";


const initialState = {
    apiInfo: [],
    apiInfo2: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_API_INFO:
            console.log(action.payload.results)
            return{
                ...state,
                apiInfo: action.payload.results,
                apiInfo2: action.payload.results,
            }
            case GET_CHARACTER:
                let allInfo2 = state.apiInfo2
                let arrayCharacters = allInfo2.filter(character => character.name.toLowerCase().includes(action.payload.toLowerCase()))
            return{
                ...state,
                apiInfo: arrayCharacters
            }
        case FILTER_BY_PLANET:
            const allInfo = state.apiInfo2
            const planet = action.payload
            const characterFiltered = planet === 'All planets' ? allInfo : allInfo.filter((character) => character.origin.name.includes(planet))
                
           return{
               ...state, 
               apiInfo: characterFiltered
           }
           case FILTER_BY_DATE:
            const allInfo3 = state.apiInfo2
            const date = action.payload
            const characterFiltered2 = date === 'All dates' ? allInfo3 : allInfo3.filter((character) => character.created.includes(date))
                
           return{
               ...state, 
               apiInfo: characterFiltered2
           }
            case ORDER_NAME:
                let nameSort = state.apiInfo2
                let sortName = action.payload === 'asc-name' ?
                nameSort.sort(function(a, b){
                    if(a.name > b.name){
                        return 1
                    }
                    if(b.name > a.name){
                        return -1
                    }
                    return 0
                }) :
                nameSort.sort(function(a, b){
                    if(a.name > b.name){
                        return -1
                    }
                    if(b.name > a.name){
                        return 1
                    }
                    return 0
                })
            return{
                ...state,
                apiInfo: sortName
            }
            default: return{...state}
       
    };
};

export default rootReducer;
