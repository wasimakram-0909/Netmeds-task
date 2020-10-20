import React from "react";
import {SideSection} from "../../components/SideSection"
import { FormInputs } from "../../components/inputTypes"
import FormTemp from '../../components/Forms/index'
import {ConfirmationModal} from "../../components/Model"
import {NewFormModel} from "../../components/NewFormModel"
import * as actions from "../../action"
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"



// class FormTemp extends React.Component
class RecordsFnc  extends React.Component{

    state = {
        selectedFormId:"",
        tempFormName:'',
        validForm: true,
        showModel : false,
        showFormNameModel:false,
        formName: "",
        formFieldName:"",
        formFieldLabel:"",
        formId: "",
        formFields: [
            // {
            //     label: "Name",
            //     type: "text",
            //     name:"form1Input1",
            //     id:"userName",
            //     value:''
            // }
        ]
    }

    
    saveForm = (e) =>{
        e.preventDefault();
        let { formFields=[], formName, formId } =  this.state;
        // let isValied =  formFields.length && formFields.some((input)=>{
        //     return input.value =="" ;
        // })
        // this.setState({
        //     ...this.state,
        //     validForm:!isValied,
        // })
        let data = {
            formName,
            formId,
            formFields
        }
        // if(!isValied){
            this.props.saveFormAction(data)
        // }

    }

    deleteForm = ()=>{
        let {formId} = this.state 
        console.log(formId)
        this.props.deleteFormAction(formId)
        this.setState({
            ...this.state,
            formName: "",
            formId: "",
            formFields: []
        })
    }

   
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps?.formList, prevState.formId,"=================")
        // console.log(nextProps,":", prevState)
        if(nextProps?.selectedFormId !== prevState?.formId){
            // return{ nextProps?.formList? }
            return nextProps?.formList?.length&& nextProps.formList.find((res)=>res.formId === nextProps?.selectedFormId)
        }
        // nextProps?.formListp
        // if (prevState.init)
        //     return {
        //         ...nextProps,
        //         uploadDocuments: nextProps.pgFormUploadDocument,
        //         init: false
        //     }
        return null
    }

    render(){
        return <>
            <div className="row m-0 main-container m">
                <div className="col-md-2 border sections m-0 p-0">
                    <SideSection createNewForm={this.createNewForm} {...this.props} />
                </div>
                <ConfirmationModal isOpen={this.state.showModel} {...this.state} toggle={this.toggle} onFieldLabelChange={this.onFieldLabelChange} successBtn = {this.modelAccepted}  />

                <NewFormModel isOpen={this.state.showNewFormModel} {...this.state} toggle={this.toggleForm} onFieldLabelChange={this.onNewFormNameChange} successBtn = {this.newFormModelAccepted}  />

                <div className="col-md-10 border sections m-0 p-0">
                    {!!this.state.formName ? <FormTemp {...this.state} onChange={this.onChange} deleteForm={this.deleteForm} saveForm={this.saveForm} deleteField={this.deleteField}/>:<p className="text-center">Create or Select a form</p>}
                </div>
            </div>
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        formList:state.common.formList,
        selectedFormId: state.common.selectedFormId
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        saveFormAction:actions.saveForm,
        deleteFormAction: actions.deleteForm
    }, dispatch)
}

// export {connect(mapStateToProps,mapDispatchToProps)(HomePageFnc)};
const Records = connect(mapStateToProps,mapDispatchToProps)(RecordsFnc);
export { Records }