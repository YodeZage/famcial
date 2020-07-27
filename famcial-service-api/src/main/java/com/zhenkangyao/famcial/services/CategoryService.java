package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.CategoryMapper;
import com.zhenkangyao.famcial.models.Category;
import com.zhenkangyao.famcial.models.CategoryDTO;

@Service
public class CategoryService {
	
	private final String[] CATEGORY_TYPE = { "spend", "income" };
	
	@Autowired
	private CategoryMapper categoryMapper;

    public List<Category> getAllCategorys() {
    	return categoryMapper.getAllCategorys();
    }
    
    public Category findCategory(int id) {
    	return categoryMapper.getCategoryByID(id);
    }
    
    public void createCategory(CategoryDTO category) {
    	if (category.getName() != null && category.getName() != ""
    			&& isTypeCorrect(category.getType())) {
    		categoryMapper.createCategory(category.getName(), category.getType());
    	}
    }
    
    public void updateCategory(CategoryDTO category) {
    	if (category.getName() != null && category.getName() != ""
    			&& isTypeCorrect(category.getType())) {
    		categoryMapper.updateCategory(category.getName(), category.getType(), category.getId());
    	}
    }
    
    public void removeCategory(CategoryDTO category) {
    	if (category.getId() != 0) {
    		categoryMapper.removeCategory(category.getId());
    	}
    }
    
    private boolean isTypeCorrect(String aType) {
    	if (aType == null || aType == "") {
    		return false;
    	} else {
    		return aType == CATEGORY_TYPE[0] || aType == CATEGORY_TYPE[1];
    	}
    }

}
