<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class UsersController extends Controller
{
    public function index(Request $request){
        $users = User::all();

        function get_age_distribution($ageRange) {
            // Extract the minimum and maximum ages from the range
            list($minAge, $maxAge) = explode('-', $ageRange);
            
            // Retrieve the users grouped by age ranges
            $ageDistribution = User::whereBetween('age', [$minAge, $maxAge])
                ->selectRaw('FLOOR(age / 10) * 10 as ageRange, COUNT(*) as userCount')
                ->groupBy('ageRange')
                ->orderBy('ageRange')
                ->pluck('userCount', 'ageRange')
                ->toArray();
            
            return $ageDistribution;
        }

        function find_user_pairs(int $number, object $users): array{
            $pairs = [];
            foreach ($users as $user1) {
                foreach ($users as $user2) {
                    if ($user1->age + $user2->age == $number && $user1 != $user2) {
                        $pairs[] = [$user1, $user2];
                    }
                }
            }
            return $pairs;
        }

        if($request->age_range){
            return get_age_distribution($request->age_range);
        }

        if($request->pair){
            $pairs = find_user_pairs($request->pair, $users);
            return $pairs;
        }

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
