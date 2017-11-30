require 'test_helper'

class Api::ShortcutsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_shortcuts_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_shortcuts_destroy_url
    assert_response :success
  end

end
