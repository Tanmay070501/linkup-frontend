import { singleFieldType } from "./@types"
import { inputFieldType } from "./constant"
import TextInput from "../TextInput"

interface FormBuilderProps {
  formik: {
    values: any,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  };
  formConfig: singleFieldType[];
}

const FormBuilder = ({formConfig, formik}: FormBuilderProps) =>  {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, key:string) => {
    formik.setFieldValue(key, e.target.value)
  }
     
  return (
    <>
      {formConfig.map((singleField, index) => {
          switch(singleField.inputFieldType){
              case inputFieldType.text:
                return (
                  <TextInput
                      type={singleField.type}
                      label={singleField.label}
                      placeholder={singleField.placeholder || ""}
                      onChange={e => changeHandler(e, singleField.keyIdentifier)}
                      key={index}
                      startIcon={singleField.startIcon}
                      value={formik.values[singleField.keyIdentifier]}
                  />
                )
              default:
                return null
          }
      })}
    </>
  )
}

export default FormBuilder