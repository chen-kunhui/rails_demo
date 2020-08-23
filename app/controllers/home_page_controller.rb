class HomePageController < ApplicationController
  def index
  end

  def test
    # ChatChannel.broadcast_to("chenkunhui", title: 2, body: 3)
    ActionCable.server.broadcast('chenkunhui', title: 1, body: 3)
    render json: {status: 'ok'}
  end
end
