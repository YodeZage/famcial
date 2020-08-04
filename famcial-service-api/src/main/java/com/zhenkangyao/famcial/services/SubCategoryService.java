package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.SubCategoryMapper;
import com.zhenkangyao.famcial.models.SubCategory;
import com.zhenkangyao.famcial.models.SubCategoryDTO;

@Service
public class SubCategoryService {
	
	@Autowired
	private SubCategoryMapper subCategoryMapper;

    public List<SubCategory> getAllSubCategorys() {
    	return subCategoryMapper.getAllSubCategorys();
    }
    
    public SubCategory findSubCategory(int id) {
    	return subCategoryMapper.getSubCategoryByID(id);
    }
    
    public void createSubCategory(SubCategoryDTO subCategory) {
    	if (subCategory.getName() != null && subCategory.getName() != "" 
    			&& subCategory.getCategoryId() != 0) {
    		subCategoryMapper.createSubCategory(subCategory.getCategoryId(), subCategory.getName());
    	}
    }
    
    public void updateSubCategory(SubCategoryDTO subCategory) {
    	if (subCategory.getName() != null && subCategory.getName() != "") {
    		subCategoryMapper.updateSubCategory(subCategory.getName(), subCategory.getId());
    	}
    }
    
    public void removeSubCategory(int id) {
    	if (id != 0) {
    		subCategoryMapper.removeSubCategory(id);
    	}
    }

}
