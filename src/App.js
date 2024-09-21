import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

import './scss/app.scss';
import './scss/responsive-style.scss';
import { NavigationHeaderComponent, FooterComponent } from './PageComponents/pages';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <section className="preloader">
                    <div className="spinner">
                        <span className="sk-inner-circle"></span>
                    </div>
                </section>

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const noLayout = route.noLayout;

                        if (noLayout === true) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <main>
                                            <Page />
                                        </main>
                                    }
                                ></Route>
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Fragment>
                                            <main>
                                                <NavigationHeaderComponent />

                                                <Page />
                                            </main>

                                            <FooterComponent />
                                        </Fragment>
                                    }
                                ></Route>
                            );
                        }
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
