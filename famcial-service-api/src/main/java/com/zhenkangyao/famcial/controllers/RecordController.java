package com.zhenkangyao.famcial.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zhenkangyao.famcial.models.Member;
import com.zhenkangyao.famcial.models.MemberDTO;
import com.zhenkangyao.famcial.services.RecordService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/record")
public class RecordController {
	
	@Autowired
	private RecordService recordService;
	
	@GetMapping(path="/members", produces={"application/json"})
	public List<Member> getAllMember() {
		return recordService.getAllMembers();
	}
	
	@GetMapping(path="/members/{memberId}", produces={"application/json"})
	public Member findMemeber(@PathVariable(name="memberId") int memberId) {
		return recordService.findMember(memberId);
	}
	
	@PostMapping(path="/members", produces={"application/json"})
	public ResponseEntity findMemeber(@RequestBody MemberDTO member) {
		recordService.createMember(member);
		return ResponseEntity.ok(null);
	}
	
	@PatchMapping(path="/members", produces={"application/json"})
	public ResponseEntity updateMember(@RequestBody MemberDTO member) {
		recordService.updateMember(member);
		return ResponseEntity.ok(null);
	}
	
	@DeleteMapping(path="/members", produces={"application/json"})
	public ResponseEntity removeMember(@RequestBody MemberDTO member) {
		recordService.removeMember(member);
		return ResponseEntity.ok(null);
	}

}
