package com.zhenkangyao.famcial.mappers;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.User;
import com.zhenkangyao.famcial.utils.SexEnum;

@Mapper
public interface UserMapper {
	
	@Select("SELECT * FROM famcial.user;")
	List<User> getAllUsers();
	
	@Select("SELECT * FROM famcial.user WHERE (id = #{id});")
	User getUserByID(int id);
	
	@Select("SELECT * FROM famcial.user WHERE (username = #{username});")
	User getUserByUsername(String username);
	
	@Insert("INSERT INTO famcial.user (username, password, display_name, sex, birthday, note, is_active, create_time, create_by) " 
			+ "VALUES ( #{username}, #{password}, #{display_name}, #{sex}, #{birthday}, #{note}, #{is_active}, #{create_time}, #{create_by});")
	void createUser(String username, String password, String display_name, SexEnum sex, Date birthday, String note,
					boolean is_active, Date create_time, int create_by);
	
	@Update("UPDATE famcial.user SET username=#{username}, password=#{password}, display_name=#{display_name}, "
			+ "sex=#{sex}, birthday=#{birthday}, note=#{note}, is_active=#{is_active} WHERE (id=#{id});")
	void updateUser(String username, String password, String display_name, SexEnum sex, Date birthday, String note,
					boolean is_active, int id);
	
	@Delete("DELETE FROM famcial.user WHERE (id=#{id});")
	void removeUser(int id);

}
