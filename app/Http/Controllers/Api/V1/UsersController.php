<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function index(Request $request){
        $users = User::all();

        if($request->name){
            $users = $users->where('name', 'LIKE', '%'.$request->name.'%');
            return $users;
        }

        if($request->email){
            $users = $users->where('email', 'LIKE', '%'.$request->email.'%');
            return $users;
        }

        if($request->date_of_birth){
            $users = $users->where('date_of_birth', 'LIKE', '%'.$request->date_of_birth.'%');
            return $users;
        }

        return $users;
    }
}
