<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->only(["index", "store"]);
        $this->middleware('auth')->only(["destroy"]);
    }

    /**
     * Show login page
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Login");
    }


    /**
     * Handles login request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'max:255', 'email'],
            'password' => ['required', 'max:255']
        ]);

        if (!Auth::attempt($request->only("email", "password"), $request->remember)) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed')
            ]);
        } else {
            return Redirect::route('home');
        }
    }

    /**
     * Handles logout request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::route('home');
    }
}
