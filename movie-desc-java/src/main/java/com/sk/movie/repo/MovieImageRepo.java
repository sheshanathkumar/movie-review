package com.sk.movie.repo;

import com.sk.movie.entity.MovieImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieImageRepo extends JpaRepository<MovieImage, Integer> {

    List<MovieImage> findByMoid (Integer moid);

    List<String> findImageUrlByMoid (Integer moid);

}
