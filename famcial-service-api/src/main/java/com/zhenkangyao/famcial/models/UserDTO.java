package com.zhenkangyao.famcial.models;

import java.util.Date;
import com.zhenkangyao.famcial.utils.SexEnum;

public class UserDTO {
	private int id;
	private String username;
	private String password;
	private String displayName;
	private SexEnum sex;
	private Date birthday;
	private String note;
	private Boolean isActive;
	private int createBy;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDisplay_name() {
		return displayName;
	}
	public void setDisplay_name(String display_name) {
		this.displayName = display_name;
	}
	public SexEnum getSex() {
		return sex;
	}
	public void setSex(SexEnum sex) {
		this.sex = sex;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public Boolean getIs_active() {
		return isActive;
	}
	public void setIs_active(Boolean is_active) {
		this.isActive = is_active;
	}
	public int getCreate_by() {
		return createBy;
	}
	public void setCreate_by(int create_by) {
		this.createBy = create_by;
	}
	
}
