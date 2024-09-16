import { NavigationHeaderComponent, FooterComponent } from './PageComponents';
import './scss/app.scss';

import HomePage from './PageLayouts/HomePage';

function App() {
    return (
        <div className="App">
            <NavigationHeaderComponent />

            <p>App (PageLayouts (PageComponents (SingleComponents))) </p>

            <HomePage />

            <FooterComponent />
        </div>
    );
}

export default App;
