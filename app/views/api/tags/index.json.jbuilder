json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.id tag.id
      json.title tag.title
      json.updatedAt tag.updated_at
      json.createdAt tag.created_at
    end
  end
end
