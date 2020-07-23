package com.zhenkangyao.famcial;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zhenkangyao.famcial.mappers")
public class FamcialApplication {

	public static void main(String[] args) {
		SpringApplication.run(FamcialApplication.class, args);
	}

}
