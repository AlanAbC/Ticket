<?php
/**
 * Created by PhpStorm.
 * User: theprap
 * Date: 30/05/17
 * Time: 10:35 PM
 */
session_start();
session_destroy();
header('Location: ../index.php');