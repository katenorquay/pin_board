class PressesController < ApplicationController
  before_action :find_press, only: [:show, :edit, :update, :destroy]

  def index
    @presses = Press.all.order("created_at DESC")
  end

  def show
  end

  def new
    @press = current_user.presses.build
  end

  def create
    @press = current_user.presses.build(press_params)

    if @press.save
      redirect_to @press, notice: "Successfully created new Press"
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @press.update(press_params)
      redirect_to @press, notice: "Press was successfully updated"
    else
      render 'edit'
    end
  end

  def destroy
    @press.destroy
    redirect_to root_path
  end

  private

  def press_params
    params.require(:press).permit(:link)
  end

  def find_press
    @press = Press.find(params[:id])
  end

end
