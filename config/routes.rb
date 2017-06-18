Rails.application.routes.draw do
  resources :media
  resources :pins

  root"pins#index"
  devise_for :users, path_names: {
    sign_up: ''
  }
  get '*path' => redirect('/')
end
