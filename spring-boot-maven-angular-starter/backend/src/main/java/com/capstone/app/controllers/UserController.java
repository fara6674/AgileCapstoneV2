package com.capstone.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.app.api.User;
import com.capstone.app.repositories.UserRepository;


@RestController
public class UserController {
	
	 private UserRepository userRepository;

	@Autowired
	    UserController(UserRepository userRepository) {
	        this.userRepository =userRepository;

	    }


	
	 @PostMapping("/register") // <-- this method is working in 24 hour format not 12 hour format
	    public User createUser(@RequestBody User input) { 
	    return  userRepository.save(input);

	    }
}
