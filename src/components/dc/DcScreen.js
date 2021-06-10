import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div className="container mt-5"> 
            <HeroList publisher={"DC Comics"}/>
        </div>
    )
}
