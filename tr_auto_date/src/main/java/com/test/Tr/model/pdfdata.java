package com.test.Tr.model;

public class pdfdata {
	
	private String[] i_mid_id;
	private String[] c_plate_number;
	private String bill_id;
	private String company_format;
	private int invoice_number;

	public String[] getI_mid_id() {
		return i_mid_id;
	}

	public void setI_mid_id(String[] i_mid_id) {
		this.i_mid_id = i_mid_id;
	}
	
	public String[] getC_plate_number() {
		return c_plate_number;
	}

	public void setC_plate_number(String[] c_plate_number) {
		this.c_plate_number = c_plate_number;
	}

	public String getBill_id() {
		return bill_id;
	}

	public void setBill_id(String bill_id) {
		this.bill_id = bill_id;
	}
	
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
	
	public pdfdata(String[] i_mid_id,String[] c_plate_number,String bill_id,String company_format, int invoice_number) {
		super();
		this.i_mid_id = i_mid_id;
		this.c_plate_number = c_plate_number;
		this.bill_id = bill_id;
		this.company_format = company_format;
		this.invoice_number = invoice_number;
	}

	public pdfdata() {
		super();
	}

	

}
