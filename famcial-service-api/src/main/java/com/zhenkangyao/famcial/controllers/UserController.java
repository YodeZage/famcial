package com.zhenkangyao.famcial.controllers;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zhenkangyao.famcial.models.User;
import com.zhenkangyao.famcial.models.UserDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.UserService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping(path="/unauthentication", produces={"application/json"})
	public ResponseEntity<Response> unauthentication() {
		Response response = new Response();
		response.setType("unauthentication");
		response.setMessage("need to login.");
		response.setCode(400);
		return ResponseEntity.ok(response);
	}

	@GetMapping(path="/users", produces={"application/json"})
	public List<User> getAlluser() {
		return userService.getAllUsers();
	}
	
	@GetMapping(path="/users/{userId}", produces={"application/json"})
	public User findUser(@PathVariable(name="userId") int userId) {
		return userService.findUser(userId);
	}
	
	@PostMapping(path="/users", produces={"application/json"})
	public ResponseEntity<Response> createUser(@RequestBody UserDTO user) {
		userService.createUser(user);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PutMapping(path="/users/{userId}", produces={"application/json"})
	public ResponseEntity<Response> updateAccount(@PathVariable(name="userId") int userId,
													@RequestBody UserDTO user) {
		userService.updateUser(userId, user);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/users/{userId}", produces={"application/json"})
	public ResponseEntity<Response> removeAccount(@PathVariable(name="userId") int userId) {
		userService.removeUser(userId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(path="/login", produces={"application/json"})
	public ResponseEntity<Response> userLogin(@RequestBody UserDTO user) {
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(), user.getPassword());
		Response response = new Response();
		try {
			subject.login(token);			
			response.setType("success");
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			response.setType("unauthentication");
			response.setMessage("need to login.");
			response.setCode(400);
			return ResponseEntity.ok(response);
		}
	}
	
	@GetMapping(path="/unauthorized", produces={"application/json"})
	public ResponseEntity<Response> userUnauthorized() {
		Response response = new Response();
		response.setType("unauthorized");
		response.setMessage("no permission to do this.");
		response.setCode(401);
		return ResponseEntity.ok(response);
	}
	
}
