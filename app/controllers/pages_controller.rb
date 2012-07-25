class PagesController < ApplicationController
  def home
  end

  def store_address
    h = Hominid::API.new('106f7283af506aca743f87b528014cf0-us5')
    @email = params[:email]
    list_id = '6b2f3d1dfb'
    @message = "Thank you for signing up"
    #Rails.logger.debug(params.to_s)

    respond_to do |format|
      if h.list_subscribe(list_id, @email)
        format.js
      else
        format.js
      end

    end
  end
end
