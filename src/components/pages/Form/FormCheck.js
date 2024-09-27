import PropTypes from 'prop-types';

function FormCheck({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: ''
    },
    typeInput = 'checkbox',
    nameInput,
    idInput = '',
    valueInput,
    requiredInput = false,
    readOnlyInput = false,
    isChecked = false,
    textLabel,
    ...passPropsInput
}) {
    return (
        <div className={className.div}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <input
                type={typeInput}
                id={idInput}
                name={nameInput}
                className={className.input}
                value={valueInput}
                checked={isChecked}
                required={requiredInput}
                readOnly={readOnlyInput}
                {...passPropsInput}
            >
                {valueInput}
            </input>
            <label for={idInput} className={className.label}>
                {textLabel}
            </label>
        </div>
    );
}

FormCheck.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    typeInput: PropTypes.string,
    nameInput: PropTypes.string,
    idInput: PropTypes.string.isRequired,
    valueInput: PropTypes.string,
    isChecked: PropTypes.bool,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    textLabel: PropTypes.string.isRequired,
};

export default FormCheck;
