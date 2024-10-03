import PropTypes from 'prop-types';

function FormInput({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: '',
    },
    typeInput = 'text',
    nameInput,
    idInput = '',
    valueInput,
    placeholderInput,
    patternInput,
    requiredInput = false,
    readOnlyInput = false,
    textLabel,
    noteNode,
    ...passPropsInput
}) {
    return (
        <div className={className.div}>
            <input
                type={typeInput}
                name={nameInput}
                id={idInput}
                className={className.input}
                value={valueInput}
                pattern={patternInput}
                placeholder={placeholderInput ? placeholderInput : textLabel}
                required={requiredInput}
                readOnly={readOnlyInput}
                {...passPropsInput}
            />
            <label for={idInput} className={className.label}>
                {textLabel}
            </label>

            {noteNode}
        </div>
    );
}

FormInput.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    typeInput: PropTypes.string,
    nameInput: PropTypes.string,
    idInput: PropTypes.string.isRequired,
    valueInput: PropTypes.string,
    patternInput: PropTypes.string,
    placeholderInput: PropTypes.string,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    textLabel: PropTypes.string.isRequired,
    noteNode: PropTypes.node,
};

export default FormInput;
