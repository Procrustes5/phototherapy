Rails.application.routes.draw do
  get 'vue/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root 'login#index'
  root 'main#index'

  # get 'auth/cognito-idp/callback' => 'cognito_idp#callback', as: :cognito_callback
  

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
  # namespace :api do
  #   namespace :v1 do
  #     resources :users
  #     resources :reports
  #     resources :comments
  #     resources :categories, only: [:index]
  #     resources :tasks, only: %i[create destroy]
  #     resources :departments, only: [:index]
  #   end
  # end
end