<?php

namespace App\Traits;

use DateTime;

trait Helper
{

    function validateDate($date, $return_format = 'Y-m-d H:i:s', $format = 'Y-m-d H:i:s')
    {
        $d = DateTime::createFromFormat($format, $date);
        $check = $d && $d->format($format) === $date;
        if ($check) return $d->format($return_format);
        return "";
    }

    public function getNumberOfValue($length = 0, $value = '?', $response = 'string')
    {
        $collection = collect(array_fill(0, $length, $value));
        if($response == 'string') {
            return $collection->join(',');
        }
        return $collection;
    }
}
