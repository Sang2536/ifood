import PropTypes from 'prop-types';

function PillsTab({
    dataUl = {
        className: 'nav-item',
        ulId: 'pills-tab',
    },
    dataPillsTab = [],
}) {
    return (
        <ul className={dataUl.className} id={dataUl.ulId} role="tablist">
            {dataPillsTab.map((data) => {
                return (
                    <li className={data.className.li} role="presentation">
                        <button
                            className={data.className.tabClick}
                            id={data.tabId}
                            dataBsToggle="pill"
                            dataBsTarget={`#${data.tabName}`}
                            type={data.tabType}
                            role="tab"
                            ariaControls={data.tabName}
                            ariaSelected={data.tabSelected}
                        >
                            {data.textContent}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

PillsTab.propTypes = {
    dataUl: PropTypes.shape({
        className: PropTypes.string,
        ulId: PropTypes.string.isRequired,
    }),
    dataPillsTab: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.shape({
                li: PropTypes.string,
                tabClick: PropTypes.string,
            }),
            tabId: PropTypes.string.isRequired,
            tabName: PropTypes.string.isRequired,
            tabType: PropTypes.string.isRequired,
            tabSelected: PropTypes.string.isRequired,
            textContent: PropTypes.string.isRequired,
        }),
    ),
};

export default PillsTab;
