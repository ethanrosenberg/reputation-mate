class SessionsController < ApplicationController

  def create

    #console.log("test!!!")
    #byebug

    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      render json: @user
    else
      resp = {
        error: "Invalid login credentials"
      }
      render json: resp, status: :unauthorized
    end


  end

  def delete

  end
end
