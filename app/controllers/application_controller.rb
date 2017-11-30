class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :logged_in

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.includes(:notes, :notebooks, :shortcuts, tags: :taggings).find_by(session_token: session[:session_token])
  end

  def logged_in
    !!current_user
  end

  def require_logged_in

  end

end
