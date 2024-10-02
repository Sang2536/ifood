import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';

import '../scss/pages/faq-accordion.scss';
import { SiteContentHeader } from '../components/pages';
import { AccordionVertically } from '../components/pages/accordion';

function FaqPage() {
    return (
        <div className="faq-page">
            <SiteContentHeader textFirst="Your favorite questions" textSecond="and our answers to them" />

            <section className="faq section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <h2 className="mt-5">
                                General <span>Info.</span>
                            </h2>

                            <AccordionVertically
                                idAccordion="accordionGeneral"
                                dataAccordions={[
                                    {
                                        textBtn: 'What is this Little Fashion?',
                                        idHeading: 'headingGeneralOne',
                                        idTarget: 'accordionGeneralOne',
                                        body: (
                                            <Fragment>
                                                <p className="large-paragraph">
                                                    <strong>Little Fashion</strong> is free Bootstrap 5 website template
                                                    for everyone. There are 8 HTML pages included in this template and
                                                    you can expand more pages as you need.
                                                </p>

                                                <p className="large-paragraph">
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </Fragment>
                                        ),
                                    },
                                    {
                                        textBtn: 'What is Tooplate website?',
                                        idHeading: 'headingGeneralTwo',
                                        idTarget: 'accordionGeneralTwo',
                                        body: (
                                            <p className="large-paragraph">
                                                <NavLink to="https://www.tooplate.com/free-templates" target="_blank">
                                                    Tooplate
                                                </NavLink>
                                                is a great website to download free HTML website templates for your
                                                business or personal use. Tooplate website has been online for almost 8
                                                years now. Thank you for visiting our website.
                                            </p>
                                        ),
                                    },
                                    {
                                        textBtn: 'How do I support your website?',
                                        idHeading: 'headingGeneralThree',
                                        idTarget: 'accordionGeneralThree',
                                        body: (
                                            <p className="large-paragraph">
                                                You can support our Tooplate website by sharing it to your friends or
                                                colleagues on the web or social media.
                                            </p>
                                        ),
                                    },
                                ]}
                            />

                            <h2 className="mt-5">
                                About <span>our products</span>
                            </h2>
                            
                            <AccordionVertically
                                idAccordion="accordionProduct"
                                dataAccordions={[
                                    {
                                        textBtn: 'What is Fashion Design?',
                                        idHeading: 'headingProductOne',
                                        idTarget: 'accordionProductOne',
                                        body: (
                                            <Fragment>
                                                <p className="large-paragraph">
                                                    <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                                    viverra maecenas accumsan lacus vel facilisis.
                                                </p>

                                                <p className="large-paragraph">
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </Fragment>
                                        ),
                                    },
                                    {
                                        textBtn: 'How do I use the product?',
                                        idHeading: 'headingProductTwo',
                                        idTarget: 'accordionProductTwo',
                                        body: (
                                            <p className="large-paragraph">
                                                Lorem ipsum is placeholder text commonly used in the graphic, print, and
                                                publishing industries for previewing layouts and visual mockups.
                                            </p>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FaqPage;
