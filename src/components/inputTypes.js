import React from 'react';

let inputTypes = [
    {
        inputType: "Number",
        label: "Number",
    },
    {
        inputType: "Email",
        label: "Email",
    },
    {
        inputType: "Select",
        label: "Select",
    },
    {
        inputType: "Text",
        label: "Text",
    },
    {
        inputType: "Textarea",
        label: "Textarea",
    },
]
export const FormInputs = (props) =>{
    return <div className="side-section-container h-100">
        <p className="text-center border-bottom border-red p-0 m-0 title">Form inputs</p>
        <ul className="forms-list p-2 text-center">
            {   
                inputTypes.map((input,index)=>{
                    return <li className="p-2">< button key={input.inputType+index} value ={input.inputType} onClick ={ (e,index) => props.onClick( e.target.value)}>{input.label}</button></li>
                })
            }
        </ul>
    </div>
}