package com.sk.movie.controller;

import com.sk.movie.entity.Movie;
import com.sk.movie.entity.MovieImage;
import com.sk.movie.model.MoviesModel;
import com.sk.movie.repo.MovieImageRepo;
import com.sk.movie.repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MovieController {


    @Autowired
    MovieRepo movieRepo;

    @Autowired
    MovieImageRepo movieImageRepo;

    @GetMapping("/movies")
    public ResponseEntity<List<MoviesModel>> getAllMovies() {

        List<Movie> movies = movieRepo.findAll();
        if (movies.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            List<MoviesModel> moviesModels = new ArrayList<>();

            for (Movie movie :  movies) {
                List<MovieImage> movieImages = movie.getMovieImages();
                MoviesModel model= MoviesModel.of(movie, movieImages);
                moviesModels.add(model);
            }

            return new ResponseEntity<>(moviesModels, HttpStatus.OK);
        }

    }

    @GetMapping("/movie")
    public ResponseEntity<Movie> getMovieByName (@RequestParam(name = "name") String name){
        Movie movie = movieRepo.findByName(name);
        if (movie != null) {
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } else {
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
