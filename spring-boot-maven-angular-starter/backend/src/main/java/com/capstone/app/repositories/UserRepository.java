package com.capstone.app.repositories;

import java.util.List;

import org.codehaus.groovy.tools.gse.DependencyTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstone.app.api.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	
	
}
