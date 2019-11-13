<?php
namespace app\admin\controller;
use think\Controller;
use think\captcha\Captcha;//验证码
use services\JsonServices;

class Login extends Controller
{ 
    public function index()
    {
        return $this->fetch();
    }
    /*登录界面*/
    public function login()
    {
        if($this->request->isGet()){
            return $this->fetch("login");
        }else if($this->request->isAjax()){
            $info = input('post.');
            return JsonServices::successResponse($info);
        }else if($this->request->isPost()){
            return JsonServices::successResponse('post');
        }
    }

    /**
     * 验证码
     */
    public function Captcha()
    {
        $config =    [
            // 验证码字体大小
            'fontSize'    =>    30,    
            // 验证码位数
            'length'      =>    5,   
            // 关闭验证码杂点
            'useNoise'    =>    false,
            'codeSet' =>'1234567890',
            'useCurve'=>false, 
        ];
        $captcha = new Captcha($config);
        return $captcha->entry();
    }
}
