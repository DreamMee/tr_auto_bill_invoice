package com.test.Tr.service;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;

import com.itextpdf.text.DocumentException;
import com.test.Tr.model.Billdata;
import com.test.Tr.model.Costomer;
import com.test.Tr.model.Psnexbill;
import com.test.Tr.model.pdfdata;
public interface CostomerService {
	public List<Costomer> findAll1();
	public String postCustomer(@RequestBody List<Psnexbill> pxnexbill);
	public Map<Integer, List<Psnexbill>> getResource();
	public Costomer find (int i_mid_id);
	public void updateArticle(Costomer costomer);
	public void insertArticle(Billdata billdata);
	
	void pdf(pdfdata pdfdata) throws IOException, DocumentException;

}
