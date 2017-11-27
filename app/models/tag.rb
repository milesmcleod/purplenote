# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: :owner_id,
    message: "Tag by that title already exists." }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tagging

  has_many :notes,
  through: :taggings,
  source: :note

end
