Rails.application.routes.draw do
  resources :media
  devise_for :users
  resources :pins

  root"pins#index"
end
