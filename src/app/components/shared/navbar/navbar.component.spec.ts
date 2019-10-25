import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../../app-routing.module';
import { HomeComponent } from '../../home/home.component';
import { SearchComponent } from '../../search/search.component';
import { ThousandsPipe } from 'src/app/shared/pipe/thousandsPipe';
import { DetailComponent } from '../../detail/detail.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  // let component: NavbarComponent;
  // let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ NavbarComponent]
      // schemas: [NO_ERRORS_SCHEMA]
    });

  });
});
