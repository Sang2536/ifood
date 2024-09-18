import { NavigationHeaderComponent, FooterComponent } from './PageComponents';
import './scss/app.scss';

import HomePage from './PageLayouts/HomePage';

function App() {
    return (
        <div className="App">
            <section className="preloader">
                <div className="spinner">
                    <span className="sk-inner-circle"></span>
                </div>
            </section>

            <main>
                <NavigationHeaderComponent />

                <HomePage />
            </main>

            <FooterComponent />
        </div>
    );
}

export default App;
