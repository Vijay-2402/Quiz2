package com.vijay.security.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResultService{
    @Autowired
    ResultRepository resultRepository;
    
    public List<Result> getResult(){
         return resultRepository.findAll();
    }

    public Result updateResult(Result result){
        return resultRepository.save(result);
    }

}
