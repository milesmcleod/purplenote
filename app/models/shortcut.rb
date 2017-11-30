# == Schema Information
#
# Table name: shortcuts
#
#  id                 :integer          not null, primary key
#  owner_id           :integer          not null
#  shortcuttable_type :string
#  shortcuttable_id   :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Shortcut < ApplicationRecord
  validates :shortcuttable_id, uniqueness: { scope: [:owner_id, :shortcuttable_type] }

  belongs_to :shortcuttable, polymorphic: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

end
