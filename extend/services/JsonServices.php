<?php
namespace services;
class JsonServices{
    /**
     * 成功响应 
     * code 统一成功响应代码为：2000
     */
    static public function successResponse($msg='请求成功',$data=null)
    {
       return self::responseData(2000,$msg,$data);
    }  

    /**
     * 错误响应
     * code 统一错误响应代码为：2004
     */
    static public function errorResponse($msg='请求错误',$data=null)
    {
        
        
        return self::responseData(2004,$msg,$data);
    }

    /**
     * 数据组装
     * @code  响应码
     * @msg   响应提示信息
     * @data  数据
     */
    static public function responseData($code,$msg='',$data=[])
    {
        if (empty($data)) {
            
            return json(compact('code','msg'));
        } else {
            return json(compact('code','msg','data'));
        } 
        
    }
}