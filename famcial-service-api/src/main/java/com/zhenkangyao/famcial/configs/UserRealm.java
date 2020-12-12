package com.zhenkangyao.famcial.configs;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

import com.zhenkangyao.famcial.models.User;
import com.zhenkangyao.famcial.services.UserService;

public class UserRealm extends AuthorizingRealm {
	
	@Autowired
	private UserService userService;

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
		
		Subject subject = SecurityUtils.getSubject();
		User currentUser = (User)subject.getPrincipal();
		
		info.addStringPermission("user:add");
		
		return info;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken aToken) throws AuthenticationException {				
		UsernamePasswordToken token = (UsernamePasswordToken)aToken;
		User user = userService.findUser(token.getUsername());
		
		if (user == null) {
			return null;
		}
		
		return new SimpleAuthenticationInfo(user, user.getPassword(), "");
	}

}
