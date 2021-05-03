import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( {category} ) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);
    // useEffect( ()=> {
    //     // getGifs(category).then(imgs => {setImages(imgs)});
    //     getGifs(category).then(setImages);
    // }, [category]);

    const { data:images, loading} = useFetchGifs( category );
    

    return (
        <>
        <h3 className="animate__animated animate__bounce">
            {category}
        </h3>
        {
            loading && <p className="animate__animated animate__flash">Loading...</p>
        }
        <div className="card-grid">
        
        {/* <h2>{count}</h2>
        <button onClick= {() => setCount(count +1)}></button> */}
        {/* <ol>
            {images.map(img => (
                <li key= {img.id}>{img.title}</li>
            ))}
        </ol> */}

        {images.map(img => (
                <GifGridItem 
                    key = {img.id}
                    {...img}
                />
            ))}
        </div>
        </>
    )
}
