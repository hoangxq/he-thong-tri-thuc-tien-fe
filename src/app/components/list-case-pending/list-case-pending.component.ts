import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CaseDataRes } from 'src/app/commons/case-data';
import { CaseDataService } from 'src/app/services/case-data.service';

@Component({
  selector: 'app-list-case-pending',
  templateUrl: './list-case-pending.component.html',
  styleUrls: ['./list-case-pending.component.css']
})
export class ListCasePendingComponent {
  errorMessage: Error = new Error;
  listCaseData!: CaseDataRes[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllCaseDataDangXuLy();
  }

  displayedColumns: string[] = ['id', 'gioiTinh', 'tuoi', 'tinhTrangNguc', 'huyetAp', 'nongDoCholesterol',
    'haDuongTrongMau', 'ketQuaDoDienTim', 'nhipTim', 'viemHong', 'doLomSongDienTim', 'doDocDinhCaoNhatSongST',
    'ketQua', 'trangThai', 'action'];

  dataSource = new MatTableDataSource<CaseDataRes>();


  constructor(private caseDataService: CaseDataService) { }

  getAllCaseDataDangXuLy() {
    this.caseDataService.getAllCaseDangXuLy().subscribe(data => {
      this.listCaseData = data;
      this.dataSource.data = data;
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }
}
