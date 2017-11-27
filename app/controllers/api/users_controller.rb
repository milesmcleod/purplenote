class Api::UsersController < ApplicationController

  def show
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.img_url ||= 'placeholder'
    idx = @user.email.index('@')
    if idx.nil?
      render json: ["Invalid email address"], status: 422
      return
    end
    @user.username = @user.email.dup[0...idx]
    if @user.save
      @notebook = Notebook.new(
        title: "#{@user.username}'s notebook",
        owner_id: @user.id
      )
      @notebook.save
      @user.default_notebook_id = @notebook.id
      @user.save
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
