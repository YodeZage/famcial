package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.StoreMapper;
import com.zhenkangyao.famcial.models.Store;
import com.zhenkangyao.famcial.models.StoreDTO;

@Service
public class StoreService {
	
	@Autowired
	private StoreMapper storeMapper;

    public List<Store> getAllStores() {
    	return storeMapper.getAllStores();
    }
    
    public Store findStore(int id) {
    	return storeMapper.getStoreByID(id);
    }
    
    public void createStore(StoreDTO store) {
    	if (store.getName() != null && store.getName() != "") {
    		storeMapper.createStore(store.getName());
    	}
    }
    
    public void updateStore(StoreDTO store) {
    	if (store.getName() != null && store.getName() != "") {
    		storeMapper.updateStore(store.getName(), store.getId());
    	}
    }
    
    public void removeStore(int id) {
    	if (id != 0) {
    		storeMapper.removeStore(id);
    	}
    }

}
