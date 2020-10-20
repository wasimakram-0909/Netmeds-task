import React from 'react'
import { Col, FormGroup, Label, Input, CustomInput, UncontrolledPopover, PopoverBody } from 'reactstrap';

const FormInput = ({ type, ...rest }) => {
    const getInput = () => {
        switch (type) {
            case 'email':
                return (
                    <FormGroup className={`pb-3 ${rest.className}`}>
                        <Label for="exampleEmail">{rest.label}</Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}
                        <div className="mobile-user d-flex w-100">
                            <Col className="p-0">
                                <Input
                                    type="text"
                                    name={rest.name}
                                    max={rest.max}
                                    disabled={rest.disabled}
                                    value={rest.value}
                                    onChange={(e) => rest.onChange(e.target.name, e.target.value)}
                                />
                            </Col>
                        </div>
                        <strong className="text-danger small">
                            {rest.error ? rest.error[0] : ''}
                        </strong>
                    </FormGroup>
                )
            case 'number':
                return (
                    <FormGroup className={`pb-3 ${rest.className}`}>
                        <Label for="exampleEmail">
                            {rest.label}
                        </Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}


                        <div className="mobile-user d-flex w-100">
                            <Col className="p-0">
                                <Input
                                    type="text"
                                    name={rest.name}
                                    maxLength={rest.max}
                                    disabled={rest.disabled}
                                    value={parseInt(rest.value) > -1 ? rest.value : ''}
                                    onChange={(e) => rest.onChange(e.target.name, e.target.value.replace(/[^0-9]/gi, ''))}
                                />
                            </Col>
                        </div>
                    </FormGroup>
                )
           
            case 'select':
                return (
                    <FormGroup className={rest.className}>
                        <Label for={rest.name}>
                            {rest.label}
                        </Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}

                        
                        <div className="custom-select-caret">
                            <CustomInput
                                disabled={rest.disabled}
                                onChange={(e) => rest.onChange(e.target.name, e.target.value)}
                                type="select"
                                className="cursor-pointer"
                                value={rest.value}
                                name={rest.name}
                            >
                                {
                                    rest.defaultSelect ? <option value="">Select</option> : ''
                                }

                                {
                                    [{value:"option 1",label:"option 1"},{value:"option 2",label:"option 2"}].map((data, i) => <option key={i} value={data.value}>{data.label}</option>)
                                }
                            </CustomInput>
                        </div>
                    </FormGroup>

                )
            case 'text':
                return (
                    <FormGroup className={`${rest.className}`}>
                        <Label>
                            {rest.label}
                        </Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}


                        <Col className="p-0">
                            <Input type="text" name={rest.name}
                                value={rest.value}
                                disabled={rest.disabled}
                                maxLength={rest.maxLength}
                                placeholder={rest.placeholder}
                                onChange={(e) => rest.onChange(e.target.name, e.target.value)} />
                            {/* .replace(/[^a-zA-Z\s]/g, "") */}
                        </Col>
                    </FormGroup>
                )
            case 'textarea':
                return (
                    <FormGroup className="pb-3">
                        <Label for="exampleEmail">
                            {rest.label}
                        </Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}

                        <div className="mobile-user d-flex w-100">
                            <Col className="p-0">
                                <Input type="textarea" name={rest.name}
                                    value={rest.value}
                                    disabled={rest.disabled}
                                    readOnly={rest.readOnly}
                                    placeholder={rest.placeholder}
                                    maxLength={rest.maxLength}
                                    onChange={(e) => rest.onChange(e.target.name, e.target.value)} />
                            </Col>
                        </div>
                        <strong className="text-danger small">
                            {rest.error ? rest.error[0] : ''}
                        </strong>
                    </FormGroup>

                )
            case 'radio':
                // console.log(rest.options, "options")
                return (
                    <FormGroup className={`${rest.className}`}>
                        {rest.label ? <Label for="exampleEmail">{rest.label}</Label> : ''}
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}


                        <div>
                            {
                                [{label:"Yes",value:"Yes"},{label:"No",value:"No"}].map(data => (
                                    <label className={`custom-radio mr-3 ${rest.disabled ? 'disabled' : ''}`}>
                                        <div>
                                            <Label for={(new Date()).getTime()} className="cursor-pointer">{data.label}</Label>
                                            <Input id={`${(new Date()).getTime()}`} type="radio" name={rest.name}
                                                checked={data.value == rest.value}
                                                disabled={data.disabled || rest.disabled}
                                                onChange={(e) => rest.onChange(rest.name, data.value)} />
                                            <span className="checkmark"></span>
                                        </div>

                                    </label>
                                ))
                            }
                        </div>
                        <strong className="text-danger small">
                            {rest.error ? rest.error[0] : ''}
                        </strong>

                    </FormGroup>

                )
               
            default:
                return (
                    <FormGroup >
                        <Label for={rest.name}>
                            {rest.label}
                            {
                                rest.isOptional ? <span className="text-yellow">&nbsp;( Optional )</span> : ''
                            }
                        </Label>
                        {rest.showDelete&&<i onClick={(e)=>rest.deleteField(rest.name)}>&times;</i>}


                        <Input
                            type={type}
                            name={rest.name}
                            value={rest.value}
                            disabled={rest.disabled}
                            maxLength={rest.maxLength}
                            onChange={(e) => rest.onChange(e.target.name, e.target.value)}
                        />
                        <strong className="text-danger small">
                            {rest.error ? rest.error[0] : ''}
                        </strong>
                    </FormGroup>
                )
        }
    }


    return (
        getInput()
    );
}

export default FormInput;

FormInput.defaultProps = {
    onChange: () => { },
    type: 'text',
    options: [],
    popOverOptions: [],
    defaultSelect: true,
    isOptional: false,
    showDelete: false
}
