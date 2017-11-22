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

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
