import { useState } from "react"
import Form from "./Form"
import DisplayData from "../DisplayData"

function ParentComponent(){
    const [firstName, setFirstName] = useState("Emily")
    const [lastName, setLastName] = useState("Matoke")


    function handleFirstNameChange(e){
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <div>
            <Form 
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName}/>
        </div>
    )
}

export default ParentComponent