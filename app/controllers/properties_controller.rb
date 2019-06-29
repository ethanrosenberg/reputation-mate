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

  def findproperty


    @property = Property.find_by(root_url: (Adomain.domain params[:url]))



    if @property
      render json: @property, status: :ok
    else
      render json: {
        error: "hmmm something went wrong fetching this property"
      }
    end


  end
end
