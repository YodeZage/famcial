package com.zhenkangyao.famcial.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zhenkangyao.famcial.models.User;

@RestController
@RequestMapping(value="v1/test")
public class TestController {
	
	@GetMapping(path="/user", produces = {"application/json"})
	@ResponseBody
	public User getUser() {
		User user = new User();
		user.setUserID(001);
		user.setName("Admin User");
		user.setAge(40);
		user.setSex("M");
		
		return user;
	}
	
}
