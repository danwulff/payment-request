import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PaymentFormRoutingModule } from './payment-form-routing.module';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
	declarations: [PaymentFormComponent],
	imports: [
		CommonModule,
		PaymentFormRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
	],
})
export class PaymentFormModule {}
