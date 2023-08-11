import React from "react";
interface ITextInput {
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
    label?: string,
}
function TextInput({type, placeholder, className, label: labelText}: ITextInput) {
  return (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-xs font-light">{labelText}</label>
        <input className="border rounded-lg p-2"  type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextInput