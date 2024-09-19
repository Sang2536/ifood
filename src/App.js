import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

import './scss/app.scss';
import { NavigationHeaderComponent, FooterComponent } from './PageComponents';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <section className="preloader">
                    <div className="spinner">
                        <span className="sk-inner-circle"></span>
                    </div>
                </section>
                
                <main>
                    <NavigationHeaderComponent />
                    
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            return <Route key={index} path={route.path} element={<Page />}></Route>;
                        })}
                    </Routes>
                </main>

                <FooterComponent />
            </div>
        </BrowserRouter>
    );
}

export default App;
