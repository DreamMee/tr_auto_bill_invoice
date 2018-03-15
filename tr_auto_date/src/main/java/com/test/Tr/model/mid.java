package com.test.Tr.model;

public class mid {
	
	private Integer i_mid_id;

	public Integer getI_mid_id() {
		return i_mid_id;
	}

	public void setI_mid_id(Integer i_mid_id) {
		this.i_mid_id = i_mid_id;
	}

	public mid(Integer i_mid_id) {
		super();
		this.i_mid_id = i_mid_id;
	}

	public mid() {
		super();
	}

	@Override
	public String toString() {
		return "mid {i_mid_id=" + i_mid_id + "}";
	}


}
