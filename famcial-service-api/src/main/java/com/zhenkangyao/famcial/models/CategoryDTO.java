package com.zhenkangyao.famcial.models;

public class CategoryDTO {
	
	private int id;
	private String name;
	private String type;
	private SubCategory[] subCategory;
	
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public SubCategory[] getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(SubCategory[] subCategory) {
		this.subCategory = subCategory;
	}
	
}
