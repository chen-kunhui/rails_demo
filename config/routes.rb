Rails.application.routes.draw do
  root to: 'home_page#index'
  get 'test' => 'home_page#test'
end
