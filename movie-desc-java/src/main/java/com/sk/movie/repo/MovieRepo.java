package com.sk.movie.repo;

import com.sk.movie.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {

    Movie findByMid (Integer id);

    Movie findByName (String name);

}
