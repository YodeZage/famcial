package com.zhenkangyao.famcial.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zhenkangyao.famcial.models.Pupose;
import com.zhenkangyao.famcial.models.PuposeDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.PuposeService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/transaction")
public class PuposeController {
	
	@Autowired
	private PuposeService puposeService;
	
	@GetMapping(path="/purposes", produces={"application/json"})
	public List<Pupose> getAllPupose() {
		return puposeService.getAllPuposes();
	}
	
	@GetMapping(path="/purposes/{purposeId}", produces={"application/json"})
	public Pupose findMemeber(@PathVariable(name="purposeId") int purposeId) {
		return puposeService.findPupose(purposeId);
	}
	
	@PostMapping(path="/purposes", produces={"application/json"})
	public ResponseEntity<Response> createMemeber(@RequestBody PuposeDTO pupose) {
		puposeService.createPupose(pupose);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PatchMapping(path="/purposes", produces={"application/json"})
	public ResponseEntity<Response> updatePupose(@RequestBody PuposeDTO pupose) {
		puposeService.updatePupose(pupose);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/purposes/{purposeId}", produces={"application/json"})
	public ResponseEntity<Response> removePupose(@PathVariable(name="purposeId") int purposeId) {
		puposeService.removePupose(purposeId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

}
