import React, { useState, setState } from "react"

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"

export const Form = () => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')
const [gender, setGender] = useState('')
const [destination] = useState('India')
const [isVegan, setIsVegan] = useState(false)
const [isLactose, setIsLactose] = useState(false)
const [location, setLocation] = useState('')



  const destinations = {
    name: "destination",
    options: ["India", "Murica", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
    {
      name: "isVegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      name: "isLactoseFree",
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
      name: "fname",
      placeholder: "First Name",
    },
    {
      name: "lname",
      placeholder: "Last Name",
    },
    {
      name: "age",
      placeholder: "Age",
    },
  ]

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target

    type === "checkbox"
      ? setState({
          [name]: checked,
        })
      : setState({
          [name]: value,
        })
  }


    return (
      <form>
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

        <button>Submit</button>
      </form>
    )
  }

