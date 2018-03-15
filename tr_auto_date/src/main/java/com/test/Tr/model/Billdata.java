package com.test.Tr.model;

import java.sql.Date;

public class Billdata {
	private int bill_id;
	private int contact_id;
	private int i_group_id;
	private String company_format;
	private int invoice_number;
	private int grand_total;
	private String organization;
	private String telephone;
	private String title;
	private float total;
	private float vat;
	private Date dt_autobill;
	
	public int getBill_id() {
		return bill_id;
	}
	public void setBill_id(int bill_id) {
		this.bill_id = bill_id;
	}
	///// 2 
	public int getContact_id() {
		return contact_id;
	}
	public void setContact_id(int contact_id) {
		this.contact_id = contact_id;
	}
	//////3
	public int getI_group_id() {
		return i_group_id;
	}
	public void setI_group_id(int i_group_id) {
		this.i_group_id = i_group_id;
	}
	//////4
	public String getCompany_format() {
		return company_format;
	}
	public void setCompany_format(String company_format) {
		this.company_format = company_format;
	}
	//////5
	public int getInvoice_number() {
		return invoice_number;
	}
	public void setInvoice_number(int invoice_number) {
		this.invoice_number = invoice_number;
	}
	///////6
	public int getGrand_total() {
		return grand_total;
	}
	public void setGrand_total(int grand_total) {
		this.grand_total = grand_total;
	}
	/////7
	public String getOrganization() {
		return organization;
	}
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	///////8
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	///////9
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	//////10
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	/////11
	public float getVat() {
		return vat;
	}
	public void setVat(float vat) {
		this.vat = vat;
	}
	//////12
	public Date getDt_autobill() {
		return dt_autobill;
	}
	public void setDt_autobill(Date dt_autobill) {
		this.dt_autobill = dt_autobill;
	}
	
	
	///////////////////////////////////////////////////////////////////////////
	public Billdata(int bill_id, int contact_id, int i_group_id, String company_format, int invoice_number,int grand_total,
			String organization, String telephone, String title,float total, float vat, Date dt_autobill) {
		super();
	
		this.bill_id = bill_id;
		this.contact_id = contact_id;
		this.i_group_id = i_group_id;
		this.company_format = company_format;
		this.invoice_number = invoice_number;
		this.grand_total = grand_total;
		this.organization = organization;
		this.telephone = telephone;
		this.title = title;
		this.total = total;
		this.vat = vat;
		this.dt_autobill = dt_autobill;
		
	}
	public Billdata() {
		super();
	}
	/*@Override
	public String toString() {
		return "Billdata [i_group_id=" + i_group_id + ", i_mid_id=" + i_mid_id + ", dt_install=" + dt_install
				+ ", dt_bill_tr=" + dt_bill_tr + ", dt_nextbill_tr=" + dt_nextbill_tr + ", contact_id=" + contact_id
				+ ", title=" + title + ", product_id=" + product_id + ", round=" + round + ", active=" + active
				+ ", c_plate_number=" + c_plate_number + ", c_car_code=" + c_car_code + "]";
	}*/
	
	
}
