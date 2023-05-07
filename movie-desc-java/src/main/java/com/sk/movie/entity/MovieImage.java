package com.sk.movie.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="MOVIE_IMAGES")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MovieImage {

    @Id
    @Column(name="MOID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer moid;


    @Column(name = "IMAGE_URL")
    private String imageUrl;

    @Column(name = "carousels_image")
    private String carouselsImage;

    @ManyToOne
    @JoinColumn(name="mid")
    @JsonIgnoreProperties("movieImage")
    private Movie movie;


}
