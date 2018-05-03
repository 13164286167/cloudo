<?php
//data/users/signout.php
session_start();
session_unset();
session_destroy();