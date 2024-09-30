import PropTypes from 'prop-types';

function FormTextarea({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: '',
    },
    nameInput,
    idInput = '',
    valueInput,
    styleInput,
    rowsInput,
    colsInput,
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
                style={styleInput}
                rows={rowsInput}
                cols={colsInput}
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

FormTextarea.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    nameInput: PropTypes.string.isRequired,
    idInput: PropTypes.string.isRequired,
    styleInput: PropTypes.string,
    valueInput: PropTypes.string,
    rowsInput: PropTypes.number,
    colsInput: PropTypes.number,
    placeholderInput: PropTypes.string,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    textLabel: PropTypes.string.isRequired,
};

export default FormTextarea;
