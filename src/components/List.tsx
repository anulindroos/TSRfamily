import React, { useState } from "react";
import { IState as IProps } from "../App"


const List: React.FC<IProps> = ({family}) => {

    const [list, updateList] = useState(family);

    const handleRemove = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.getAttribute("name")
        updateList(list.filter(person => person.fname !== name));
    }


    const renderList = (): JSX.Element[] => {
        return family.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                <h2>{person.fname}</h2>
                </div>
                <h2>{person.lname}</h2>
                <p>{person.age} years old</p>
                <button 
                className="RemoveFromList-btn"
                onClick={handleRemove}>
                    Remove
                </button>
                </li>  
            )
        })
    }


    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List