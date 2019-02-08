import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../interfaces';
import { of } from 'rxjs';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ItemService],
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});

const mockItem: Item = {
  bought: false,
  description: 'Item',
  id: '789979797',
  price: 10.11,
  quantity: 2,
};

export class MockItemService extends ItemService {
  getAll = () => of<Item[]>([mockItem]);

  getById = id => of<Item[]>([{ ...mockItem, id }]);

  add = (wish: Item) => of<Item>(wish);

  edit = (wish: Item) => of<Item>(wish);

  bought = id => of<Item>({ ...mockItem, id });

  remove = (wish: Item) => of();
}
