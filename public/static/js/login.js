function verify_code() {
    $('#captchaImg').attr('src', '/coder');
}
layui.use(['form', 'layer'], function () {
    var form = layui.form;
    var layer = layui.layer;
    var length = new RegExp(/^[\S]{5,15}$/);
    form.verify({
        username:function(value,item){
            if(value.length==0){
                return "请输入用户名";
            }
            var begin = /^[a-zA-Z]/;//以字母开头
            if(!begin.test(value)){
                return "用户名必须以字母开头";
            }
            if (!length.test(value)) {
                return "用户名必须5到15位之间";
            }
            var specialCharacters = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");//不包含特殊符号返回True
            if (specialCharacters.test(value)) {
                return "用户名不能输入特殊字符";
            }
        },
        password:function(value,item){
            if(value.length==0){
                return "请输入密码";
            }
            if (!length.test(value)) {
                return "密码必须5到15位之间";
            }
        },
        vercodes:function(value,item){
            if(value.length==0){
                return "请输入验证码";
            }
            if(value.length!=5){
                return "验证码5个字符";
            }
            var number = /^[0-9]*$/;//只能是数字
            if (!number.test(value)) {
                return "验证码只包含数字";
            }
        }
    })
    form.on('submit(login)', function (data) {
        $.ajax({
            type:'post',
            url:'/admin',
            data: data.field,
            success:function(response){
                console.log(response);
            },
            error:function(errors){
                console.log(errors);
            }
        })
        /*
        $('#login').attr('disabled',true);
        $.ajax({
            type: 'post',
            url: '/submit_login',
            data: data.field,
            success: function (response) {
                console.log(response);
                $('#login').removeAttr('disabled');
                if($('#vercode').val().length>0){
                    verify_code();
                }
                if (response.code != 2000) {
                    layer.open({
                        title: '友情提示',
                        content: response.msg,
                        icon: 2
                    });
                }else{
                    window.location.href = '/index.php';
                }
            },
            error: function (error) {
                $('#login').removeAttr('disabled');
                if($('#vercode').val().length>0){
                    verify_code();
                }
                layer.open({
                    title: '友情提示',
                    content: '请求失败',
                    icon: 2
                });
            }
        })*/
        return false;
    })
});