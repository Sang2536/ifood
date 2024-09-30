import PropTypes from 'prop-types';

import { FormInput, FormTextarea } from '../components/pages/form';

function FormComponent({ 
    formAction, 
    formMethod, 
    formClass = 'contact-form me-lg-5 pe-lg-3', 
    dataInput = {
        className: {
            div: 'form-floating my-4',
            input: 'form-control',
        },
        typeInput: "text",
        nameInput: "name",
        idInput: "name",
        valueInput: "",
        placeholderInput: "Full name",
        requiredInput: true,
        textLabel: "Full name",
    } 
}) {
    return (
        <div className="FormComponent">
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <form action={formAction} method={formMethod} className={formClass} role="form">
                <FormInput
                    className={{
                        div: 'form-floating my-4',
                        input: 'form-control',
                    }}
                    typeInput="text"
                    nameInput="name"
                    idInput="name"
                    valueInput=""
                    placeholderInput="Full name"
                    requiredInput
                    textLabel="Full name"
                />

                <FormInput
                    className={{
                        div: 'form-floating my-4',
                        input: 'form-control',
                    }}
                    typeInput="email"
                    nameInput="email"
                    idInput="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholderInput="Email address"
                    requiredInput
                    textLabel="Email address"
                />

                <FormInput
                    className={{
                        div: 'form-floating my-4',
                        input: 'form-control',
                    }}
                    typeInput="subject"
                    nameInput="subject"
                    idInput="subject"
                    placeholderInput="Subject"
                    requiredInput
                    textLabel="Subject"
                />

                <FormTextarea
                    className={{
                        div: 'form-floating my-4',
                        input: 'form-control',
                    }}
                    nameInput="message"
                    idInput="message"
                    styleInput={{ height: '160px' }}
                    placeholderInput="Leave a comment here"
                    requiredInput
                    textLabel="Tell us about the project"
                />

                <div className="col-lg-5 col-6">
                    <button type="submit" className="form-control">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;
