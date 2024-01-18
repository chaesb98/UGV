package com.springboot.ugv.consultation.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@SequenceGenerator(
		name = "CONSULTATION_IDX_SEQ_GEN",
		sequenceName = "CONSULTATION_IDX_SEQ",
		initialValue = 1,
		allocationSize = 1		
		)
@Data
@Entity
@Table(name="consulation")
public class Consultation {

	@Id // pk를 해당 변수로 하겠다. 
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CONSULTATION_IDX_SEQ")
	@SequenceGenerator(name = "CONSULTATION_IDX_SEQ", sequenceName = "CONSULTATION_IDX_SEQ_GEN", allocationSize = 1)
	@Column(name= "bno")
	private Long bno;
	
	@Column(name="title", nullable=false)
	private String title;
	
	@Column(name="author", nullable=false)
	private String author;
	
	@Column(name="email", nullable=false)
	private String email;
	
	@Column(name="content", nullable=false)
	private String content;
	
}
