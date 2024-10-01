import PropTypes from 'prop-types';

function AccordionVertically({ idAccordion, dataAccordions = [] }) {
    return (
        <div className="accordion" id={idAccordion}>
            {dataAccordions.map((data) => {
                return (
                    <div key={data.idHeading} className="accordion-item">
                        <h2 className="accordion-header" id={data.idHeading}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${data.idTarget}`}
                                aria-expanded="true"
                                aria-controls={data.idTarget}
                            >
                                {data.textBtn}
                            </button>
                        </h2>

                        <div
                            id={data.idTarget}
                            className="accordion-collapse collapse"
                            aria-labelledby={data.idHeading}
                            data-bs-parent={`#${idAccordion}`}
                        >
                            <div className="accordion-body">{data.body}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

AccordionVertically.propTypes = {
    idAccordion: PropTypes.string.isRequired,
    dataAccordions: PropTypes.arrayOf(
        PropTypes.shape({
            textBtn: PropTypes.string.isRequired,
            idHeading: PropTypes.string.isRequired,
            idTarget: PropTypes.string.isRequired,
            body: PropTypes.node.isRequired,
        }),
    ),
};

export default AccordionVertically;
