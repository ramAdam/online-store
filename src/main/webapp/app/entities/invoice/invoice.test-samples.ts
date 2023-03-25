import dayjs from 'dayjs/esm';

import { InvoiceStatus } from 'app/entities/enumerations/invoice-status.model';
import { PaymentMethod } from 'app/entities/enumerations/payment-method.model';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 91509,
  date: dayjs('2019-12-26T10:24'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2019-12-26T22:20'),
  paymentAmount: 24487,
  code: 'Expressway Berkshire',
};

export const sampleWithPartialData: IInvoice = {
  id: 32294,
  date: dayjs('2019-12-26T03:54'),
  details: 'Venezuela Arkansas auxiliary',
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['PAYPAL'],
  paymentDate: dayjs('2019-12-26T16:18'),
  paymentAmount: 28832,
  code: 'Buckinghamshire Florida Wooden',
};

export const sampleWithFullData: IInvoice = {
  id: 16008,
  date: dayjs('2019-12-26T07:15'),
  details: 'Chief Security',
  status: InvoiceStatus['PAID'],
  paymentMethod: PaymentMethod['CASH_ON_DELIVERY'],
  paymentDate: dayjs('2019-12-26T15:42'),
  paymentAmount: 88279,
  code: 'background',
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2019-12-26T01:29'),
  status: InvoiceStatus['ISSUED'],
  paymentMethod: PaymentMethod['CREDIT_CARD'],
  paymentDate: dayjs('2019-12-26T11:44'),
  paymentAmount: 80001,
  code: 'Romania Borders',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
