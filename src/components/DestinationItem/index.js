import './index.css'

const DestinationItem = props => {
    const { destinationsDetails } = props

    const {imgUrl, name} = destinationsDetails

    return (
        <li className="destination-item">
            <img src={imgUrl} className='destination-img' alt={name} />
            <p className='name'>{name}</p>
        </li>
    )    
}

export default DestinationItem