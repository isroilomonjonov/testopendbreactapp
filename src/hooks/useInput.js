import {useState} from "react"
const useInput=(validate)=>{
    const [value,setValue]=useState("")
    const isValid=validate&&validate(value);
    const [blur,setBlur]=useState(false)
    const changeHandler=e=>{
        setBlur(true)
        setValue(e.target.value)
    }

    return{
        value,
        changeHandler,
        isValid,
        setValue,
        blur
    }
}
export default useInput