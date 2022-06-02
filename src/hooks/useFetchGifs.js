import React, { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state,setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        
        getGifs( category )
            .then( imgs => {
                if(imgs.length === 0){
                    alert('No se encontraron resultados')
                }
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category]) 


    return state // { data: [], loading: true }
}

