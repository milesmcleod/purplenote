json.currentUser do
  json.extract! @user, :id, :username, :email, :img_url
end

json.notes do
  json.array! @user.notes, :id, :title, :contents, :notebook_id
end
