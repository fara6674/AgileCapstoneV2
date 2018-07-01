package com.capstone.app.controllers;

import com.capstone.app.Exceptiomns.DependencyNotFoundException;
import com.capstone.app.models.TrackedDependency;
import com.capstone.app.repositories.DependencyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
public class DependencyController {

    private final DependencyRepository dependencyRepository;


    @Autowired
    DependencyController(DependencyRepository dependencyRepository) {
        this.dependencyRepository = dependencyRepository;

    }

    @GetMapping("/dependencies")
    public List<TrackedDependency> getAllDependencies() {
        return dependencyRepository.findAll();
    }


    @GetMapping("/dependencies/{id}")
    public TrackedDependency retrieveUser(@PathVariable Long id) throws DependencyNotFoundException {
        TrackedDependency dependency = dependencyRepository.findOne(id);

        long diffInMillies = Math.abs(dependency.getEndDate().getTime() - dependency.getStartDate().getTime());
        long diff = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
        

        System.out.println("Difference in hours: "+diff);
        
      //  LocalDate daysBehind = dependency.convertToLocalDateTimeViaInstant(dependency.getStartDate()).minusHours(dependency.convertToLocalDateTimeViaInstant(dependency.getEndDate()));
        
        
        if (dependency.getId() <= 0) {
            throw new DependencyNotFoundException("id-" + id + " User with that id was not found ");
        }

        return 	dependency;
    }

    @GetMapping("/dependencies/count")
    public List<TrackedDependency> getDependenciesCount (@RequestParam ("sprintNumber") int sprintNumber){
    	return this.dependencyRepository.findBySprintNumber(sprintNumber);
    }
    
    
    @PostMapping("/dependency") // <-- this method is working in 24 hour format not 12 hour format
    public TrackedDependency createDependency(@RequestBody TrackedDependency input) { 
    	
    	if(input.getEndDate() == null)
    	{
    		
    		input.setEndDate(Date.from(Instant.now().minusSeconds(18000))); //added --> .minusSeconds(18000) to get the local US CST--> (UTC-CST)
    	}
    	//long diffInMillies = Math.abs(input.getEndDate().getTime() - input.getStartDate().getTime());
        //long diff = TimeUnit.HOURS.convert(diffInMillies, TimeUnit.MILLISECONDS);
         
/*
         System.out.println("Difference in hours: "+diff);
         input.setDuration(diff);*/
        
       return  dependencyRepository.save(input);

    }

}

