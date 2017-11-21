json.currentUser do
  json.extract! @user, :username, :email, :img_url
end
