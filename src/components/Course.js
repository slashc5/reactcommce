const Course= (props) => {
    return (
        <>
        <h2>{props.name}</h2>
            <p>Anime: {props.category}</p>
            <p>Duracion: {props.genero}</p>
            <hr />
            </>
    )
}

export default Course;