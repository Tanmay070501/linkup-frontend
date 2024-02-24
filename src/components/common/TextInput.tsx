import React, { ForwardedRef } from "react";
interface ITextInput {
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    className?: string,
    label?: string,
    error?: string,
    value?: React.InputHTMLAttributes<HTMLInputElement>["value"]
    startIcon?: React.ReactElement
}
const TextInput = React.forwardRef(({type, placeholder, label: labelText, error, value, startIcon}: ITextInput, ref?: ForwardedRef<HTMLInputElement>) =>  {
  return (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-xs font-light">{labelText}</label>
        <div className="w-full relative">
          <input value={value} ref={ref} className={`w-full text-base border rounded-lg p-2 ${error ? "border-red-400": ''} placeholder:font-extralight placeholder:text-justify ${startIcon ? "pl-10" : ''}`}  type={type} placeholder={placeholder} />
          {startIcon && <div className="h-full flex items-center justify-center absolute left-0 mx-3 top-1/2 -translate-y-1/2 py-2 [&>svg]:w-4 [&>svg]:h-4 " >
            {startIcon}
          </div>}
          {error && <p className="w-full text-red-400 font-thin text-sm text-right translate-y-full absolute bottom-0 left-0">{error}</p>}
        </div>
    </div>
  )
})

export default TextInput