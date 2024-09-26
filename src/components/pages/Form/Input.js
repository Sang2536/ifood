import PropTypes from 'prop-types';

function Input({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: ''
    },
    typeInput = 'text',
    nameInput,
    idInput = '',
    valueInput,
    placeholderInput,
    requiredInput = false,
    readOnlyInput = false,
    textLabel,
    ...passPropsInput
}) {
    return (
        <div className={className.div}>
            <input
                type={typeInput}
                name={nameInput}
                id={idInput}
                value={valueInput}
                className={className.input}
                placeholder={placeholderInput ? placeholderInput : textLabel}
                required={requiredInput}
                readOnly={readOnlyInput}
                {...passPropsInput}
            />
            <label for={idInput} className={className.label}>
                {textLabel}
            </label>
        </div>
    );
}

Input.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    typeInput: PropTypes.string,
    nameInput: PropTypes.string,
    idInput: PropTypes.string.isRequired,
    valueInput: PropTypes.string,
    placeholderInput: PropTypes.string,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    textLabel: PropTypes.string.isRequired,
};

export default Input;
