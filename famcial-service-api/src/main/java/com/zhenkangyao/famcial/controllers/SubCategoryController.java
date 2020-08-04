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

import com.zhenkangyao.famcial.models.SubCategory;
import com.zhenkangyao.famcial.models.SubCategoryDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.SubCategoryService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/transaction")
public class SubCategoryController {
	
	@Autowired
	private SubCategoryService subCategoryService;
	
	@GetMapping(path="/subCategories", produces={"application/json"})
	public List<SubCategory> getAllSubCategory() {
		return subCategoryService.getAllSubCategorys();
	}
	
	@GetMapping(path="/subCategories/{subCategoryId}", produces={"application/json"})
	public SubCategory findMemeber(@PathVariable(name="subCategoryId") int subCategoryId) {
		return subCategoryService.findSubCategory(subCategoryId);
	}
	
	@PostMapping(path="/subCategories", produces={"application/json"})
	public ResponseEntity<Response> createMemeber(@RequestBody SubCategoryDTO subCategory) {
		subCategoryService.createSubCategory(subCategory);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PatchMapping(path="/subCategories", produces={"application/json"})
	public ResponseEntity<Response> updateSubCategory(@RequestBody SubCategoryDTO subCategory) {
		subCategoryService.updateSubCategory(subCategory);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/subCategories/{subCategoryId}", produces={"application/json"})
	public ResponseEntity<Response> removeSubCategory(@PathVariable(name="subCategoryId") int subCategoryId) {
		subCategoryService.removeSubCategory(subCategoryId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

}
