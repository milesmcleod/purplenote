json.notebooks do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.id notebook.id
      json.title notebook.title
      json.shortcut_id notebook.shortcut_id
      json.updatedAt notebook.updated_at
      json.createdAt notebook.created_at
    end
  end
end
