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

import com.zhenkangyao.famcial.models.Category;
import com.zhenkangyao.famcial.models.CategoryDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.CategoryService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/transaction")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(path="/categorys", produces={"application/json"})
	public List<Category> getAllCategory() {
		return categoryService.getAllCategorys();
	}
	
	@GetMapping(path="/categorys/{categoryId}", produces={"application/json"})
	public Category findCategory(@PathVariable(name="categoryId") int categoryId) {
		return categoryService.findCategory(categoryId);
	}
	
	@PostMapping(path="/categorys", produces={"application/json"})
	public ResponseEntity<Response> createMemeber(@RequestBody CategoryDTO category) {
		categoryService.createCategory(category);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PatchMapping(path="/categorys", produces={"application/json"})
	public ResponseEntity<Response> updateCategory(@RequestBody CategoryDTO category) {
		categoryService.updateCategory(category);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/categorys", produces={"application/json"})
	public ResponseEntity<Response> removeCategory(@RequestBody CategoryDTO category) {
		categoryService.removeCategory(category);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}


}
