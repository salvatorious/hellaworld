@extends('layouts.app')

@section('header')
    @include('partials.navigation')
@endsection

@section('content')
  <div class="row justify-content-md-center mt-5">
    <login-box></login-box>
  </div>
@endsection
