package com.zhenkangyao.famcial.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.SubCategory;

@Mapper
public interface SubCategoryMapper {
	
	@Select("SELECT * FROM famcial.sub_category;")
	List<SubCategory> getAllSubCategorys();
	
	@Select("SELECT * FROM famcial.sub_category WHERE (id = #{id});")
	SubCategory getSubCategoryByID(int id);
	
	@Select("SELECT * FROM famcial.sub_category WHERE (category_id = #{id});")
	List<SubCategory> getSubCategoryByCategoryID(int id);
	
	@Insert("INSERT INTO famcial.sub_category (category_id, name) VALUES (#{categoryId}, #{name});")
	void createSubCategory(int categoryId, String name);
	
	@Update("UPDATE famcial.sub_category SET name=#{name} WHERE (id=#{id});")
	void updateSubCategory(String name, int id);
	
	@Delete("DELETE FROM famcial.sub_category WHERE (id=#{id});")
	void removeSubCategory(int id);

}
