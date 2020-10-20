import { common } from "../service/actionType"

const initialState = {
    formList:[
        // {
        //     formName: "form 1",
        //     formId: "form1",
        //     formFields: [
        //         {
        //             label: "Name",
        //             type: "text",
        //             name:"userName",
        //             id:"userName",
        //             value:''
        //         }
        //     ]
        // },
        // {
        //     formName: "form 2",
        //     formId: "form2",
        //     formFields: [
        //         {
        //             label: "Name",
        //             type: "text",
        //             name:"userName",
        //             id:"userName",
        //             value:''
        //         }
        //     ]
        // }
    ],
    selectedFormId:null
}

export default (state = Object.assign({}, initialState), { type, payload }) => {
    let list = state.formList;

    switch (type) {
        case "ADD_FORM":

              //Find index of specific object using findIndex method.    
              let objIndex = state.formList.findIndex((obj => obj.formId == payload.formId));
              if(objIndex >=0){
                  list[objIndex] = payload
              }else{
                list = [...state.formList, payload]
              }
              //Log object to Console.
              console.log("Before update: ",list)
            
            return {
                ...state,
                formList : [...list]
            }
        case "SELECTED_FORM_ID":
            return {
                ...state,
                selectedFormId : payload
            }
        case "DELETE_FORM":

            let index = list.map(item => item.formId).indexOf(payload)
            list.splice(index, 1);
            return {
                ...state,
                formList:[...list]
            }

        default:
            return state
    }

}