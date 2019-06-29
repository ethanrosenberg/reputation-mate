class PropertiesController < ApplicationController

  def all
    #byebug

    @properties = Property.all
    #byebug
    if @properties.size > 0
      render json: @properties.sort_by(&:occurrences).reverse, status: :ok
    else
      render json: {
        error: "hmmm something went wrong"
      }
    end

  end
end
