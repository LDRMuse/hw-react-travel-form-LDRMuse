import React, { useState, setState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [gender, setGender] = useState('')
const [destination, setDestination] = useState('India')
const [isVegan, setIsVegan] = useState(false)
const [isLactose, setIsLactose] = useState(false)
const [location, setLocation] = useState('')



  const destinations = {
    id: "destination",
    options: ["India", "Murica", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
    {
      id: "isVegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      id: "isLactoseFree",
      type: "checkbox",
      value: "isLactoseFree",
    },
  ]

  const genderInputs = [
    {
      id: "gender",
      type: "radio",
      value: "M",
    },
    {
      id: "gender",
      type: "radio",
      value: "F",
    },
  ]

  const textInputs = [
    {
      id: "fname",
      placeholder: "First Name",
    },
    {
      id: "lname",
      placeholder: "Last Name",
    },
    {
      id: "age",
      placeholder: "Age",
    },
  ]

  const handleChange = ({ target }) => {
    const { id, value, type, checked } = target

    if (type === 'checkbox') {
      id === 'isVegan'
        ? setIsVegan(checked)
        : setIsLactose(checked)
    }
    if (id === 'fname') {
      setFirstName(value)
    }
    if (id === 'lname') {
      setLastName(value)
    }
    if (id === 'age') {
      setAge(value)
    }
    if (id === 'gender') {
      setGender(value)
    }
    if (id === 'destination') {
      setDestination(value)
    }
    if (id === 'location') {
      setLocation(value)
    }


  }


    return (
      <form className='field has-text-centered'>
        {textInputs.map(({ name, placeholder }, i) => (
          <Input
            name={name}
            placeholder={placeholder}
            inputHandler={handleChange}
            key={i}
          />
        ))}

        {genderInputs.map(({ name, value }, i) => (
          <Radio
            checked={gender === value}
            name={name}
            value={value}
            handler={handleChange}
            key={i}
          />
        ))}

        <Select
          selections={destinations}
          selectionsHandler={handleChange}
        />

        {dietaryRestrictions.map(({ name, value = name }, i) => (
          <Checkbox
            name={name}
            value={value}
            handler={handleChange}
            checked={name}
            key={i}
          />
        ))}

        <button className='button is-primary'>Submit</button>
      </form>
    )
  }

