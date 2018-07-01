package com.capstone.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.capstone.app.api.User;


@RestController
public class UserController {
	
	

/*	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ModelAndView registration(@ModelAttribute("user") User user) {
		System.out.println("Info received:"+user);
		userService.saveUser(user);
		return new ModelAndView("login", "user1", new User());
}*/
}
