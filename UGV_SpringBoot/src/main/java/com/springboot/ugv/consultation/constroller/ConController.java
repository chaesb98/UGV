package com.springboot.ugv.consultation.constroller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ugv.consultation.domain.Consultation;
import com.springboot.ugv.consultation.service.ConService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
//@RequestMapping("/")
public class ConController {
	
	private final ConService conService;
	
	//CREATED
	@PostMapping("/Consultation")
	public ResponseEntity<?> save(@RequestBody Consultation con){
		return new ResponseEntity<>(conService.저장하기(con), HttpStatus.CREATED); // 201을 응답
	}

}
