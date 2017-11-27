
tag_ids = []
@note.tags.each do |tag|
  tag_ids.push(tag.id)
end


json.id @note.id
json.title @note.title
json.content @note.content
json.notebook_id @note.notebook_id
json.tagIds tag_ids
json.trashBoolean @note.trashBoolean
json.shortcutId @note.shortcut_id
json.createdAt @note.created_at
json.updatedAt @note.updated_at
