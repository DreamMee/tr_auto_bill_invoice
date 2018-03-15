package com.test.Tr.dao;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

////pdf





import com.test.Tr.model.Billdata;
import com.test.Tr.model.Costomer;
import com.test.Tr.model.Psnexbill;
@Repository
public class CostomerDAOImpl implements CostomerDAO {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	List<Psnexbill> cust = new ArrayList<Psnexbill>();
	
	
	
	@Override
	public List<Costomer> findAll1() {
		// TODO Auto-generated method stub
	 return this.jdbcTemplate.query("select * from tr_profile_invoice where active = true and dt_nextbill_tr = now():: date;", 
				new BeanPropertyRowMapper<Costomer>(Costomer.class));
	}
	
	@Override
	public String postCustomer(@RequestBody List<Psnexbill> pxnexbill){
		cust.clear();
		cust.addAll(pxnexbill);
		 Map<Integer, List<Psnexbill>> groupByPriceMap =
				 cust.stream().collect(Collectors.groupingBy(Psnexbill::getI_group_id));
		System.out.println(groupByPriceMap);
		return ""+groupByPriceMap;
		
	}
	
	@Override
	public Map<Integer, List<Psnexbill>> getResource() {
		 Map<Integer, List<Psnexbill>> groupByPriceMap =
				 cust.stream().collect(Collectors.groupingBy(Psnexbill::getI_group_id));
		System.out.println(groupByPriceMap);
		return groupByPriceMap;
	}

	@Override
	public void  updateArticle(Costomer costomer) {
		

		String sql = "UPDATE tr_profile_invoice SET dt_nextbill_tr = now():: date + interval '12 month' WHERE active = true AND i_mid_id = ?;";
		jdbcTemplate.update(sql,costomer.getI_mid_id());
		System.out.println("update ok");
	}
	
	@Override
	public void  insertArticle(Billdata billdata) {
		
		
	
		String sql = "INSERT INTO tr_bill_data (bill_id,contact_id,i_group_id,company_format,invoice_number,grand_total,organization,telephone,title,total,vat,dt_autobill)VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
		jdbcTemplate.update(sql,billdata.getBill_id(),billdata.getContact_id(),billdata.getI_group_id(),billdata.getCompany_format(),billdata.getInvoice_number(),billdata.getGrand_total(),billdata.getOrganization(),billdata.getTelephone(),billdata.getTitle(),billdata.getTotal(),billdata.getVat(),billdata.getDt_autobill());
		System.out.println("add ok");
	}

	
	
	
	
	
	
	
}
