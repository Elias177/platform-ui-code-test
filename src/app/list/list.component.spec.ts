import { ListComponent } from './list.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CardComponent} from "./card/card.component";
import {FormatPhonePipe} from "../pipes/format-phone.pipe";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent, CardComponent, FormatPhonePipe ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
