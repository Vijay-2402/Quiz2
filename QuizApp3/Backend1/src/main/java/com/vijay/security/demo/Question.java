package com.vijay.security.demo;

import org.springframework.stereotype.Component;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Component
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Question")

public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int quesId;
	private String Title;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private int answer;
}
