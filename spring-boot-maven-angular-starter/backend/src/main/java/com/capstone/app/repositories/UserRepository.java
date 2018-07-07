package com.capstone.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.app.api.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	
	
}
