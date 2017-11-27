json.currentUser do
  json.extract! user, :id, :username, :email, :img_url, :default_notebook_id
end
#do i want to include the id here? probably, right?
