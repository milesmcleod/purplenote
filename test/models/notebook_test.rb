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

require 'test_helper'

class NotebookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
