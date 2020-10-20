import React  from 'react'
import {useSelector} from "react-redux"
import Form from "./form"
// class BasicDetailsFunc extends Component
class FormTemp extends React.Component {

    render(){

        return <form>
            <h3 className="text-center border-bottom border-red p-0 m-0 mb-2 title">{this.props.formName}</h3>
            <Form {...this.props} onChange ={this.props.onChange}/>
            {!this.props.validForm&&<p className="text-center text-red">please enter all the fields before save</p>}
            {this.props.formFields.length? "":<p className="text-center">Add fields</p>}
            <div className="d-flex justify-content-center m-0 p-0">

                {this.props.formFields.length?<button type="submit" className="mx-2" onClick={this.props.saveForm} value="save"> Save </button>:""}
                <button type="button" onClick={this.props.deleteForm} value="delete"> Delete </button>
            </div>
        </form>
    }
    
}

export default FormTemp;