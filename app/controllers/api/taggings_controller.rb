class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:tagging][:id])
    if @tagging
      @tagging.destroy
      render :show
    else
      render json: ['Could not find tagging.'], status: 404
    end
  end

  def tag_params
    params.require(:tagging).permit(:tag_id, :note_id)
  end
end
