# == Schema Information
#
# Table name: notes
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  contents     :string           not null
#  owner_id     :integer          not null
#  notebook_id  :integer          not null
#  shortcut_id  :integer
#  trashBoolean :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :content, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  # belongs_to :notebook
  # has_one :shortcut, as: :shortcuttable

end
