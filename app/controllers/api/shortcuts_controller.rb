class Api::ShortcutsController < ApplicationController
  def create
    @shortcut = Shortcut.new(shortcut_params)
    @shortcut.owner_id = current_user.id
    if @shortcut.save!
      render :show
    else
      render json: @shortcut.errors.full_messages, status: 422
    end
  end

  def destroy
    @shortcut = current_user.shortcuts.find(params[:id])
    if @shortcut
      @shortcut.destroy
      render :show
    else
      render json: ['Could not find shortcut to delete.'], status: 404
    end
  end

  def shortcut_params
    params.require(:shortcut).permit(:shortcuttable_id, :shortcuttable_type)
  end
end
