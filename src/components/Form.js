function Form({ setNewURL, setIsFormSubmitted, setIsDropdownClicked }) {

    const apiKey = '0a093f521e98a991f4e4cc2a12460255';
    const baseURL = 'https://api.themoviedb.org/3';
    const url = new URL(baseURL + "/discover/movie");

    url.search = new URLSearchParams({
        "with_genres": 18,
        "sort_by": "vote_average.desc",
        "vote_count.gte": 10,
        "api_key": apiKey
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewURL(url);
        setIsFormSubmitted(true);
        setIsDropdownClicked(false);
    }

    return (
        <section className="form-section">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <button>Get Movies</button>
                </form>
            </div>
        </section>
    )
}

export default Form;