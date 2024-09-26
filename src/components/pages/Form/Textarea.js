import PropTypes from 'prop-types';

function Textarea({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: '',
    },
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
            <textarea
                id={idInput}
                name={nameInput}
                className={className.input}
                placeholder={placeholderInput ? placeholderInput : textLabel}
                required={requiredInput}
                readOnly={readOnlyInput}
                {...passPropsInput}
            >
                {valueInput}
            </textarea>
            <label for={idInput} className={className.label}>
                {textLabel}
            </label>
        </div>
    );
}

Textarea.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    nameInput: PropTypes.string,
    idInput: PropTypes.string.isRequired,
    valueInput: PropTypes.string,
    placeholderInput: PropTypes.string,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    textLabel: PropTypes.string.isRequired,
};

export default Textarea;
