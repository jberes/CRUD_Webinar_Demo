import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataSource2Service } from './data-source2.service';

describe('DataSource2Service', () => {
  let service: DataSource2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataSource2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
