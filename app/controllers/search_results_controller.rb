
#require_relative "./concerns/url_analyzer.rb"
require 'url_analyzer'

class SearchResultsController < ApplicationController


  before_action :set_search_result, only: [:show, :update, :destroy]

  # GET /search_results
  def search

   #byebug
   #@analyzed_urls = UrlAnalyzer.new
   @analyzer = UrlAnalyzer.new
   @analyzed_results = @analyzer.search_google

   puts @analyzed_results

   #byebug





    render json: {
      query: params[:query],
      results: @analyzed_results
    }
  end


  def index

    if logged_in?

      @search_results = current_user.search_results
      #byebug

      render json: @search_results, status: :ok
    else
      render json: {
        error: "not logged in", status: :unauthorized
      }
    end
    #@search_results = SearchResult.all

    #render json: @search_results
  end

  # GET /search_results/1
  def show
    render json: @search_result
  end

  # POST /search_results
  def create
    @search_result = SearchResult.new(search_result_params)

    if @search_result.save
      render json: @search_result, status: :created, location: @search_result
    else
      render json: @search_result.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /search_results/1
  def update
    if @search_result.update(search_result_params)
      render json: @search_result
    else
      render json: @search_result.errors, status: :unprocessable_entity
    end
  end

  # DELETE /search_results/1
  def destroy
    @search_result.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_search_result
      @search_result = SearchResult.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def search_result_params
      params.require(:search_result).permit(:user_id)
    end
end
