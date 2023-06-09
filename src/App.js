import { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Gallery from './components/Gallery.js';
import Form from './components/Form.js';
import LoadMore from './components/LoadMore.js';
import Footer from './components/Footer.js';

function App() {

    const [movies, setMovies] = useState([]);
    const [isTrending, setIsTrending] = useState(true);
    const [newURL, setNewURL] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    // stop background scroll when form is visible
    useEffect(() => {
        const bodyEl = document.querySelector('body');
        isDropdownVisible ? bodyEl.classList.add('stop-scroll') : bodyEl.classList.remove('stop-scroll');
        console.log(document.activeElement);
    }, [isDropdownVisible])

    return (
        <>
            <Header
                isDropdownVisible={isDropdownVisible}
                setIsDropdownVisible={setIsDropdownVisible}
                isTrending={isTrending}
                setIsTrending={setIsTrending}
                setCurrentPage={setCurrentPage}
            />
            <main>
                <Gallery
                    newURL={newURL}
                    setMoviesToDisplay={setMovies}
                    moviesToDisplay={movies}
                    isTrending={isTrending}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setTotalPages={setTotalPages}
                    isDropdownVisible={isDropdownVisible}
                />

                <LoadMore
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    newURL={newURL}
                    moviesArray={movies}
                    totalPages={totalPages}
                />
            </main>

            <Form
                setNewURL={setNewURL}
                isDropdownVisible={isDropdownVisible}
                setIsTrending={setIsTrending}
                setIsDropdownVisible={setIsDropdownVisible}
                currentPage={currentPage}
                isTrending={isTrending}
                setCurrentPage={setCurrentPage}
            />

            <Footer />
        </>
    );
}

export default App;
