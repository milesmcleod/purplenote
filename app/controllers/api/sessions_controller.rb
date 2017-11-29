class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:notes, :notebooks, tags: :taggings).find_by_credentials(
      params[:user][:name],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid login credentials.'], status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Not logged in.'], status: 404
    end
  end
end
