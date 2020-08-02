package com.zhenkangyao.famcial.models;

import java.math.BigDecimal;
import java.util.Date;
import com.zhenkangyao.famcial.utils.AccountTypeEnum;


/*
 * author: EY 20200801
 */
public class Account{
		
	private int id;
	private String name;
	private AccountTypeEnum type;
	private Date statementDate;
	private Date dueDate;
	private BigDecimal creditLimit;
	private BigDecimal balance;
	private String note;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public AccountTypeEnum getType() {
		return type;
	}
	public void setType(AccountTypeEnum type) {
		this.type = type;
	}
	public Date getStatementDate() {
		return statementDate;
	}
	public void setStatementDate(Date statementDate) {
		this.statementDate = statementDate;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public BigDecimal getCreditLimit() {
		return creditLimit;
	}
	public void setCreditLimit(BigDecimal creditLimit) {
		this.creditLimit = creditLimit;
	}
	public BigDecimal getBalance() {
		return balance;
	}
	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}	
	
}
