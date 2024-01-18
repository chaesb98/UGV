package com.springboot.ugv.user.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;


@SequenceGenerator(
		name = "MEMBER_IDX_SEQ_GEN",
		sequenceName = "MEMBER_IDX_SEQ",
		initialValue = 1,
		allocationSize = 1		
		)
@Data
@Entity
@Table(name = "MEMBER")
public class MemberVO {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_IDX_SEQ_GEN")
	@SequenceGenerator(name = "MEMBER_IDX_SEQ", sequenceName = "MEMBER_IDX_SEQ_GEN", allocationSize = 1)
	@Column(name = "MEMBER_IDX")
	private int memberIdx;
	@Column(name = "MEMBER_ID", nullable = false)
	private String memberId;
	@Column(name = "MEMBER_PW", nullable = false)
	private String memberPw;
	@Column(name = "MEMBER_NAME", nullable = false)
	private String memberName;	
	@Column(name = "MEMBER_EMAIL", nullable = false)
	private String memberEmail;	
}