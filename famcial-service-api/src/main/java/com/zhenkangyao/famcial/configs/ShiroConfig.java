package com.zhenkangyao.famcial.configs;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShiroConfig {

	@Bean
	public ShiroFilterFactoryBean getShiroFilterFactoryBean(
			@Qualifier("securityManager") DefaultWebSecurityManager securityManager) {
		ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();

		shiroFilterFactoryBean.setSecurityManager(securityManager);
		
		Map<String, String> filterMap = new LinkedHashMap<String, String>();
		filterMap.put("/api/user/login", "anon");
		filterMap.put("/api/user/users", "perms[user:add]");
		filterMap.put("/**", "authc");		
		
		shiroFilterFactoryBean.setLoginUrl("/api/user/unauthentication");
		shiroFilterFactoryBean.setUnauthorizedUrl("/api/user/unauthorized");
		
		shiroFilterFactoryBean.setFilterChainDefinitionMap(filterMap);

		return shiroFilterFactoryBean;
	}

	@Bean(name = "securityManager")
	public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("userRealm") UserRealm userRealm) {
		DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
		securityManager.setRealm(userRealm);
		return securityManager;
	}

	@Bean(name="userRealm")
	public UserRealm getRealm() {
		return new UserRealm();
	}

}
