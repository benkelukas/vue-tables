<?php
/**
 * Created by PhpStorm.
 * User: Lukas
 * Date: 03.03.2016
 * Time: 17:07
 */
$people = [
    [
        'id'    => 1,
        'name'  => 'John',
        'age'   => '20',
        'group' => 1
    ],
    [
        'id'    => 2,
        'name'  => 'Jane',
        'age'   => '22',
        'group' => 2
    ],
    [
        'id'    => 3,
        'name'  => 'Susan',
        'age'   => '40',
        'group' => 3
    ],
    [
        'id'    => 4,
        'name'  => 'Chris',
        'age'   => '50',
        'group' => 2
    ],
    [
        'id'    => 5,
        'name'  => 'Dan',
        'age'   => '31',
        'group' => 1
    ]
];

$query = $_GET['query'];

if ($query != '') {
    $group = $query['group'];

    $people = array_filter($people, function ($item) use ($group) {
        if ($item['group'] == $group) {
            return true;
        }

        return false;
    });
}

$response = [
    'data'  => $people,
    'count' => 5
];

die(
json_encode($response)
);