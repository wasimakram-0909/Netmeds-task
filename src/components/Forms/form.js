import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';
import FormInput from "../../components/FormInput"


const Form = ({formFields, formId ,showDelete=false, ...rest}) =>{
    // console.log("proa-------------------ps,",formFields)showDelete={true}
    return <div className="row p-0 m-0">
        {formFields && formFields?.map((item,index)=>{
            return <div key = {index} className="col-md-6">
                <FormInput {...item} formId={formId} value ={item.value} showDelete={showDelete} index = {index+1} deleteField={rest.deleteField} onChange={rest.onChange}/>
            </div>
        })}
    </div>
}

export default Form;