package com.sk.movie.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name="MOVIE")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Movie {

    @Id
    @Column(name="mid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mid;

    @Column(name = "NAME")
    private String name;

    @Column(name="director")
    private String directors;

    @Column(name="stars")
    private String stars;

    @Column(name="writer")
    private String writer;

    @Column(name="genre")
    private String genre;

    @Column(name="rating")
    private String rating;

    @Column(name="release")
    private String release;

    @Column(name="length")
    private String length;

    @Column(name = "descr")
    private String descr;

    @Column(name="plot")
    private String plot;

    @OneToMany(mappedBy="movie",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnoreProperties("movie")
    private List<MovieImage> movieImages;

}
