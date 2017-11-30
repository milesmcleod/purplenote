# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :tag, uniqueness: { scope: :note,
    message: "This note already has this tag." }

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tag,
  optional: true

  belongs_to :note,
  primary_key: :id,
  foreign_key: :note_id,
  class_name: :Note,
  optional: true

end
