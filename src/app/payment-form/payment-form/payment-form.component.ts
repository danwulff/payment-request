import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-payment-form',
	templateUrl: './payment-form.component.html',
	styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
	form = this.fb.group({
		cardNumber: ['', Validators.required],
		expiration: ['', Validators.required],
		cvv: ['', Validators.required],
	});
	paymentRequest: PaymentRequest;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.initializePaymentRequest();
	}

	formFocused(): void {
		console.log('focused');
		this.paymentRequest.show().then(
			response => {
				console.log('response', response);
				// [process payment]
				// send to a PSP etc.
				response.complete('success');
			},
			error => {
				console.log('error', error);
			}
		);
	}

	resetForm(): void {
		this.form.reset();
	}

	private initializePaymentRequest(): void {
		const methodData: PaymentMethodData[] = [
			{
				supportedMethods: 'basic-card',
				data: {
					supportedNetworks: ['visa', 'mastercard'],
				},
			},
		];
		const details: PaymentDetailsInit = {
			total: {
				label: 'Monthly price',
				amount: { currency: 'USD', value: '29.00' },
			},
		};
		const options: PaymentOptions = {};

		this.paymentRequest = new PaymentRequest(methodData, details, options);
	}
}
