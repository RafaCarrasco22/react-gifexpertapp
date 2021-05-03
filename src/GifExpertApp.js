import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories] = useState(['Pokemon '] );

    // const handleAdd = () => {
    //     // 'HunterXHunter'
    //     // setCategories( [ ...categories, 'Pokemon'] );
    //     setCategories( cats => [ ...cats, 'Pokemon'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ol>
                {
                    // categories.map( category=> {
                    //     return <li key={category}> {category } </li>
                    // })
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                            /> 
                    ))
                }
            </ol>
        </>
    );
}


export default GifExpertApp;