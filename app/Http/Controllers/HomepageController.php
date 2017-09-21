<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;

class HomepageController extends Controller
{


    /**
     * Nyióoldal megjelenítése
     *
     * @author Kocsis Martin
     *
     * @access  public
     * @param   void
     * @return  html
     */
    public function indexView()
    {
        return View::make('main');
    }
}
