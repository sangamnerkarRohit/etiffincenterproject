package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.springframework.format.annotation.DateTimeFormat;

//payment_id	payment_type	payment_date	payment_status	user_id / delivery_id	order_id
@Entity
public class Payment extends BaseEntity{
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private PaymentType paymentType;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate paymentDate;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private PaymentStatus paymentStatus;
	public Payment() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	
	public Payment(PaymentType paymentType, LocalDate paymentDate, PaymentStatus paymentStatus) {
		super();
		this.paymentType = paymentType;
		this.paymentDate = paymentDate;
		this.paymentStatus = paymentStatus;
	}


	@OneToOne
	@JoinColumn(name = "order_id")
	private Orders selectedOrder;
	
	
	public PaymentType getPaymentType() {
		return paymentType;
	}


	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}


	public LocalDate getPaymentDate() {
		return paymentDate;
	}


	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}


	public PaymentStatus getPaymentStatus() {
		return paymentStatus;
	}


	public void setPaymentStatus(PaymentStatus paymentStatus) {
		this.paymentStatus = paymentStatus;
	}


	public Orders getSelectedOrder() {
		return selectedOrder;
	}


	public void setSelectedOrder(Orders selectedOrder) {
		this.selectedOrder = selectedOrder;
	}


	


	@Override
	public String toString() {
		return "Payment [paymentType=" + paymentType + ", paymentDate=" + paymentDate + ", paymentStatus="
				+ paymentStatus + "]";
	}
	
	
}
