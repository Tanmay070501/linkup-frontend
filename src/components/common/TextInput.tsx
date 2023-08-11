import React, { ForwardedRef } from "react";
interface ITextInput {
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
    label?: string,
    error?: string,
}
const TextInput = React.forwardRef(({type, placeholder, label: labelText, error}: ITextInput, ref?: ForwardedRef<HTMLInputElement>) =>  {
  return (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-xs font-light">{labelText}</label>
        <div className="w-full relative">
          <input ref={ref} className={`w-full border rounded-lg p-2 ${error && "border-red-400"}`}  type={type} placeholder={placeholder} />
        {error && <p className="w-full text-red-400 font-thin text-sm text-right translate-y-full absolute bottom-0 left-0">{error}</p>}
        </div>
    </div>
  )
})

export default TextInput