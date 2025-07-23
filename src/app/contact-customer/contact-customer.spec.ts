import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCustomer } from './contact-customer';

describe('ContactCustomer', () => {
  let component: ContactCustomer;
  let fixture: ComponentFixture<ContactCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
