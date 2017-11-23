json.notes do
  @user.notes.each do |note|
    json.set! note.id do
      json.id note.id
      json.title note.title
      json.content note.content
      json.notebookId note.notebook_id
      json.updatedAt note.updated_at
      json.createdAt note.created_at
    end
  end
end
