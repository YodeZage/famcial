package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhenkangyao.famcial.mappers.AccountMapper;
import com.zhenkangyao.famcial.models.Account;
import com.zhenkangyao.famcial.models.AccountDTO;
import com.zhenkangyao.famcial.utils.AccountTypeEnum;


/*
 * author: EY 20200801
 */
@Service
public class AccountService {

	@Autowired
	private AccountMapper accountMapper;

	public List<Account> getAllAccounts() {
		return accountMapper.getAllAccounts();
	}

	public Account findAccount(int id) {
		return accountMapper.getAccountByID(id);
	}

	public void creatAccount(AccountDTO account) {
		if (account.getName() != null && account.getName() != "" && isTypeCorrect(account.getType())) {
			accountMapper.creatAccount(account.getName(), account.getType(), account.getStatementDate(),
					account.getDueDate(), account.getCreditLimit(), account.getBalance(), account.getNote());
		}
	}

	public void updateAccount(int id, AccountDTO account) {
		if (account.getName() != null && account.getName() != "" && isTypeCorrect(account.getType())) {
			accountMapper.updateAccount(account.getName(), account.getType(), account.getStatementDate(),
					account.getDueDate(), account.getCreditLimit(), account.getBalance(), account.getNote(), id);
		}
	}

	public void removeAccount(int id) {
		if (id != 0) {
			accountMapper.removeAccount(id);
		}
	}

	private boolean isTypeCorrect(AccountTypeEnum accountType) {
		if (accountType == null || accountType.equals("")) {
			return false;
		} else {
			return accountType.equals(AccountTypeEnum.cash) || accountType.equals(AccountTypeEnum.credit)
					|| accountType.equals(AccountTypeEnum.debit) || accountType.equals(AccountTypeEnum.goal);
		}
	}

}
