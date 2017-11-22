json.currentUser do
  json.extract! @user, :id, :username, :email, :img_url
end

json.notes do
  @user.notes.each do |note|
    json.set! note.id do
      json.id note.id
      json.title note.title
      json.content note.content
      json.notebook_id note.notebook_id
    end
  end
end
