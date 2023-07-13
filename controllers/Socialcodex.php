<?php
class Socialcodex extends Trongate {
    
    function index() {
    $this->module('trongate_security');
    $data['token'] = $this->trongate_security->_make_sure_allowed();
        $this->view('socialcodex', $data);
       
    }

}