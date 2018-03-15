package com.test.Tr.dao;


import java.io.FileOutputStream;
import java.io.IOException;



import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;

import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfWriter;

import com.test.Tr.model.pdfdata;

import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;

import com.itextpdf.text.BaseColor;


/*import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.test.Tr.model.Billdata;
import com.test.Tr.model.pdfdata;
import com.itextpdf.text.Font;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
*/
/**
 * Hello world!
 *
 */
public class PDFgen {
    public static void main(pdfdata pdfdata) throws IOException,
            DocumentException {
    /*	String[] mid1 = pdfdata.getI_mid_id();
    	String mid;
    	mid =  Arrays.toString(mid1);
    	
    	String[] plate1 = pdfdata.getC_plate_number();
    	String plate;
    	plate =  Arrays.toString(plate1);*/
    	
    	System.out.println("ใช้ได้ๆ");
    	System.out.println("เลข"+pdfdata.getBill_id());
    	Font font = new Font(BaseFont.createFont("THSarabunNew.ttf",
                BaseFont.IDENTITY_H, BaseFont.EMBEDDED  ));
    	
    	 String format = pdfdata.getCompany_format();	
   int invoice = pdfdata.getInvoice_number();
   
   
  
    	String part = "pdf\\";
    	// String fname = "1234";
    	String typefile = ".pdf";
    	String filename = part+format+invoice+typefile;
    	String imagepart = "eyefleet.jpg";
    	 Document document = new Document();
         PdfWriter.getInstance(document, new FileOutputStream(filename));
      
        
         document.open();
      
         Image image = Image.getInstance(imagepart);
         image.scaleAbsolute(100f, 100f);
       //  document.add(image);
         
         
         Paragraph head = new Paragraph();
         head.add("\n");
      /*   head.setAlignment(Element.ALIGN_CENTER);
         Chunk c = new Chunk("เอกสารแนบของใบแจ้งหนี้เลขที่ : "+format+invoice+"\n");
         font.setSize(20);
         head.setFont(font);
         font.setSize(20);
         
         head.add(c);*/
         
        
         Chunk c = new Chunk(image,0,-50);
         head.add(c);
        // head.add("เอกสารแนบของใบแจ้งหนี้เลขที่ : "+format+invoice+"\n");
        // head.setAlignment(Element.ALIGN_CENTER);
          c = new Chunk("เอกสารแนบของใบแจ้งหนี้เลขที่ : "+format+invoice+"\n");
         font.setSize(20);
         head.setFont(font);
         head.setAlignment(Element.ALIGN_CENTER);
         
         head.add(c);
         
         head.add("\n");
         head.add("\n");
        
         
       /*  Paragraph title = new Paragraph();
         title.setAlignment(Element.ALIGN_CENTER);
         font.setSize(16);
         title.setFont(font);
         title.add("ของใบแจ้งหนี้เลขที่ : "+pdfdata.getBill_id()+"\n");
         document.add(title);*/
         
         Paragraph body = new Paragraph();
         body.setAlignment(Element.ALIGN_CENTER);
         font.setSize(16);
         body.setFont(font);
         
         body.add("\n");
         body.add("\n");
         body.add("\n");
         
         
		// document.add(body);
		 
		// ทดสอบ ตาราง
		 
			PdfPTable table = new PdfPTable(3); // 3 columns.
			table.setWidthPercentage(100); // Width 100%
			table.setSpacingBefore(10f); // Space before table
			table.setSpacingAfter(10f); // Space after table
			
			// Set Column widths
			float[] columnWidths = { 1f, 3f, 3f };
			table.setWidths(columnWidths);
			 table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_CENTER);
			
			 ////
			 Paragraph cells1 = new Paragraph();
			 cells1.setAlignment(Element.ALIGN_CENTER);
	         font.setSize(16);
	         cells1.setFont(font);
	         cells1.add("ลำดับที่");
			PdfPCell cell1 = new PdfPCell(cells1);
			//cell1.setBorderColor(BaseColor.BLUE);
			cell1.setPaddingLeft(10);
			cell1.setHorizontalAlignment(Element.ALIGN_CENTER);
			cell1.setVerticalAlignment(Element.ALIGN_MIDDLE);
			cell1.setBackgroundColor(BaseColor.LIGHT_GRAY);

			 Paragraph cells2 = new Paragraph();
			 cells2.setAlignment(Element.ALIGN_CENTER);
	         font.setSize(16);
	         cells2.setFont(font);
	         cells2.add("ทะเบียน");
			PdfPCell cell2 = new PdfPCell(cells2);
			//cell1.setBorderColor(BaseColor.BLUE);
			cell2.setPaddingLeft(10);
			cell2.setHorizontalAlignment(Element.ALIGN_CENTER);
			cell2.setVerticalAlignment(Element.ALIGN_MIDDLE);
			cell2.setBackgroundColor(BaseColor.LIGHT_GRAY);

			 Paragraph cells3 = new Paragraph();
			 cells3.setAlignment(Element.ALIGN_CENTER);
	         font.setSize(16);
	         cells3.setFont(font);
	         cells3.add("MID");
			PdfPCell cell3 = new PdfPCell(cells3);
			//cell1.setBorderColor(BaseColor.BLUE);
			cell3.setPaddingLeft(10);
			cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			cell3.setVerticalAlignment(Element.ALIGN_MIDDLE);
			cell3.setBackgroundColor(BaseColor.LIGHT_GRAY);

			table.addCell(cell1);
			table.addCell(cell2);
			table.addCell(cell3);
			 // table.addCell("Location:");
			
			//////////////loop cell
			String[] nums = pdfdata.getC_plate_number();
	         String[] ids = pdfdata.getI_mid_id();
	         
			
		         for (int i = 0; i<nums.length; i++){
		        	 int row = i + 1;
		        	 String stringrow = Integer.toString(row);;
				     String num = nums[i];
				     String id = ids[i];
				     
				     //////
				     
					 Paragraph rowss = new Paragraph();
					 rowss.setAlignment(Element.ALIGN_CENTER);
			         font.setSize(16);
			         rowss.setFont(font);
			         rowss.add(stringrow);
					PdfPCell rows = new PdfPCell(rowss);
					//cell1.setBorderColor(BaseColor.BLUE);
					rows.setPaddingLeft(10);
					rows.setHorizontalAlignment(Element.ALIGN_CENTER);
					rows.setVerticalAlignment(Element.ALIGN_MIDDLE);
					//rows.setBackgroundColor(BaseColor.LIGHT_GRAY);

					 Paragraph numss = new Paragraph();
					 numss.setAlignment(Element.ALIGN_CENTER);
			         font.setSize(16);
			         numss.setFont(font);
			         numss.add(num);
					PdfPCell numsss = new PdfPCell(numss);
					//cell1.setBorderColor(BaseColor.BLUE);
					numsss.setPaddingLeft(10);
					numsss.setHorizontalAlignment(Element.ALIGN_CENTER);
					numsss.setVerticalAlignment(Element.ALIGN_MIDDLE);
					//numsss.setBackgroundColor(BaseColor.LIGHT_GRAY);

					 Paragraph idss = new Paragraph();
					 idss.setAlignment(Element.ALIGN_CENTER);
			         font.setSize(16);
			         idss.setFont(font);
			         idss.add(id);
					PdfPCell idsss = new PdfPCell(idss);
					//cell1.setBorderColor(BaseColor.BLUE);
					idsss.setPaddingLeft(10);
					idsss.setHorizontalAlignment(Element.ALIGN_CENTER);
					idsss.setVerticalAlignment(Element.ALIGN_MIDDLE);
				//	idsss.setBackgroundColor(BaseColor.LIGHT_GRAY);
				     
				     //////
		        	 
		    		 table.addCell(rows);
		             table.addCell(numsss);
		             table.addCell(idsss);
		             

/*
		             int looppage = i ; 

		            if (looppage == 32) {
		            		            	 document.newPage();
		            		            	 table.addCell(cell1);
		            		     			table.addCell(cell2);
		            		     			table.addCell(cell3);
		            		     			looppage = 0 ;
		            }
*/
		             
		             
		         }
			  
			  //
			
			/* for (int i = 0; i<nums.length; i++) {
				 int row = i + 1;
			     String num = nums[i];
			     String id = ids[i];
			     System.out.println(num);
			     System.out.println(id);
			     
			     System.out.println(row);
			     
			     
			     
			     
			     
			     
			     
			    
			  //   document.add(new Paragraph("ทะเบียน :"+num+"   "+"MID : "+id,font));
			     // Do work.
			 }*/
			
			//////////////loop cell

			head.add(table);
			 document.add(head);
		//	document.add(table);
		 
		 // ทดสอบตาราง
		
         
        /* font.setSize(24);
         document.add(new Paragraph("เอกสารแนบ",font));
         
         font.setSize(16);
         document.add(new Paragraph(" MID :"+mid,font));
         
         document.add(new Paragraph("ทะเบียน :"+plate,font));*/
         
         
     	
         document.close();
         System.out.println("Done");
    	
    	
    	
    	////test Table 
    	/*String part = "C:\\Users\\Diana\\Downloads\\Documents\\";
    	String fname = "19999";
    	String typefile = ".pdf";
    	String filename = part+fname+typefile;
    	
    	 Document document = new Document();
		 PdfPTable table = new PdfPTable(new float[] { 2, 1, 2 });
	     table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_CENTER);
		 table.addCell("Name");
         table.addCell("Age");
         table.addCell("Location");
	     table.setHeaderRows(1);
	     PdfPCell[] cells = table.getRow(0).getCells(); 
	     for (int j=0;j<cells.length;j++){
	    	 cells[j].setBackgroundColor(BaseColor.GRAY);
	     }
         for (int i=1;i<5;i++){
    		 table.addCell("Name:"+i);
             table.addCell("อายุ:"+i);
             table.addCell("Location:"+i);
         }
	     PdfWriter.getInstance(document, new FileOutputStream(filename));
	     document.open();
         document.add(table);
	     document.close();
	     System.out.println("Done");*/
    	
    	
    	
    }
}