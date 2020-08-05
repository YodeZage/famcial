package com.zhenkangyao.famcial.mappers;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.zhenkangyao.famcial.models.Account;
import com.zhenkangyao.famcial.utils.AccountTypeEnum;

/*
 * author: EY 20200801
 */
@Mapper
public interface AccountMapper {

	@Select("SELECT * FROM famcial.account;")
	List<Account> getAllAccounts();
	
	@Select("SELECT * FROM famcial.account WHERE (id = #{id});")
	Account getAccountByID(int id);
	
	@Insert("INSERT INTO famcial.account (name, type, statement_date, due_date, credit_limit, balance, note) "
			+ "VALUES( #{name}, #{type}, #{statementDate}, #{dueDate}, #{creditLimit}, #{balance}, #{note});") 
	void creatAccount(String name, AccountTypeEnum type, Date statementDate, Date dueDate, BigDecimal creditLimit,
			BigDecimal balance, String note);
	
	@Update("UPDATE famcial.account SET name=#{name}, statement_date=#{statementDate}, due_date=#{dueDate}, "
			+ "credit_limit=#{creditLimit}, note=#{note} WHERE (id=#{id});")
	void updateAccount(String name, Date statementDate, Date dueDate, BigDecimal creditLimit, String note, int id);
	
	@Delete("DELETE FROM famcial.account WHERE (id=#{id});")
	void removeAccount(int id);
		
}
