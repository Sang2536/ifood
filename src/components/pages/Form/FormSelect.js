import PropTypes from 'prop-types';

function FormSelect({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: '',
    },
    idInput = '',
    requiredInput = false,
    readOnlyInput = false,
    textSelectDefault = 'Open this select menu',
    isSelected = true,
    optionSelect = [],
    textLabel,
    ...passPropsInput
}) {
    isSelected = optionSelect.length ? false : true;

    return (
        <div className={className.div}>
            <select
                id={idInput}
                className={className.input}
                ariaLabel="Default select example"
                required={requiredInput}
                readOnly={readOnlyInput}
                {...passPropsInput}
            >
                <option selected={isSelected}>{textSelectDefault}</option>
                {optionSelect.map((option) => (
                    <option key={option.value} value={option.value} selected={option.isSelected}>
                        {option.text}
                    </option>
                ))}
            </select>
            {
                (textLabel) ? (
                    <label for={idInput} className={className.label}>
                        {textLabel}
                    </label>
                ) : null
            }
        </div>
    );
}

FormSelect.propTypes = {
    className: PropTypes.shape({
        div: PropTypes.string,
        input: PropTypes.string,
        label: PropTypes.string,
    }),
    idInput: PropTypes.string.isRequired,
    requiredInput: PropTypes.bool,
    readOnlyInput: PropTypes.bool,
    isSelected: PropTypes.bool,
    optionSelect: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isSelected: PropTypes.bool.isRequired,
        }),
    ).isRequired,
    textLabel: PropTypes.string,
};

export default FormSelect;
