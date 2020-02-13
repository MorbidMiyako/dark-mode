import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

  console.log("im used, useLocalStorage")

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = value => {
    console.log("setValue ran")
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}

export default useLocalStorage
