package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.PuposeMapper;
import com.zhenkangyao.famcial.models.Pupose;
import com.zhenkangyao.famcial.models.PuposeDTO;

@Service
public class PuposeService {
	
	@Autowired
	private PuposeMapper puposeMapper;

    public List<Pupose> getAllPuposes() {
    	return puposeMapper.getAllPuposes();
    }
    
    public Pupose findPupose(int id) {
    	return puposeMapper.getPuposeByID(id);
    }
    
    public void createPupose(PuposeDTO pupose) {
    	if (pupose.getName() != null && pupose.getName() != "") {
    		puposeMapper.createPupose(pupose.getName());
    	}
    }
    
    public void updatePupose(PuposeDTO pupose) {
    	if (pupose.getName() != null && pupose.getName() != "") {
    		puposeMapper.updatePupose(pupose.getName(), pupose.getId());
    	}
    }
    
    public void removePupose(int id) {
    	if (id != 0) {
    		puposeMapper.removePupose(id);
    	}
    }

}
