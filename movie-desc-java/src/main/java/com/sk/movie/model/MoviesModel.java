package com.sk.movie.model;

import com.sk.movie.entity.Movie;
import com.sk.movie.entity.MovieImage;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MoviesModel {

    private Integer mId;

    private String name;

    private String directors;

    private String stars;

    private String writer;

    private String[] genre;

    private List<String> images;

    private List<String> carouselsImage;

    private String rating;

    private String release;

    private String length;

    private String description;

    private String plot;

    public static MoviesModel of(Movie movie, List<MovieImage> movieImage) {

        List<String> movieImgUrl = movieImage.stream().map(MovieImage::getImageUrl).collect(Collectors.toList());
        List<String> crouselImgs  = movieImage.stream().map(MovieImage::getCarouselsImage).collect(Collectors.toList());
        String []genre = movie.getGenre().split(",");

        movieImgUrl.removeIf(Objects::isNull);
        crouselImgs.removeIf(Objects::isNull);

        return MoviesModel.builder()
                .description(movie.getDescr())
                .images(movieImgUrl)
                .carouselsImage(crouselImgs)
                .directors(movie.getDirectors())
                .genre(genre)
                .length(movie.getLength())
                .name(movie.getName())
                .plot(movie.getPlot())
                .rating(movie.getRating())
                .release(movie.getRelease())
                .stars(movie.getStars())
                .writer(movie.getWriter())
                .mId(movie.getMid()).build() ;


    }
}
