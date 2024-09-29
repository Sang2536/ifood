import PropTypes from "prop-types";

function Hr({ marginLeft, content }) {
    return (
        <div className="div-separator w-50 m-auto my-5">
            <span className="w-auto px-2" style={{ marginLeft: marginLeft }}>
                {{ content }}
            </span>
        </div>
    );
}

Hr.propTypes = {
    marginLeft: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Hr;