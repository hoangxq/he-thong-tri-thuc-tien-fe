export class CaseDataRes {
    id!: number;
    gioiTinh!: string;
    tuoi!: number;
    tinhTrangNguc!: string;
    huyetAp!: number;
    nongDoCholesterol!: number;
    haDuongTrongMau!: boolean;
    ketQuaDoDienTim!: string;
    nhipTim!: number;
    viemHong!: boolean;
    doLomSongDienTim!: number;
    doDocDinhCaoNhatSongST!: string;
    ketQua!: boolean;
    trangThai!: string;
    chuanDoan!: string;
}

export class CaseDataReq {
    gioiTinh!: string;
    tuoi!: number;
    tinhTrangNguc!: string;
    huyetAp!: number;
    nongDoCholesterol!: number;
    haDuongTrongMau!: boolean;
    ketQuaDoDienTim!: string;
    nhipTim!: number;
    viemHong!: boolean;
    doLomSongDienTim!: number;
    doDocDinhCaoNhatSongST!: string;
}

export class ChuanDoanRes {
    doTuongDongMax!: number;
    listCaseDataRes !: CaseDataRes[];
    caseDataRes: CaseDataRes = new CaseDataRes;
}