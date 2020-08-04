package com.zhenkangyao.famcial.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.CategoryMapper;
import com.zhenkangyao.famcial.mappers.SubCategoryMapper;
import com.zhenkangyao.famcial.models.Category;
import com.zhenkangyao.famcial.models.CategoryDTO;
import com.zhenkangyao.famcial.models.SubCategory;

@Service
public class CategoryService {
	
	private final String[] CATEGORY_TYPE = { "spend", "income" };
	
	@Autowired
	private CategoryMapper categoryMapper;
	
	@Autowired
	private SubCategoryMapper subCategoryMapper;

    public List<Category> getOneTypeCategorys(String type) {
    	if (isTypeCorrect(type)) {
    		List<Category> categories = categoryMapper.getOneTypeCategorys(type);
        	List<SubCategory> subCategories = subCategoryMapper.getAllSubCategorys();
        	
        	return insertSubCategories(categories, subCategories);
    	}
    	
    	return null;
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
    	if (category.getName() != null && category.getName() != "") {
    		categoryMapper.updateCategory(category.getName(), category.getId());
    	}
    }
    
    public void removeCategory(int id) {
    	if (id != 0) {
    		categoryMapper.removeCategory(id);
    	}
    }
    
    private List<Category> insertSubCategories(List<Category> categories, List<SubCategory> subCategories) {
    	for (int i = 0; i < categories.size(); i++) {
    		Category currentCategory = categories.get(i);
    		ArrayList<SubCategory> currentSubCategories = new ArrayList<SubCategory>();
    		
    		for (int j = 0; j < subCategories.size(); j++) {
    			if (subCategories.get(j).getCategoryId() == currentCategory.getId()) {
    				currentSubCategories.add(subCategories.get(j));
    			}
    		}
    		
    		currentCategory.setSubCategory(currentSubCategories);
    	}
    	
    	return categories;
    }
    
    private boolean isTypeCorrect(String aType) {
    	if (aType == null || aType == "") {
    		return false;
    	} else {
    		return aType.equals(CATEGORY_TYPE[0]) || aType.equals(CATEGORY_TYPE[1]);
    	}
    }

}
