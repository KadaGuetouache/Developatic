<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

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
         $faker = Faker::create();

        $users = [];

        for ($i = 0; $i < 1000; $i++) {
            $users[] = [
                'name' => $faker->name(),
                'email' => $faker->email(),
                'password' => $faker->password(),
                'date_of_birth' => $faker->dateTimeBetween('-75 years', '-15 years')->format('Y-m-d'),
                'user_type' => 'standard'
            ];
        }

        $users[] = [
            'name' => 'Administrator',
            'email' => 'admin@something.com',
            'password' => 'password',
            'date_of_birth' => $faker->dateTimeBetween('-75 years', '-15 years')->format('Y-m-d'),
            'user_type' => 'admin'
        ];

        DB::table('users')->insert($users);
    }
}
