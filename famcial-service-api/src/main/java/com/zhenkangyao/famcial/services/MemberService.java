package com.zhenkangyao.famcial.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhenkangyao.famcial.mappers.MemberMapper;
import com.zhenkangyao.famcial.models.Member;
import com.zhenkangyao.famcial.models.MemberDTO;

@Service
public class MemberService {
	
	@Autowired
	private MemberMapper memberMapper;

    public List<Member> getAllMembers() {
    	return memberMapper.getAllMembers();
    }
    
    public Member findMember(int id) {
    	return memberMapper.getMemberByID(id);
    }
    
    public void createMember(MemberDTO member) {
    	if (member.getName() != null && member.getName() != "") {
    		memberMapper.createMember(member.getName());
    	}
    }
    
    public void updateMember(MemberDTO member) {
    	if (member.getName() != null && member.getName() != "") {
    		memberMapper.updateMember(member.getName(), member.getId());
    	}
    }
    
    public void removeMember(int id) {
    	if (id != 0) {
    		memberMapper.removeMember(id);
    	}
    }

}

