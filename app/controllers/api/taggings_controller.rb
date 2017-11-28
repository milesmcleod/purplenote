class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save!
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def update
    note_id = params[:tagging][:note_id]
    tag_id = params[:tagging][:tag_id]
    relation = Tagging.where(
      ["note_id = :note_id and tag_id = :tag_id", { note_id: note_id, tag_id: tag_id}]
    )
    @tagging = relation.first
    if @tagging
      @tagging.destroy
      render :show
    else
      render json: ['Could not find tagging.'], status: 404
    end
  end

  def tagging_params
    params.require(:tagging).permit(:tag_id, :note_id)
  end
end
