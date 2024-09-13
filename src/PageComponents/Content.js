import { Icon, Image } from "../SingleComponents";

function ContentComponent () {
    return (
        <div className="ContentComponent">
            <Image />

            <p>
                <Icon />
                Location: <code>src/PageComponents/Content.js</code> and save to reload.
            </p>
            <a
                className="content-component"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Content Component
            </a>
        </div>
    );
}

export default ContentComponent;