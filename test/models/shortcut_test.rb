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

require 'test_helper'

class ShortcutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
