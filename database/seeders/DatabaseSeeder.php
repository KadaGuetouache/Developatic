<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        function calculate_age(string $date_of_birth):int{
            $today = Carbon::today();
            $date_of_birth = Carbon::parse($date_of_birth);
            $age = $today->diffInYears($date_of_birth);
            return $age;
        }

        $faker = Faker::create();

        $users = [];

        for ($i = 0; $i < 1000; $i++) {
            $date = $faker->dateTimeBetween('-75 years', '-15 years')->format('Y-m-d');
            $users[] = [
                'name' => $faker->name(),
                'email' => $faker->email(),
                'password' => Hash::make($faker->password()),
                'date_of_birth' => $date,
                'age' => calculate_age($date),
                'is_admin' => false
            ];
        }

        $date = $faker->dateTimeBetween('-75 years', '-15 years')->format('Y-m-d');

        $users[] = [
            'name' => 'Administrator',
            'email' => 'admin@something.com',
            'password' => Hash::make('password'),
            'date_of_birth' => $date,
            'age' => calculate_age($date),
            'is_admin' => true
        ];

        DB::table('users')->insert($users);
    }
}
