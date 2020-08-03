package com.zhenkangyao.famcial.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zhenkangyao.famcial.models.Account;
import com.zhenkangyao.famcial.models.AccountDTO;
import com.zhenkangyao.famcial.models.response.Response;
import com.zhenkangyao.famcial.services.AccountService;


/*
 * author: EY 20200801
 */
@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@GetMapping(path="/accounts", produces={"application/json"})
	public List<Account> getAllaccount() {
		return accountService.getAllAccounts();
	}
	
	@GetMapping(path="/accounts/{accountId}", produces={"application/json"})
	public Account findAccount(@PathVariable(name="accountId") int accountId) {
		return accountService.findAccount(accountId);
	}
	
	@PostMapping(path="/accounts", produces={"application/json"})
	public ResponseEntity<Response> createAccount(@RequestBody AccountDTO account) {
		accountService.creatAccount(account);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PutMapping(path="/accounts/{accountId}", produces={"application/json"})
	public ResponseEntity<Response> updateAccount(
			@PathVariable(name="accountId") int accountId,
			@RequestBody AccountDTO account) {
		accountService.updateAccount(accountId, account);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

	@DeleteMapping(path="/accounts/{accountId}", produces={"application/json"})
	public ResponseEntity<Response> removeAccount(@PathVariable(name="accountId") int accountId) {
		accountService.removeAccount(accountId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

}
