import React from 'react'
import { useDispatch } from "react-redux";
import {selectedFormId} from "../action"

export const SideSection = ({createNewForm,formList,showCreateForm}) =>{

    const dispatch = useDispatch();
    const handleSelectedForm = (id) =>{
        dispatch(selectedFormId(id))
    }
    // console.log(formList,"---------------------")
    return <div className="side-section-container h-100">
        {showCreateForm&&<div className="create-new-btn p-1 mb-3">
            <p className="text-white text-center m-0 p-2" onClick={createNewForm}>Create New Form</p>
        </div>}
        <h5 className="text-center border-bottom">Created Forms</h5>
        <ul className="forms-list p-2 text-center">
            {formList.length ? formList.map((form)=> <li onClick={()=>handleSelectedForm(form.formId)}>{form.formName}</li>):<li>No forms created</li>}
            {/* <li>formform  1</li>
            <li>form 2</li>
            <li>form 3</li> */}
        </ul>
    </div>
}