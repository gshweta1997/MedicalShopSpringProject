package com.medical.medicalshopmanagementsystem.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medical.medicalshopmanagementsystem.Repository.UserLoginRepository;
import com.medical.medicalshopmanagementsystem.entity.UserLogin;

@Service
public class UserLoginService {

	@Autowired
	UserLoginRepository userloginRepository;

	public UserLogin validateUserLogin(UserLogin userlogin) {
		UserLogin ul=userloginRepository.validateUserLogin(userlogin.getUserid(),userlogin.getPassword());
		
		return ul;
	}
	
	public UserLogin validateUserLogin1(UserLogin userlogin1) {
		UserLogin ul1=userloginRepository.validateUserLogin(userlogin1.getUserid(),userlogin1.getPassword());
		
		return ul1;
	}
}
