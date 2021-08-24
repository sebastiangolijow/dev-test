import React, { useEffect } from "react"
import {useDispatch} from 'react-redux'
import {getTickets} from '../redux/actions'
import {Ticket} from './Card'
function Home() {

    const dispatch = useDispatch();
    useEffect(() => dispatch(getTickets()));

    return (

        <div style={{backgroundColor:'rgba(138,221,45,0.1)'}}>
            <Ticket/>
        </div>
    )
}


export default Home;