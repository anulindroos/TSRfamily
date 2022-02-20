import React, {useState} from "react";
import { IState as Props } from "../App"

interface IProps {
    family: Props["family"]
    setFamily: React.Dispatch<React.SetStateAction<Props["family"]>>
}

const AddToList: React.FC<IProps> = ({family, setFamily}) => {

const [input, setInput] = useState({
    fname: "",
    lname: "",
    age: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: [e.target.value]
        })
    }

    const handleClick = ():void => {
        if(
            !input.fname || !input.lname || !input.age 
        ) {
            return
        }

        setFamily([
            ...family,
            {  
                fname: input.fname,
                lname: input.lname,
                age: parseInt(input.age)
                
            }
        ]);

        setInput({
            fname: "",
            lname: "",
            age: ""
        })
    }

    return (
        <div className="AddToList">
            <input 
                type="text"
                placeholder="First name"
                className="AddToList-input"
                value={input.fname}
                onChange={handleChange}
                name="fname"
            />
            <input 
                type="text"
                placeholder="Last name"
                className="AddToList-input"
                value={input.lname}
                onChange={handleChange}
                name="lname"
            />
            <input 
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <button 
                className="AddToList-btn"
                onClick={handleClick}
            
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList