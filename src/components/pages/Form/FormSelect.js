import PropTypes from 'prop-types';

function FormSelect({
    className = {
        div: 'form-floating mb-4',
        input: 'form-control',
        label: '',
    },
    idInput = '',
    classNameInput = 'form-control',
    requiredInput = false,
    readOnlyInput = false,
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
                <option selected={isSelected}>Open this select menu</option>
                {optionSelect.map((option) => (
                    <option key={option.id} value={option.value} selected={option.isSelected}>
                        {option.text}
                    </option>
                ))}
            </select>
            <label for={idInput} className={className.label}>{textLabel}</label>
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
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isSelected: PropTypes.bool.isRequired,
        }),
    ).isRequired,
    textLabel: PropTypes.string.isRequired,
};

export default FormSelect;
