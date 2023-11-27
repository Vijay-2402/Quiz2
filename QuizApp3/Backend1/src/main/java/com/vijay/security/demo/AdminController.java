package com.vijay.security.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.vijay.security.user.User;
import com.vijay.security.user.UserRepository;


@RestController
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")

public class AdminController{
    @Autowired
    private  ResultRepository resultRepository;
    @GetMapping("/score")
    @PreAuthorize("hasAuthority('admin:read')")
    public List<Result> score(){
        List<Result> data = resultRepository.findAll();
        return data;
    }
   
    UserRepository userRepository;
    User _user;



}







  
    


    
   
    
  


