package com.test.Tr.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.itextpdf.text.DocumentException;
import com.test.Tr.dao.CostomerDAO;
import com.test.Tr.dao.PDFgen;
import com.test.Tr.model.Billdata;
import com.test.Tr.model.Costomer;
import com.test.Tr.model.Psnexbill;
import com.test.Tr.model.pdfdata;

@Service
public class CostomerServiceImpl implements CostomerService{

	
	@Autowired
	private CostomerDAO costomerDAO;
	private PDFgen PDFgen;
	
	
	
	


	@Override
	public List<Costomer> findAll1() {
		return this.costomerDAO.findAll1();
	}

	
	@Override
	public String postCustomer(@RequestBody List<Psnexbill> pxnexbill){
		return this.costomerDAO.postCustomer(pxnexbill);
	}
	
	@Override
	public Map<Integer, List<Psnexbill>> getResource(){
	return costomerDAO.getResource();
	}

	
	@Override
	public Costomer find(int i_mid_id) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public void updateArticle(Costomer costomer) {
		costomerDAO.updateArticle(costomer);
		
	}
	
	@Override
	public void insertArticle(Billdata billdata) {
		costomerDAO.insertArticle(billdata);
		
	}

	@Override
	public void pdf(pdfdata pdfdata)throws IOException,
    DocumentException {
		System.out.println("ใหนนๆๆๆๆๆๆ");
		PDFgen.main(pdfdata);
		
	}
	

	

}
