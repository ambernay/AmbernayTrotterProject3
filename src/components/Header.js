function Header({ isDropdownVisible, setIsDropdownVisible, isTrending, setIsTrending, setCurrentPage }) {

    const subHeading = isTrending ? "Trending" : "Back to Trending";

    // toggle visibility and orientation of arrow image
    let arrowClass = isDropdownVisible ? "arrow-up" : "arrow-down";

    let toggleArrow = isTrending ? "make-display-none" : '';
    let styleClass = !isTrending ? "hover-animation" : '';

    const handleDropdown = () => {
        !isDropdownVisible ? setIsDropdownVisible(true) : setIsDropdownVisible(false);
    }

    const handleTrendingButton = () => {
        if (!isTrending) {
            setIsTrending(true);
            setIsDropdownVisible(false);
            setCurrentPage(1);
        }
    }

    return (
        <header>
            <section onClick={handleDropdown} className="main-heading">
                <div className="wrapper">
                    <div className="heading-container">
                        <h1>Movie Picker</h1>
                        <button className="find-movie-button">
                            <figure>
                                <span className="hover-animation">
                                    <h2>Find a movie</h2>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={"ionicon " + arrowClass} viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" /></svg>
                                <figcaption className="sr-only">{arrowClass}</figcaption>
                            </figure>
                        </button>
                    </div>
                </div>{/* wrapper */}
            </section>
            <section className="sub-heading">
                <div className="result-container">
                    <div className="wrapper">
                        <div className="result-heading-container">
                            <button className="trending-button"
                                onClick={handleTrendingButton}>
                                <figure >
                                    <figcaption className="sr-only">Back arrow</figcaption>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={"ionicon " + toggleArrow} viewBox="0 0 512 512"><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" /></svg>
                                    <span className={styleClass}>
                                        <h4 className="result-heading">{subHeading}</h4>
                                    </span>
                                </figure>
                            </button>
                        </div>
                    </div>{/* wrapper */}
                </div>
            </section>
        </header>
    )
}

export default Header;