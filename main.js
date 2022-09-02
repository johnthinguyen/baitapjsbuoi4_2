//baitap buổi 4_2
//bài5
document.getElementById('btnNgayHomQua').onclick = function () {
    var ngay = document.getElementById('ngay').value * 1;
    var thang = document.getElementById('thang').value * 1;
    var nam = document.getElementById('nam').value * 1;
    var ngayThangNam = (ngay - 1) + '/' + thang + '/' + nam;
    if (ngay == 1 && thang == 5 || ngay == 1 && thang == 7 || ngay == 1 && thang == 10 || ngay == 1 && thang == 12) {
        ngayThangNam = 30 + '/' + (thang - 1) + '/' + nam;
    } else if (ngay == 1 && thang == 2 || ngay == 1 && thang == 4 || ngay == 1 && thang == 6 || ngay == 1 && thang == 8 || ngay == 1 && thang == 9 || ngay == 1 && thang == 9 || ngay == 1 && thang == 11) {
        ngayThangNam = 31 + '/' + (thang - 1) + '/' + nam;
    } else if (ngay == 1 && thang == 1) {
        ngayThangNam = 31 + '/' + 12 + '/' + (nam - 1);
    } else if (ngay == 1 && thang == 3) {
        ngayThangNam = 28 + '/' + (thang - 1) + '/' + nam;
    }
    document.getElementById('thongBaoNgayThangNam').innerHTML = ngayThangNam;
}
document.getElementById('btnNgayMai').onclick = function () {
    var ngay = document.getElementById('ngay').value * 1;
    var thang = document.getElementById('thang').value * 1;
    var nam = document.getElementById('nam').value * 1;
    var ngayThangNam = (ngay + 1) + '/' + thang + '/' + nam;
    if (ngay == 31 && thang == 1 || ngay == 31 && thang == 3 || ngay == 31 && thang == 5 || ngay == 31 && thang == 7 || ngay == 31 && thang == 8 || ngay == 31 && thang == 10) {
        ngayThangNam = 1 + '/' + (thang + 1) + '/' + nam;
    } else if (ngay == 30 && thang == 4 || ngay == 30 && thang == 6 || ngay == 30 && thang == 9 || ngay == 30 && thang == 11) {
        ngayThangNam = 1 + '/' + (thang + 1) + '/' + nam;
    } else if (thang == 2 && ngay == 28) {
        ngayThangNam = 1 + '/' + 3 + '/' + nam;
    } else if (ngay == 31 && thang == 12) {
        ngayThangNam = 1 + '/' + 1 + '/' + (nam + 1);
    } else if (ngay > 31 && thang == 1 || ngay > 31 && thang == 3 || ngay > 31 && thang == 5 || ngay > 31 && thang == 7 || ngay > 31 && thang == 8 || ngay > 31 && thang == 10 || ngay > 30 && thang == 4 || ngay > 30 && thang == 6 || ngay > 30 && thang == 9 || ngay > 30 && thang == 11) {
        ngayThangNam = 'undefined';
    }
    document.getElementById('thongBaoNgayThangNam').innerHTML = ngayThangNam;
}


// bai 6
document.getElementById('btnTinhNgay').onclick = function () {
    var nhapNgay = document.getElementById('nhapNgay').value * 1;
    var nhapThang = document.getElementById('nhapThang').value * 1;
    var ngayThang = '';
    if (nhapNgay == 1 || nhapNgay == 3 || nhapNgay == 5 || nhapNgay == 7 || nhapNgay == 8 || nhapNgay == 10 || nhapNgay == 12) {
        ngayThang = 'tháng ' + nhapNgay + ' năm ' + nhapThang + ' có 31 ngày';
    } else if (nhapNgay == 4 || nhapNgay == 6 || nhapNgay == 9 || nhapNgay == 11) {
        ngayThang = 'tháng ' + nhapNgay + ' năm ' + nhapThang + '  có 30 ngày';
    } else if (nhapThang % 4 == 0 && nhapThang % 100 != 0 && nhapNgay == 2) {
        ngayThang = 'thang 2 co 29 ngay';
    } else {
        ngayThang = 'thang 2 co 28 ngay';
    }
    document.getElementById('thongBaoNgay').innerHTML = ngayThang;
}
//bai 7
document.getElementById('btnDocSo').onclick = function () {
    var nhapBaSo = document.getElementById('nhapBaSo').value * 1;

    var hangDv = nhapBaSo % 10;
    var hangChuc = Math.floor((nhapBaSo % 100) / 10);
    var hangTram = Math.floor((nhapBaSo % 1000) / 100);
    //hangChuc = Math.floor((n % 100) / 10);
    thongBaoSo = hangTram + ' trăm ' + hangChuc + ' mươi ' + hangDv;
    if (hangDv == 0) {
        thongBaoSo = hangTram + ' trăm ' + hangChuc + ' mươi '
    } else if (hangChuc == 0) {
        thongBaoSo = hangTram + ' trăm lẻ ' + hangDv;
    } else if (hangChuc == 1) {
        thongBaoSo = hangTram + ' trăm mười ' + hangDv;
    } else if (hangTram == 0) {
        thongBaoSo = 'không xác định';
    }
    document.getElementById('thongBaoSo').innerHTML = thongBaoSo;
}

//bai 8
document.getElementById('btnTimToaDo').onclick = function () {
    var tenSinhVien1 = document.getElementById('tenSinhVien1').value;
    var toaDoX1 = document.getElementById('toaDoX1').value * 1;
    var toaDoY1 = document.getElementById('toaDoY1').value * 1;
    var tenSinhVien2 = document.getElementById('tenSinhVien2').value;
    var toaDoX2 = document.getElementById('toaDoX2').value * 1;
    var toaDoY2 = document.getElementById('toaDoY2').value * 1;
    var tenSinhVien3 = document.getElementById('tenSinhVien3').value;
    var toaDoX3 = document.getElementById('toaDoX3').value * 1;
    var toaDoY3 = document.getElementById('toaDoY3').value * 1;
    var toaDoX4 = document.getElementById('toaDoX4').value * 1;
    var toaDoY4 = document.getElementById('toaDoY4').value * 1;
    var toaDo = '';
    if ((toaDoX1 + toaDoX4) > (toaDoX2 + toaDoX4) && (toaDoY1 + toaDoY4) > (toaDoY2 + toaDoY4) && (toaDoX1 + toaDoX4) > (toaDoX3 + toaDoX4) && (toaDoY1 + toaDoY4) > (toaDoY3 + toaDoY4)) {
        toaDo = ' sinh vien xa nha nhat la : ' + tenSinhVien1;
    } else if ((toaDoX2 + toaDoX4) > (toaDoX1 + toaDoX4) && (toaDoX2 + toaDoX4) > (toaDoX3 + toaDoX4)) {
        toaDo = 'sinh vien xa nha nhat la: ' + tenSinhVien2
    } else if ((toaDoX3 + toaDoX4) > (toaDoX1 + toaDoX4) && (toaDoX3 + toaDoX4) > (toaDoX2 + toaDoX4)) {
        toaDo = 'sinh vien xa nha nhat la: ' + tenSinhVien3;
    }
    document.getElementById('thongBaoToaDo').innerHTML = toaDo;
}




