import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { firstValueFrom } from 'rxjs';
import { DataSource2Service } from '../services/data-source2.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public dataSource2ApiTasks: Array<any> = [];

  constructor(
    private dataSource2Service: DataSource2Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource2Service.getApiTasks().subscribe(data => this.dataSource2ApiTasks = data);
  }

  async apiRowAdded(event: IRowDataEventArgs) {
    var newFeature = await firstValueFrom(this.dataSource2Service.postApiTaskSp(event.data));
    this.dataSource2ApiTasks[this.dataSource2ApiTasks.length - 1] = newFeature;
    this.dataSource2ApiTasks = [...this.dataSource2ApiTasks];
  }

  public apiRowDeleted(args: IRowDataEventArgs) {
    this.dataSource2Service.deleteApiTaskSp(args.data.taskId).subscribe();
  }

  public apiRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.dataSource2Service.putApiTaskSp(args.rowData).subscribe();
    }
  }
}
