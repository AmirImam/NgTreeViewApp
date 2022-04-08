import { Component, OnInit } from '@angular/core';
import { TreeData } from 'src/app/DataSource';
import { TreeButton } from 'src/app/TreeButton';
import { TreeItem } from 'src/app/TreeItem';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  public ParentsList: TreeItem[] = new Array<TreeItem>();
  public ngOnInit(): void {
    this.ParentsList = TreeData.filter(it => it.ParentId == null);
  }


}
