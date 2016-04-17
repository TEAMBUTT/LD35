class ResultsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @result = Result.create!(state: params[:state])
    render json: { location: url_for(@result) }
  end

  def show
    @result = Result.find_by!(slug: params[:id])
  end
end
