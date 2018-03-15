package com.test.Tr.dao;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;

import com.test.Tr.model.Billdata;
import com.test.Tr.model.Costomer;
import com.test.Tr.model.Psnexbill;

public interface CostomerDAO {
	public List<Costomer> findAll1();
	public String postCustomer(@RequestBody List<Psnexbill> pxnexbill);
	public Map<Integer, List<Psnexbill>> getResource();		
	public void updateArticle(Costomer costomer);
	public void insertArticle(Billdata billdata);
	//public void GenaratePDF(Billdata billdata);

	//public Costomer find (int i_mid_id);
	

}
