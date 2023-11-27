package com.vijay.security.demo;



import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


@Service
public class QuestionService{
    @Autowired
    private Repository repository;

    public Question createQuestion (Question question){
        return repository.save(question);
    }

    
    public Question updateQuestion (Question question) {
    	return repository.save(question);
    }

   

    public void deleteQuestion(Integer quesId){
         repository.deleteById(quesId);
    }

    public List<Question> retrieveQuestion(){
         return repository.findAll();
    }



}   