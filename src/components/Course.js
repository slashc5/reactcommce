import { useState } from 'react';

const Course= (props) => {
    const [almacen, setAlmacen] = useState(0);
    
    const handleAlmacen = () => {
        setAlmacen(almacen+1);
    }
    return (
        <>
        <h2>{props.name}</h2>
            <p>Anime: {props.category}</p>
            <p>Duracion: {props.genero}</p>
            <hr />
            <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button"onClick={handleAlmacen}>almacen</button>
</div>  {almacen} Stock 
            </>
    )
}

export default Course;

