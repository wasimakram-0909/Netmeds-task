export const saveForm = (data) => {
    console.log("action called",data)
    return {
      type: "ADD_FORM",
      payload: data
    }
}
export const selectedFormId = (data) => {
    console.log("action  form id",data)
    return {
      type: "SELECTED_FORM_ID",
      payload: data
    }
}
export const deleteForm = (data) => {
    console.log("action called",data)
    return {
      type: "DELETE_FORM",
      payload: data
    }
}