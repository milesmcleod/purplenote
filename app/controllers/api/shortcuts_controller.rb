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

  def update
    id = params[:shortcut][:shortcuttable_id]
    type = params[:shortcut][:shortcuttable_type]
    relation = Shortcut.where(
      ["shortcuttable_id = :x and shortcuttable_type = :y", { x: id, y: type }]
    )
    @shortcut = relation.first
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
