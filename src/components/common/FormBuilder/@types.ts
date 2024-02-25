import { HTMLInputTypeAttribute, ReactNode } from "react"
import { inputFieldType } from "./constant"

export type singleFieldType  = {
    // input type related type
    inputFieldType: inputFieldType,
    startIcon?: ReactNode

    // input field related type
    type?: HTMLInputTypeAttribute
    label: string,
    placeholder?: string
    
    // dropdown field related types
    renderOptions?: ReactNode[]

    // generic input prop type
    keyIdentifier: string,
}