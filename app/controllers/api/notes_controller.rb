class Api::NotesController < ApplicationController
  def index
    @user = current_user
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.owner_id = current_user.id
    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.includes(tags: :taggings).find(params[:note][:id])
    if @note
      if @note.update_attributes(note_params)
        render :show
      else
        render json: @note.errors.full_messages, status: 422
      end
    else
      render json: ['Could not find note.'], status: 404
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    if @note
      @note.delete
      render :show
    else
      render json: ['Could not find note.'], status: 404
    end
  end

  private

  def note_params
    params.require(:note).permit(
      :title,
      :content,
      :notebook_id,
      :trashBoolean,
      :shortcut_id)
  end
end
