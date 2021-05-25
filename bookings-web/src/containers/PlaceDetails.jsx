import React, { Component } from 'react'
import {useParams} from 'react-router-dom'
import { getAPlace } from '../services/placesApi'
import Place from '../components/places/Place'

const PlaceDetails = () => {
    const {id} = useParams();
    const place = getAPlace(id);
        return (
            <div>
                <Place {...place}/>
            </div>
        );
    };

export default PlaceDetails;
