package com.test.Tr.model;

import java.sql.Date;

public class Costomer {
	private int i_group_id;
	private int i_mid_id;
	private Date dt_install;
	private Date dt_bill_tr;
	private Date dt_nextbill_tr;
	private int contact_id;
	private String title;
	private String product_id;
	private int round;
	private boolean active;
	private String c_plate_number;
	private String c_car_code;
	private String c_group_name;
	private String c_comment;
	public int getI_group_id() {
		return i_group_id;
	}
	public void setI_group_id(int i_group_id) {
		this.i_group_id = i_group_id;
	}
	public int getI_mid_id() {
		return i_mid_id;
	}
	public void setI_mid_id(int i_mid_id) {
		this.i_mid_id = i_mid_id;
	}
	public Date getDt_install() {
		return dt_install;
	}
	public void setDt_install(Date dt_install) {
		this.dt_install = dt_install;
	}
	public Date getDt_bill_tr() {
		return dt_bill_tr;
	}
	public void setDt_bill_tr(Date dt_bill_tr) {
		this.dt_bill_tr = dt_bill_tr;
	}
	public Date getDt_nextbill_tr() {
		return dt_nextbill_tr;
	}
	public void setDt_nextbill_tr(Date dt_nextbill_tr) {
		this.dt_nextbill_tr = dt_nextbill_tr;
	}
	public int getContact_id() {
		return contact_id;
	}
	public void setContact_id(int contact_id) {
		this.contact_id = contact_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getProduct_id() {
		return product_id;
	}
	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}
	public int getRound() {
		return round;
	}
	public void setRound(int round) {
		this.round = round;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public String getC_plate_number() {
		return c_plate_number;
	}
	public void setC_plate_number(String c_plate_number) {
		this.c_plate_number = c_plate_number;
	}
	public String getC_car_code() {
		return c_car_code;
	}
	public void setC_car_code(String c_car_code) {
		this.c_car_code = c_car_code;
	}
	public String getC_group_name() {
		return c_group_name;
	}
	public void setC_group_name(String c_group_name) {
		this.c_group_name = c_group_name;
	}
	public String getC_comment() {
		return c_comment;
	}
	public void setC_comment(String c_comment) {
		this.c_comment = c_comment;
	}
	public Costomer(int i_group_id, int i_mid_id, Date dt_install, Date dt_bill_tr, Date dt_nextbill_tr, int contact_id,
			String title, String product_id, int round, boolean active, String c_plate_number, String c_car_code,
			String c_group_name, String c_comment) {
		super();
		this.i_group_id = i_group_id;
		this.i_mid_id = i_mid_id;
		this.dt_install = dt_install;
		this.dt_bill_tr = dt_bill_tr;
		this.dt_nextbill_tr = dt_nextbill_tr;
		this.contact_id = contact_id;
		this.title = title;
		this.product_id = product_id;
		this.round = round;
		this.active = active;
		this.c_plate_number = c_plate_number;
		this.c_car_code = c_car_code;
		this.c_group_name = c_group_name;
		this.c_comment = c_comment;
	}
	public Costomer() {
		super();
	}
	@Override
	public String toString() {
		return "Costomer [i_group_id=" + i_group_id + ", i_mid_id=" + i_mid_id + ", dt_install=" + dt_install
				+ ", dt_bill_tr=" + dt_bill_tr + ", dt_nextbill_tr=" + dt_nextbill_tr + ", contact_id=" + contact_id
				+ ", title=" + title + ", product_id=" + product_id + ", round=" + round + ", active=" + active
				+ ", c_plate_number=" + c_plate_number + ", c_car_code=" + c_car_code + ", c_group_name=" + c_group_name
				+ ", c_comment=" + c_comment + "]";
	}
	
	
}
