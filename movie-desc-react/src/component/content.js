
import { useState } from 'react';
import '../../src/component/mystyle.css'
import Carousel from 'react-bootstrap/Carousel';


function Content() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const movie = {
        "name": "John Wick",
        "directors": "Chad Stahelski",
        "stars": "Keanu Reeves, Laurence Fishburne, George Georgiou, Sheshanath, Basuki, Nishu",
        "writer": "Shay Hatten, Michael Finch, Derek Kolstad",
        "genre": ["Action", "Thrill", "Crime"],
        "imageUrls": [
            "https://sm.ign.com/t/ign_in/news/j/john-wick-/john-wick-4-digital-release-date-revealed_84jc.1280.jpg",
            "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1679302210.jpg",
            "https://assets-prd.ignimgs.com/2023/02/15/john-wick-chapter-4-new-button-1676484016631.jpg",
            "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202303/copy-of-g2-cover240323054145.png?size=*:480",
            "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202303/screenshot-2023-03-24-172400240323053045.png?size=720:*"
        ],
        "rating": "8.9",
        "release": "2023",
        "length": "2H 23M",
        "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes\n.",
        "plot": null,
        "mid": 1
    }

    return (
        <>

            <div className="container">

                <div className="movie-descr" >
                    <div className="movie-name"> <h1>{movie.name}</h1> </div>
                    <div className="movie-genre">
                        <div className="genre">
                            {movie.genre.map(x => (
                                <span key={x}> {x} </span>
                            ))}
                        </div>
                    </div>
                    <div className="movie-rating">
                        <div className="row">
                            <div className="col"> Rating </div>
                            <div className="col"> Year </div>
                            <div className="col"> Length </div>
                        </div>
                        <div className="row">
                            <div className="col"> {movie.rating} / 10</div>
                            <div className="col"> {movie.release} </div>
                            <div className="col"> {movie.length} </div>
                        </div>

                    </div>
                </div>


                <div className="main-image">
                    {/* <img className="main-image-img" src={movie.imageUrls[0]} alt="" /> */}

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>

                            <img
                                style={{ "height": "80%", "width": "100%", "borderRadius":"10px" }}
                                src={movie.imageUrls[0]}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>

                            <img
                                style={{ "height": "80%", "width": "100%", "borderRadius":"10px" }}
                                src={movie.imageUrls[1]}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>

                            <img
                                style={{ "height": "80%", "width": "100%", "borderRadius":"10px" }}
                                src={movie.imageUrls[3]}
                                alt="Third slide"
                            />

                        </Carousel.Item>

                    </Carousel>



                </div>



                <div className="row">
                    <div className="column">  <img className="movie-image" src={movie.imageUrls[1]} alt="" />  </div>
                    <div className="column"><img className="movie-image" src={movie.imageUrls[2]} alt="" /> </div>
                    <div className="column"><img className="movie-image" src={movie.imageUrls[3]} alt="" /> </div>
                    <div className="column"><img className="movie-image" src={movie.imageUrls[4]} alt="" /> </div>
                </div>

                <div className="description">
                    <h3>Description</h3>
                    <h6>{movie.description}</h6>
                </div>

                <div className="crew-info">
                    <div className="row">
                        <div className="col-2">Star</div>
                        <div className="col-md-auto">{movie.stars}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2">Writer</div>
                        <div className="col-md-auto">{movie.writer}</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2">Directors</div>
                        <div className="col-md-auto">{movie.directors}</div>
                    </div>

                </div>

            </div>

        </>
    )

}

export default Content;