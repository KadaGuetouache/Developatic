<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\User;

class AdminController extends Controller
{
    public function index(){
        $users = User::where('is_admin', false)->get();
        return Inertia::render("Admin/Dashboard", ["users" => $users]);
    }

    public function destroy($id) {
        $user = User::where("id", "=", $id)->first();
        $user->delete();
    }
}
