<?php

namespace App\Traits;

trait Hash
{

    private $SECRET_KEY = "sdjfhsjkhievu54y47836578348fy384by5883579439n5g";

    private $SECRET_IV = "jhbuiryet9ettttttttt9843547835493v98437nc982437";

    private $ENCRYPT_METHOD = "AES-256-CBC";

    protected function encode($value)
    {
        if (!$value) {
            return false;
        }
        $key = hash('sha256', $this->SECRET_KEY);
        $iv = substr(hash('sha256', $this->SECRET_IV), 0, 16);
        $output = openssl_encrypt($value, $this->ENCRYPT_METHOD, $key, 0, $iv);
        return base64_encode($output);
    }

    protected function decode($value)
    {
        if (!$value) {
            return false;
        }
        $key = hash('sha256', $this->SECRET_KEY);
        $iv = substr(hash('sha256', $this->SECRET_IV), 0, 16);
        return openssl_decrypt(base64_decode($value), $this->ENCRYPT_METHOD, $key, 0, $iv);
    }
}
