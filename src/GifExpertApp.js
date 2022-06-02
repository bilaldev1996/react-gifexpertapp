import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Piece']);

    /* const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    } */

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } categories = {  categories } />
            <hr />

            <ol>
                {
                    categories.map( (category,i) => (
                        //<li key={ category }>{ category }</li>
                        <GifGrid 
                            key={ category}
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
    

}


export default GifExpertApp;

