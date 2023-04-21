import { useState } from 'react'
import { FaSearch, FaSearchengin } from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = () => {
    const [input, setInput] = useState('')

    const fetchData = (val) => {

    }

    return (
        <div className='input-wrapper'>

            <input placeholder='Type to Search...'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <FaSearchengin id='search-icon' />
        </div>
    )
}

//left at 12:56
