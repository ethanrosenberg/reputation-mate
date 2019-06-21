class SessionsController < ApplicationController

  def create

    #console.log("test!!!")
    #byebug

    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      token = generate_token({id: @user.id})

      resp = {
        user: user_serializer(@user),
        jwt: token
      }
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

  def get_current_user
    render json: {
      user: user_serializer(current_user)
      }, status: :ok
  end
end
