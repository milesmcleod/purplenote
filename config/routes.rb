Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  patch '/api/taggings', to: 'api/taggings#update'
  post '/api/taggings', to: 'api/taggings#create'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :create, :update, :destroy]
    resources :notebooks, only: [:index, :create, :update, :destroy]
    resources :tags, only: [:index, :create, :update, :destroy]
    resources :shortcuts, only: [:create, :destroy]
  end
end
