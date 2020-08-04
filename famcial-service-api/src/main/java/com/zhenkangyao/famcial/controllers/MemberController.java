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
import com.zhenkangyao.famcial.services.MemberService;
import com.zhenkangyao.famcial.models.response.Response;;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping(value="/api/transaction")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping(path="/members", produces={"application/json"})
	public List<Member> getAllMember() {
		return memberService.getAllMembers();
	}
	
	@GetMapping(path="/members/{memberId}", produces={"application/json"})
	public Member findMemeber(@PathVariable(name="memberId") int memberId) {
		return memberService.findMember(memberId);
	}
	
	@PostMapping(path="/members", produces={"application/json"})
	public ResponseEntity<Response> createMemeber(@RequestBody MemberDTO member) {
		memberService.createMember(member);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@PatchMapping(path="/members", produces={"application/json"})
	public ResponseEntity<Response> updateMember(@RequestBody MemberDTO member) {
		memberService.updateMember(member);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping(path="/members/{memberId}", produces={"application/json"})
	public ResponseEntity<Response> removeMember(@PathVariable(name="memberId") int memberId) {
		memberService.removeMember(memberId);
		Response response = new Response();
		response.setType("success");
		return ResponseEntity.ok(response);
	}

}
