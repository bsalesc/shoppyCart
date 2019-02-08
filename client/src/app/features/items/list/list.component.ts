import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces';
import { UserService } from '../../../services/user.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private _shoppingList: Item[] = [];
  private _expanded: string[] = [];
  public itemSelected: Item;

  @ViewChild(ModalComponent)
  modalView: ModalComponent;

  @ViewChild(EditComponent)
  editView: EditComponent;

  constructor(private itemService: ItemService, private userService: UserService) {}

  get list(): Item[] {
    return this._shoppingList.filter(f => this.showBoughtItems || !f.bought);
  }

  get totalRecords(): number {
    return this._shoppingList.length;
  }

  get showBoughtItems() {
    return this.userService.showBoughtItems;
  }

  set showBoughtItems(show: boolean) {
    this.userService.showBoughtItems = show;
    this.loadList();
  }

  get userAgreed() {
    return this.userService.userAgreed;
  }

  set userAgreed(value: boolean) {
    this.userService.userAgreed = value;
  }

  ngOnInit() {
    this.loadList();
  }

  isExpanded = id => !!this._expanded.find(f => f === id);

  toggle = id => (this.isExpanded(id) ? this._expanded.splice(this._expanded.indexOf(id), 1) : this._expanded.push(id));

  loadList = () => this.itemService.getAll().subscribe(list => (this._shoppingList = list));

  mark = (item: Item) => {
    item.bought = !item.bought;
    this.itemService.bought(item.id).subscribe(() => this.handleEdit(item));
  };

  get currentTotalToSpend(): number {
    if (!this._shoppingList.length) return 0;

    const values = this._shoppingList.filter(f => !f.bought).map(wish => (wish.price || 0) * wish.quantity);

    if (!values.length) return 0;

    return values.reduce((prev, curr) => prev + curr);
  }

  removeItem = item =>
    this.itemService.remove(item).subscribe(() => {
      this._shoppingList.splice(this._shoppingList.indexOf(item), 1);
    });

  openEditModal = wish => (this.itemSelected = Object.assign({}, wish)) && this.modalView.show();

  handleEditItem = () => this.editView.handleEdit();

  handleEdit = item => (this._shoppingList = this._shoppingList.map(w => (w.id === item.id ? item : w)));

  handleAdd = item => this._shoppingList.push(item);
}
