package com.zhenkangyao.famcial.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhenkangyao.famcial.mappers.UserMapper;
import com.zhenkangyao.famcial.models.User;
import com.zhenkangyao.famcial.models.UserDTO;

@Service
public class UserService {

	@Autowired
	private UserMapper userMapper;
	
	public List<User> getAllUsers()
	{
		List<User> users = userMapper.getAllUsers();
		return users;
	}
	
	public User findUser(int id)
	{
		return userMapper.getUserByID(id);
	}
	
	public User findUser(String username)
	{
		return userMapper.getUserByUsername(username);
	}
	
	public void createUser(UserDTO user)
	{
		Date currentTime = new Date();
		userMapper.createUser(user.getUsername(), user.getPassword(), user.getDisplay_name(), user.getSex(), 
							user.getBirthday(), user.getNote(), user.getIs_active(), currentTime, 
							user.getCreate_by());
	}
	
	public void updateUser(int id, UserDTO user)
	{
		userMapper.updateUser(user.getUsername(), user.getPassword(), user.getDisplay_name(), user.getSex(), 
							user.getBirthday(), user.getNote(), user.getIs_active(), id);
	}
	
	public void removeUser(int id)
	{
		if (id != 0)
		{
			userMapper.removeUser(id);
		}
	}
	
}
