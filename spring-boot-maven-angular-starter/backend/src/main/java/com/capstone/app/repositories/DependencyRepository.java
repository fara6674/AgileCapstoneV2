package com.capstone.app.repositories;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.capstone.app.models.TrackedDependency;

@Repository
public interface DependencyRepository extends JpaRepository<TrackedDependency, Long> {

  
   @Query(name="SELECT * FROM TRACKED_DEPENDENCY WHERE SPRINT_NUMBER = ?1", nativeQuery = true)
	public List<TrackedDependency> findBySprintNumber(Integer sprintNumber);
		
		/*@Query("SELECT COUNT(*) U From TRACKED_DEPENDENCY" 
		public int getCount();*/

}

