package com.zhenkangyao.famcial.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.Store;

@Mapper
public interface StoreMapper {
	
	@Select("SELECT * FROM famcial.store;")
	List<Store> getAllStores();
	
	@Select("SELECT * FROM famcial.store WHERE (id = #{id});")
	Store getStoreByID(int id);
	
	@Insert("INSERT INTO famcial.store (`name`) VALUES (#{name});")
	void createStore(String name);
	
	@Update("UPDATE famcial.store SET name=#{name} WHERE (id=#{id});")
	void updateStore(String name, int id);
	
	@Delete("DELETE FROM famcial.store WHERE (id=#{id});")
	void removeStore(int id);
	
}
