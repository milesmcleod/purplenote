# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  owner_id    :integer          not null
#  shortcut_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, presence: true, uniqueness: { scope: :owner_id,
    message: "Notebook by that title already exists!" }

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :notes,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Note,
  dependent: :destroy

end
