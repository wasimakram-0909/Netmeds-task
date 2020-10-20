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
class HomePageFnc  extends React.Component{

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

    onChange = (name, value) => {
        let { formFields } = this.state
        formFields.find((item)=>item.name == name).value = value;
        this.setState({formFields,validForm:true})
    }

    onFieldLabelChange = (name, value) => {
        let { formFieldLabel } = this.state
        this.setState({...this.state, formFieldLabel: value})
    }

    deleteField = (id) =>{
        let { formFields } = this.state

        let index = formFields.map(item => item.name).indexOf(id)
          formFields.splice(index, 1);
          this.setState({
              ...this.state,
              formFields
          }) 
    }

    addNewField = () =>{
        let _formFields = this.state.formFields;
        let formFieldName = this.state.formFieldName;
        let formFieldLabel = this.state.formFieldLabel;
        let _formId = this.state.formId;
        let date = new Date;
        let _name = _formId+formFieldName+date.getTime()
        _formFields.push(
            {
                label:formFieldLabel ,
                type: formFieldName,
                name:_name,
                id:"userName",
                value:''
            }
        )
        formFieldLabel=""
        this.setState(prevState => ({...prevState, formFields:_formFields,formFieldLabel:""}))
    }

    toggle = () => {
        this.setState({
            ...this.state,
            showModel: !this.state.showModel
        })
    };

    toggleForm = () => {
        this.setState({
            formName: "",
            formFieldName:"",
            formFieldLabel:"",
            formId: "",
            showNewFormModel: !this.state.showNewFormModel
        })
    };

    modelAccepted = () =>{

        this.setState({
            ...this.state,
            showModel: !this.state.showModel
        },()=>this.addNewField())
    }

    handleAddNewField = (e) =>{
        this.setState({
            ...this.state,
            showModel: !this.state.showModel,
            formFieldName: e
        })
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

    createNewForm =()=>{
        this.setState({
            ...this.state,

            showNewFormModel: !this.state.showNewFormModel
        })
    }

    newFormModelAccepted = () =>{
        let date = new Date;
        console.log("form"+date.getTime(),"------------")
        this.setState({
            // ...this.state,
            formId: "form"+date.getTime(),
            formFields:[],
            formName: this.state.tempFormName,
            showNewFormModel: !this.state.showNewFormModel,
        },()=> console.log(this.state,"-------------------++++++++"))
    }

    onNewFormNameChange = (name, value) => {
        let { tempFormName } = this.state
        this.setState({...this.state, tempFormName: value})
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
                    <SideSection showCreateForm={true} createNewForm={this.createNewForm} {...this.props} />
                </div>
                <ConfirmationModal isOpen={this.state.showModel} {...this.state} toggle={this.toggle} onFieldLabelChange={this.onFieldLabelChange} successBtn = {this.modelAccepted}  />

                <NewFormModel isOpen={this.state.showNewFormModel} {...this.state} toggle={this.toggleForm} onFieldLabelChange={this.onNewFormNameChange} successBtn = {this.newFormModelAccepted}  />

                <div className="col-md-7 border sections m-0 p-0">
                    {!!this.state.formName ? <FormTemp showDelete={true} {...this.state} onChange={this.onChange} deleteForm={this.deleteForm} saveForm={this.saveForm} deleteField={this.deleteField}/>:<p className="text-center">Create or Select a form</p>}
                </div>
                <div className="col-md-3 border sections m-0 p-0">
                {!!this.state.formName ? <FormInputs onClick={this.handleAddNewField}/>:<div className="text-center side-section-container h-100"></div>}
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
const HomePage = connect(mapStateToProps,mapDispatchToProps)(HomePageFnc);
export { HomePage }