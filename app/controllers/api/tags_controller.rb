class Api::TagsController < ApplicationController
  def index
    @tags = current_user.tags
    render :index
  end

  def create
    @tag = Tag.new(tag_params)
    @tag.owner_id = current_user.id
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = current_user.tags.find(params[:tag][:id])
    if @tag
      if @tag.update_attributes(tag_params)
        render :show
      else
        render json: @tag.errors.full_messages, status: 422
      end
    else
      render json: ['Could not find tag.'], status: 404
    end
  end

  def destroy
    @tag = current_user.tags.find(params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ['Could not find tag.'], status: 404
    end
  end

  def tag_params
    params.require(:tag).permit(:title)
  end
end
