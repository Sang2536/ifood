import '../scss/custom-img.scss';
import '../scss/testimonial.scss';

function StoryPage() {
    return (
        <div className="story-page">
            <header className="site-header section-padding-img site-header-image">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 header-info">
                            <h1>
                                <span className="d-block text-primary">Company</span>
                                <span className="d-block text-dark">Fashion</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <img src="https://i.pinimg.com/564x/5d/4d/40/5d4d400928622b5c7415201f3820ac56.jpg" className="header-image img-fluid" alt="" />
            </header>

            <section className="team section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-5">Meet our <span>team</span></h2>
                        </div>

                        <div className="col-lg-4 mb-4 col-12">
                            <div className="team-thumb d-flex align-items-center">
                                <img src="https://i.pinimg.com/736x/c4/a1/05/c4a10551b1c3313edfaa82925db37cce.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

                                <div className="team-info">
                                    <h5 className="mb-0">Don</h5>
                                    <strong className="text-muted">Product, VP</strong>

                                    {/* Button trigger modal */}
                                    <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#don">
                                      <i className="bi-plus-circle-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4 col-12">
                            <div className="team-thumb d-flex align-items-center">
                                <img src="https://i.pinimg.com/474x/85/67/57/8567573d6dc9ce44e1c40cb8036ea84b.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

                                <div className="team-info">
                                    <h5 className="mb-0">Kelly</h5>
                                    <strong className="text-muted">Marketing</strong>

                                    {/* Button trigger modal */}
                                    <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#kelly">
                                      <i className="bi-plus-circle-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-lg-0 mb-4 col-12">
                            <div className="team-thumb d-flex align-items-center">
                                <img src="https://i.pinimg.com/564x/11/eb/10/11eb10b226cd065d9ce41700b7ac0f73.jpg" className="img-fluid custom-circle-image team-image me-4" alt="" />

                                <div className="team-info">
                                    <h5 className="mb-0">Marie</h5>
                                    <strong className="text-muted">Founder</strong>

                                    {/* Button trigger modal */}
                                    <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#marie">
                                      <i className="bi-plus-circle-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto col-11">
                            <h2 className="text-center">Customer love, <br /> <span>Little</span> Fashion</h2>

                            <div className="slick-testimonial">
                                <div className="slick-testimonial-caption">
                                    <p className="lead">Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="https://i.pinimg.com/564x/f8/3f/16/f83f1657c087726da96e2c2c0f265859.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span>George, <strong className="text-muted">Digital Art Fashion</strong></span>
                                    </div>
                                </div>

                                <div className="slick-testimonial-caption">
                                    <p className="lead">Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="https://i.pinimg.com/564x/9b/e2/5c/9be25cb413c0138adeef817620ce77db.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span>Sandar, <strong className="text-muted">Zoom Fashion Idea</strong></span>
                                    </div>
                                </div>

                                <div className="slick-testimonial-caption">
                                    <p className="lead">Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="https://i.pinimg.com/736x/6b/29/9b/6b299b294cee6bf2d9f62df84b393d06.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span>Marie, <strong className="text-muted">Art Fashion Design</strong></span>
                                    </div>
                                </div>

                                <div className="slick-testimonial-caption">
                                    <p className="lead">Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor sit amet</p>

                                    <div className="slick-testimonial-client d-flex align-items-center mt-4">
                                        <img src="https://i.pinimg.com/736x/24/3a/1d/243a1d27220ed555106018d7a0dd8daf.jpg" className="img-fluid custom-circle-image me-3" alt="" />

                                        <span>Catherine, <strong className="text-muted">Dress Fashion</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StoryPage;