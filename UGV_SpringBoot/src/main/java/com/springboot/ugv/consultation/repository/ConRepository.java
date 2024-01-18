package com.springboot.ugv.consultation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.ugv.consultation.domain.Consultation;

//@Repository를 적어야 스프링 IoC에 빈으로 등록이 되는데
//JpaRepository를 extends하면 생략 가능함
//JpaRepository는 CRUD 함수를 들고 있음v
public interface ConRepository extends JpaRepository<Consultation, Long> {

}
