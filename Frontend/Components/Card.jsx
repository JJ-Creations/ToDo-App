const Card = ({ props, onDelete }) => {
    return (
        <>
            <div className='card' key={props.id}>
                <p>{props.text}</p>
                <button className='completed-task-button'
                    onClick={(event) => {
                        event.preventDefault()
                        onDelete(props.id)
                    }}>❌
                </button>
            </div>
        </>
    )
}
export default Card