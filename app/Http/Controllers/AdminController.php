<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function index(){
        $users = User::where('is_admin', false)->get();
        return Inertia::render("Admin/Dashboard", ["users" => $users]);
    }

    public function show(){
        $user = Auth::user();
        return Inertia::render('Admin/AddUser', ["user" => $user]);
    }

    public function create(Request $request){
        $date = Carbon::createFromFormat('Y/m/d', $request->date_of_birth)->format('Y-m-d');
        $user = new User();
        $user->fill([
            "name" => $request->name,
            "email" => $request->email,
            "date_of_birth" => $date,
            "password" => $request->password,
        ]);
        $user->save();
    }

    public function destroy($id) {
        $user = User::where("id", "=", $id)->first();
        $user->delete();
    }
}
