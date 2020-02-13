import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValue) => {

  const [values, setValues] = useLocalStorage("darkMode", initialValue)
  useEffect(() => {
    const body = document.body
    values ? body.classList.add("dark-mode") : body.classList.remove("dark-mode")
  }, [values])

  return [values, setValues]
}

export default useDarkMode
