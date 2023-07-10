import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
    state = {searchInput: '',}

    onChangeInput = event => {
        this.setState({searchInput: event.target.value})
    }

    render() {
        const {searchInput} = this.state
        const {destinationsList} = this.props

        const searchResult = destinationsList.filter(eachDestination => 
        eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()))

        return (
            <div className='bg-container'>
                <div className="destination-search-con">
                    <h1 className='heading'>Destination Search</h1>

                    <div className='search-input-con'>
                        <input type='search' placeholder='Search' className='search-input' value={searchInput} onChange={this.onChangeInput} />
                        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="search-icon" />
                    </div>
                    
                    
                    <ul className='destinations-list'>
                        {searchResult.map(each => (
                            <DestinationItem key={each.id} destinationsDetails={each} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DestinationSearch