package com.zhenkangyao.famcial.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.Member;

@Mapper
public interface MemberMapper {
	
	@Select("SELECT * FROM famcial.member;")
	List<Member> getAllMembers();
	
	@Select("SELECT * FROM famcial.member WHERE (id = #{id});")
	Member getMemberByID(int id);
	
	@Insert("INSERT INTO famcial.member (`name`) VALUES (#{name});")
	void createMember(String name);
	
	@Update("UPDATE famcial.member SET name=#{name} WHERE (id=#{id});")
	void updateMember(String name, int id);
	
	@Delete("DELETE FROM famcial.member WHERE (id=#{id});")
	void removeMember(int id);
}
