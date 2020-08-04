package com.zhenkangyao.famcial.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.Category;

@Mapper
public interface CategoryMapper {
	
	@Select("SELECT * FROM famcial.category WHERE (type = #{type});")
	List<Category> getOneTypeCategorys(String type);
	
	@Select("SELECT * FROM famcial.category WHERE (id = #{id});")
	Category getCategoryByID(int id);
	
	@Insert("INSERT INTO famcial.category (`name`, `type`) VALUES (#{name}, #{type});")	
	void createCategory(String name, String type);
	
	@Update("UPDATE famcial.category SET name=#{name} WHERE (id=#{id});")
	void updateCategory(String name, int id);
	
	@Delete("DELETE FROM famcial.category WHERE (id=#{id});")
	void removeCategory(int id);

}
