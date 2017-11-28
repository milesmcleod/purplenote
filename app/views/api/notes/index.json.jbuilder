

json.notes do
  @user.notes.each do |note|
    tag_ids = []
    @user.tags.each do |tag|
      if tag.note_ids.include?(note.id)
        tag_ids.push(tag.id)
      end
    end
    json.set! note.id do
      json.id note.id
      json.title note.title
      json.content note.content
      json.tagIds tag_ids
      json.trashBoolean note.trashBoolean
      json.notebook_id note.notebook_id
      json.updatedAt note.updated_at
      json.createdAt note.created_at
    end
  end
end

json.notebooks do
  @user.notebooks.each do |notebook|
    json.set! notebook.id do
      json.id notebook.id
      json.title notebook.title
      json.shortcut_id notebook.shortcut_id
      json.updatedAt notebook.updated_at
      json.createdAt notebook.created_at
    end
  end
end

json.tags do
  @user.tags.each do |tag|
    json.set! tag.id do
      json.id tag.id
      json.title tag.title
      json.updatedAt tag.updated_at
      json.createdAt tag.created_at
    end
  end
end
