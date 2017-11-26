json.notebooks do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.id notebook.id
      json.title notebook.title
      json.noteCount notebook.notes.length
      json.shortcutId notebook.shortcut_id
      json.updatedAt notebook.updated_at
      json.createdAt notebook.created_at
    end
  end
end
