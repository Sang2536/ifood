function SiteHeader({  }) {
    return (
        <header className="site-header section-padding-img site-header-image">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-12 header-info">
                        <h1>
                            <span className="d-block text-primary">Say hello to us</span>
                            <span className="d-block text-dark">love to hear you</span>
                        </h1>
                    </div>
                </div>
            </div>

            <img
                src="https://i.pinimg.com/564x/1b/9e/cb/1b9ecb506f3233667d426f73ccf73b0a.jpg"
                className="header-image img-fluid"
                alt=""
            />
        </header>
    );
}