import React from 'react'

export default function SearchBar(props) {

    const handleChangeValue = (e) => {
        const {value} = e.target
        props.filter(value)
    }
        return (
            <div>
                <input type="search" name="input" onChange={handleChangeValue}/>
            </div>
        )
}
