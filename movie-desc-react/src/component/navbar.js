import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import '../../src/component/mystyle.css'
import movies from '../jsondata/movie-dropdown.json'

function Navbar() {

    const items = movies;

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <h5 className="navbar-custom">YEMDb</h5>
                <form className="d-flex">
                    <div style={{ "width": "20vw" }}>
                        <ReactSearchAutocomplete
                            items={items}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            styling={
                                {
                                    
                                    borderRadius: "10px",
                                    border: "0px",
                                    fontSize: "16px",
                                    hoverBackgroundColor: "#ddd",
                                }
                            }
                            autoFocus
                            formatResult={formatResult}
                        />
                    </div>
                </form>

            </div>
        </nav >

    )
}

export default Navbar;