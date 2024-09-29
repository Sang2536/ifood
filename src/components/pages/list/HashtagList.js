
import PropTypes from 'prop-types';

import { Badge } from '../../tags';

function HashtagList(classNameDiv = 'col-12 mx-4', dataHashtag = []) {
    return (
        <div className={classNameDiv}>
            {dataHashtag.map((data) => {
                return (
                    <Badge
                        type={data.type}
                        className={data.className}
                        textContent={data.textContent}
                        children={data.children}
                    />
                );
            })}
        </div>
    );
}

HashtagList.propTypes = {
    classNameDiv: PropTypes.string,
    dataHashtag: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string, 
            className: PropTypes.string, 
            textContent: PropTypes.string, 
            children: PropTypes.node,
        }),
    ),
};

export default HashtagList;
