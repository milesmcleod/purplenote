# == Schema Information
#
# Table name: notes
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  content      :string
#  owner_id     :integer          not null
#  notebook_id  :integer          not null
#  shortcut_id  :integer
#  trashBoolean :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Note < ApplicationRecord
  validates :title, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  belongs_to :notebook,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Notebook

  has_many :taggings,
  primary_key: :id,
  foreign_key: :note_id,
  class_name: :Tagging

  has_many :tags,
  through: :taggings,
  source: :tag

  has_many :shortcuts, as: :shortcuttable

end
