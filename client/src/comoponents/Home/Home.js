import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getApiInfo,
    orderName,
    planetFilter,
    datesFilter
} from '../../redux/actions'
import Card from '../Card/Card'
import Paginado from '../Paginado/Paginado'
import SerachBar from '../Nav/Nav'
import "./styles-home.css";


export default function Home() {


    const dispatch = useDispatch()
    const allInfo = useSelector((state) => state.apiInfo)
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage, setCharactersPerPage] = useState(12)
    const lastCharacter = currentPage * charactersPerPage
    const firstCharacter = lastCharacter - charactersPerPage
    const currentCharacters = allInfo.slice(firstCharacter, lastCharacter)
    let allPlanets = []
    let aux = 0
    let allDates = []

    allInfo.map(character => {
        if (allPlanets.includes(character.origin.name)) {
            aux = 1
        } else {
            allPlanets.push(character.origin.name)
        }
    })

    allInfo.map(character => {
        if (allDates.includes(character.created)) {
            aux = 1
        } else {
            allDates.push(character.created)
        }
    })

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getApiInfo())
    }, [dispatch])





    function handleClickRefresh(e) {
        e.preventDefault()
        dispatch(getApiInfo())
    }

    function handleFilterPlanets(e) {
        dispatch(planetFilter(e.target.value))
    }

    function handleFilterDates(e) {
        dispatch(datesFilter(e.target.value))
    }



    function handlerSortName(e) {
        e.preventDefault()
        dispatch(orderName(e.target.value))
        setCurrentPage(1)
        setOrder(` ${e.target.value}`)
    }


    return (
        <div className="div-home">
            <div className="container">
                <div className="boton_refresh">
                    <div className="contenedor_search"><SerachBar className="search" /></div>
                    <div className="contenedor_boton"><button className="refresh" onClick={e => { handleClickRefresh(e) }}>Refresh</button></div>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col-auto">
                        <select onChange={e => { handlerSortName(e) }}>
                            <option >Order</option>
                            <option value='asc-name'>Asce</option>
                            <option value='dsc-name'>Desc</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <select onChange={e => { handleFilterPlanets(e) }}>
                            <option value='All planets'>Planets</option>
                            <option value='All planets'>All planets</option>
                            {allPlanets?.map((planet) => {

                                return (
                                    <option key={planet} value={planet}>
                                        {planet}
                                    </option>
                                )
                            }
                            )
                            }
                        </select>
                    </div>
                    <div class="col-auto">

                        <select ClassName="selects" onChange={e => { handleFilterDates(e) }}>
                            <option value='All dates'>Dates</option>
                            <option value='All dates'>All dates</option>
                            {allDates?.map((date) => {

                                return (
                                    <option key={date} value={date}>
                                        {date}
                                    </option>
                                )
                            }
                            )
                            }
                        </select>
                    </div>



                    <Paginado
                        charactersPerPage={charactersPerPage}
                        allInfo={allInfo.length}
                        paginado={paginado}
                    />
                    <div class="container">
                        <div class="row ">
                            {currentCharacters?.map((character) => {
                                return (
                                    <div class="col">
                                        <Card key={character.id}
                                            id={character.id}
                                            name={character.name}
                                            image={character.image ? character.image : 'https://images.cdn2.buscalibre.com/fit-in/360x360/56/ee/56ee77578ddb805c7826842d2f3ef63b.jpg'}
                                            species={character.species}
                                            origin={character.origin.name}
                                        />
                                    </div>

                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}