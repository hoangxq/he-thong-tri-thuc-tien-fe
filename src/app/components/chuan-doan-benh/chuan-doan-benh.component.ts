import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaseDataReq, CaseDataRes, ChuanDoanRes } from 'src/app/commons/case-data';
import { CaseDataService } from 'src/app/services/case-data.service';

@Component({
  selector: 'app-chuan-doan-benh',
  templateUrl: './chuan-doan-benh.component.html',
  styleUrls: ['./chuan-doan-benh.component.css']
})
export class ChuanDoanBenhComponent {
  errorMessage: Error = new Error;
  newCase: CaseDataReq = new CaseDataReq;
  chuanDoanRes: ChuanDoanRes = new ChuanDoanRes;
  caseDataForm!: FormGroup;

  constructor(private caseDataService: CaseDataService, private router: Router) { }

  ngOnInit(): void {
    this.caseDataForm = new FormGroup({
      'gioiTinh': new FormControl('', Validators.required),
      'tuoi': new FormControl('', Validators.required),
      'tinhTrangNguc': new FormControl('', Validators.required),
      'huyetAp': new FormControl('', Validators.required),
      'nongDoCholesterol': new FormControl('', Validators.required),
      'haDuongTrongMau': new FormControl('', Validators.required),
      'ketQuaDoDienTim': new FormControl('', Validators.required),
      'nhipTim': new FormControl('', Validators.required),
      'viemHong': new FormControl('', Validators.required),
      'doLomSongDienTim': new FormControl('', Validators.required),
      'doDocDinhCaoNhatSongST': new FormControl('', Validators.required),
    });
  }

  onChuanDoan() {
    if (this.caseDataForm.invalid) {
      this.caseDataForm.markAllAsTouched();
      return;
    }
    console.log(this.newCase);
    this.caseDataService.chuanDoanBenh(this.newCase).subscribe(data => {
      this.chuanDoanRes = data;
      console.log(this.chuanDoanRes);
    }, error => {
      this.errorMessage = error.error;
      console.log(this.errorMessage);
    });
  }

  changeGioiTinh(e: any){
    this.newCase.gioiTinh = e.target.value;
  }

  changeDauNguc(e: any){
    this.newCase.tinhTrangNguc = e.target.value;
  }

  changeDuongHuyet(e: any){ 
    this.newCase.haDuongTrongMau = e.target.value;
  }

  changeDoDienTim(e: any){
    this.newCase.ketQuaDoDienTim  = e.target.value;;
  }

  changeViemHong(e: any){
    this.newCase.viemHong = e.target.value;
  }

  changeDoDoc(e: any){
    this.newCase.doDocDinhCaoNhatSongST = e.target.value;
  }
}
