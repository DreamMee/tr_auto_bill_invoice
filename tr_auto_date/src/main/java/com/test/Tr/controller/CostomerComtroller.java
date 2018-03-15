package com.test.Tr.controller;

import java.io.IOException;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.DocumentException;
import com.test.Tr.model.Billdata;
import com.test.Tr.model.Costomer;
import com.test.Tr.model.Psnexbill;
import com.test.Tr.model.pdfdata;
import com.test.Tr.service.CostomerService;
@Controller
@RestController
public class CostomerComtroller {

@Autowired
private CostomerService service;
public HashMap <String, List<Psnexbill>> map = new HashMap <String, List<Psnexbill>>();

List<Psnexbill> cust = new ArrayList<Psnexbill>();


	@GetMapping("/user")
	public List<Costomer> findAll1() {
		return service.findAll1();
	}

	@GetMapping(value = "/all")
	public Map<Integer, List<Psnexbill>> getResource() {
		return service.getResource();
	}

	@PostMapping(value = "/save")
	public String postCustomer(@RequestBody List<Psnexbill> pxnexbill) {
		return service.postCustomer(pxnexbill);
		// return "Post Successfully!";
	}
	@PutMapping(value = "/update")
	public ResponseEntity<Costomer>updateArticle(@RequestBody Costomer costomer) {
		 service.updateArticle(costomer);
		
		 return null;
		
	}	
	
	@PostMapping(value = "/insert")
	public ResponseEntity<Costomer>insertArticle(@RequestBody Billdata billdata) {
	//	System.out.println("welcome controller");
		 service.insertArticle(billdata);
		
		 return null;
		
	}	
	
	@PostMapping(value = "/pdf")
	public ResponseEntity<Costomer>pdf(@RequestBody pdfdata pdfdata)throws IOException,
    DocumentException {
		//System.out.println("PDF มาแล้วจร้าาาาาาาาาาาา!!");
		 service.pdf(pdfdata);
		// System.out.println(pdfdata.getBill_id());
		 
		// String[] test = pdfdata.getC_plate_number();
		
		 //System.out.println(Arrays.toString(test));
		 	
	 
		 return null;
		
	}	
	
	
}
