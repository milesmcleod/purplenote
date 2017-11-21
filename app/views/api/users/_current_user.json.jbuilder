json.currentUser do
  json.extract! user, :id, :username, :email, :img_url
end
#do i want to include the id here? probably, right?
