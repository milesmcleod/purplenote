class Api::UsersController < ApplicationController

  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.img_url ||= 'placeholder'
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :img_url)
  end
end
