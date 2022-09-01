import React,{useState} from 'react'

const PersonCard = (props) => {
    const [person,setPerson] = useState(props.person)
    const addAge=()=> setPerson({...person,age:person.age+1})
    return (
    <div><h1>Name: {person.firstName} {person.lastName}</h1>
        <h5>Age: {person.age}</h5>
        <h5>Hair Color: {person.hairColor}</h5>
        <button onClick={addAge}>Birthday Cake</button>
    </div>
    )
}

export default PersonCard