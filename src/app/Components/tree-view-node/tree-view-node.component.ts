import { Component, Input, OnInit } from '@angular/core';
import { TreeData } from 'src/app/DataSource';
import { TreeButton } from 'src/app/TreeButton';
import { TreeItem } from 'src/app/TreeItem';

@Component({
  selector: 'app-tree-view-node',
  templateUrl: './tree-view-node.component.html',
  styleUrls: ['./tree-view-node.component.css']
})
export class TreeViewNodeComponent implements OnInit {

  constructor() { }
  @Input() public Item: TreeItem = new TreeItem();

  public ChildsList: TreeItem[] = new Array<TreeItem>();
  ngOnInit(): void {
    this.ChildsList = TreeData.filter(it => it.ParentId == this.Item.Id);
  }


}
