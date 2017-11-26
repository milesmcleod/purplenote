class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.owner_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find(params[:notebook][:id])
    if @notebook
      if @notebook.update_attributes(notebook_params)
        render :show
      else
        render json: @notebook.errors.full_messages, status: 422
      end
    else
      render json: ['Could not find notebook.'], status: 404
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook
      @notebook.delete
      render :show
    else
      render json: ['Could not find notebook.'], status: 404
    end
  end

  def notebook_params
    params.require(:notebook).permit(:title, :shortcut_id)
  end

end
