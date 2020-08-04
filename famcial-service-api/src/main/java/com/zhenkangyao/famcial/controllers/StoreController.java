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

import com.zhenkangyao.famcial.models.Store;
import com.zhenkangyao.famcial.models.StoreDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.StoreService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/transaction")
public class StoreController {
	
	@Autowired
	private StoreService storeService;
	
	@GetMapping(path="/stores", produces={"application/json"})
	public List<Store> getAllStore() {
		return storeService.getAllStores();
	}
	
	@GetMapping(path="/stores/{storeId}", produces={"application/json"})
	public Store findStore(@PathVariable(name="storeId") int storeId) {
		return storeService.findStore(storeId);
	}
	
	@PostMapping(path="/stores", produces={"application/json"})
	public ResponseEntity<Response> createStore(@RequestBody StoreDTO store) {
		storeService.createStore(store);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PatchMapping(path="/stores", produces={"application/json"})
	public ResponseEntity<Response> updateStore(@RequestBody StoreDTO store) {
		storeService.updateStore(store);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/stores/{storeId}", produces={"application/json"})
	public ResponseEntity<Response> removeStore(@PathVariable(name="storeId") int storeId) {
		storeService.removeStore(storeId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

}
