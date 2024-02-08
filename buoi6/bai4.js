function validateForm() {
    x=document.forms["frm_dk"]["txt_ho"].value;
    if(x==""){
        alert("Ban chưa nhập họ");
        return false;
    }
    x=document.getElementById("txt_ten").value;
    if(x==""){
        alert("Bạn chưa nhập tên");
        return false;
    }
    x=document.getElementById("txt_sdt").value;
    if(isNaN(x)||length(x)==0||length(x)>10){
        alert("Điện thoại phải là số, mời nhập lại");
        return false;
    }



  }