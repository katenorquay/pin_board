Rails.application.routes.draw do
  devise_for :users
  resources :pins, :presses

  root"pins#index"
end
