let error = document.querySelectorAll('.form__group-error');
function validateForm() {
    // Lấy dữ liệu từ form
    let uname = document.forms["myForm"]["uname"].value;
    let bthday = document.forms["myForm"]["bthday"].value;
    let passwd = document.forms["myForm"]["passwd"].value;
    let gender = document.forms["myForm"]["gender"].value;
    let address = document.forms["myForm"]["address"].value;
    let email = document.forms["myForm"]["email"].value;
    let repasswd = document.forms["myForm"]["repasswd"].value;
    let interestElement = document.querySelectorAll('.interest');
    let interest = [];
    // Tạo biến check với các dữ liệu tương ứng
    let checkForm = false;
    let checkUname = false;
    let checkPasswd = false;
    let checkRepasswd = false;
    let checkAddress = false;
    let checkBthday = false;
    let checkEmail = false;
    let checkInterest = false;
    // Tạo các regex để kiểm tra dữ liệu có hợp lệ hay không qua hàm test.
    let rgxUname = /^[a-zA-Z0-9]{8,16}$/g;
    let rgxPasswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8}/g;
    // let rgxFname = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{3,}$/g;
    let rgxAdd = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\d\,]+$/g;


    // Kiem tra username
    // username chứa số, ký tự có ít nhất một ký tự viết HOA, không chứa ký tự đặc biệt.
    if (uname === "") {
        error[0].innerHTML = "Tài khoản không được bỏ trống";
        checkUname = false;
    } else {
        error[0].innerHTML = "";
        if (rgxUname.test(uname)) {
            checkUname = true;
        } else {
            checkUname = false;
            error[0].innerHTML = "Tài khoản chứa số, ký tự và có độ dài 8 - 16 ký tự.";
        }
    }

    // Kiem tra passwd
    // Mật khẩu có độ dài từ 8 ký tự
    // Có 1 ký tự viết HOA
    // có chứa ký tự đặc biệt 
    // có số 
    if (passwd === "") {
        error[1].innerHTML = "Mật khẩu không được bỏ trống";
        error[2].innerHTML = "Mật khẩu không được bỏ trống";
        checkPasswd = false;
    } else {
        error[1].innerHTML = "";
        if (rgxPasswd.test(passwd)) {
            checkPasswd = true;
        } else {
            error[1].innerHTML = "Mật khẩu có độ dài 8, chứa ký tự thường, chứa ký tự viết hoa, chứa só và ký tự đặc biệt.";
            checkPasswd = false;
        }
    }

    if(repasswd === "" && passwd != ""){
        error[2].innerHTML = "Vui lòng nhập lại mật khẩu";
    }

    if(checkPasswd){
        if(passwd === repasswd){
            error[2].innerHTML = "";
            checkRepasswd = true;
        }else{
            error[2].innerHTML = "Mật khẩu không trùng khớp. Vui lòng nhập lại";
            checkRepasswd = false;
        }
    }

    // Kiem ngay sinh
    if (bthday === "") {
        error[3].innerHTML = "Ngày sinh không được bỏ trống";
        checkBthday = false;
    } else {
        error[3].innerHTML = "";
        checkBthday = true;
    }
    //Kiem tra gioi tinh [có att checked nên giới tính luôn luôn đc điền sẵn]

    // Kiem tra dia chi
    // Không chứa ký tự đặc biệt
    if (address === "") {
        error[5].innerHTML = "Địa chỉ không được bỏ trống";
        checkAddress = false;
    } else {
        error[5].innerHTML = "";
        if (rgxAdd.test(address)) {
            checkAddress = true;
        } else {
            error[5].innerHTML = "Địa chỉ không thể chứa ký tự đặc biệt";
            checkAddress = false;
        }
    }

    // Kiem tra email
    if (email === "") {
        error[6].innerHTML = "Email không được bỏ trống";
        checkEmail = false;
    } else {
        error[6].innerHTML = "";
        checkEmail = true;
    }

    //Kiem tra so thich
    interestElement.forEach(element => {
        if (element.checked) {
            interest.push(element.value);
        }
    });

    if (interest.length === 0) {
        error[7].innerHTML = "Sở thích không được bỏ trống";
        checkInterest = false;
    } else {
        error[7].innerHTML = "";
        checkInterest = true;
    }

    // Phong truong hop nguoi dung dien thong tin o phia duoi sau do an dang ky nhu v thi Form se dc gui di do checkForm = true
    if (checkBthday && checkAddress && checkEmail && checkPasswd && checkRepasswd && checkUname && checkInterest) {
        checkForm = true;
    }
    return checkForm;
}