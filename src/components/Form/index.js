import React, { useState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [destination, setDestination] = useState('India')
  const [isVegan, setIsVegan] = useState(false)
  const [isLactose, setIsLactose] = useState(false)



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
      name: "gender",
      type: "radio",
      value: "M",
    },
    {
      name: "gender",
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
      id: "email",
      placeholder: "Email",
    },
  ]

  const handleChange = ({ target }) => {
    const { id, value, checked } = target

    switch (id) {
      case "fname":
        setFirstName(value)
        break
      case "lname":
        setLastName(value)
        break
      case "Email":
        setEmail(value)
        break
      case "isVegan":
        setIsVegan(value)
        break
        case "isLactose":
          setIsLactose(value)
          break
      case "destination":
        setDestination(value)
        break
        default:
          setGender(value)
    }}


    return (
      <form className='field has-text-centered'>
        {textInputs.map(({ id, placeholder }, i) => (
          <Input
            id={id}
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

        {dietaryRestrictions.map(({ id, value, checked}, i) => (
          <Checkbox
            id={id}
            value={value}
            handler={handleChange}
            checked={checked}
            key={i}
          />
        ))}

        <button className='button is-primary'>Submit</button>
      </form>
    )
  }

