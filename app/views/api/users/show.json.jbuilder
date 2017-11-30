json.currentUser do
  json.extract! @user, :id, :username, :email, :img_url, :default_notebook_id
end

json.notes do
  @user.notes.each do |note|
    tag_ids = []
    @user.tags.each do |tag|
      tag.taggings.each do |tagging|
        if tagging.note_id === note.id
          tag_ids.push(tagging.tag_id)
        end
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
      json.shortcutId notebook.shortcut_id
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

json.shortcuts do
  @user.shortcuts.each do |shortcut|
    json.set! shortcut.id do
      json.id shortcut.id
      json.type shortcut.shortcuttable_type
      json.shortcut_element_id shortcut.shortcuttable_id
      json.createdAt shortcut.created_at
      json.updatedAt shortcut.updated_at
    end
  end
end
