json.currentUser do
  json.extract! @user, :id, :username, :email, :img_url
end
