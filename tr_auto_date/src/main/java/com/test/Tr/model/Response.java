package com.test.Tr.model;

public class Response {
	private String status;
	private Object data;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public Response(String status, Object data) {
		super();
		this.status = status;
		this.data = data;
	}
	public Response() {
		super();
	}
	@Override
	public String toString() {
		return "Psnexbill [status=" + status + ", data=" + data + "]";
	}
	
	
}