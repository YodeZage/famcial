package com.zhenkangyao.famcial.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.Pupose;

@Mapper
public interface PuposeMapper {

	@Select("SELECT * FROM famcial.pupose;")
	List<Pupose> getAllPuposes();
	
	@Select("SELECT * FROM famcial.pupose WHERE (id = #{id});")
	Pupose getPuposeByID(int id);
	
	@Insert("INSERT INTO famcial.pupose (`name`) VALUES (#{name});")
	void createPupose(String name);
	
	@Update("UPDATE famcial.pupose SET name=#{name} WHERE (id=#{id});")
	void updatePupose(String name, int id);
	
	@Delete("DELETE FROM famcial.pupose WHERE (id=#{id});")
	void removePupose(int id);
	
}
