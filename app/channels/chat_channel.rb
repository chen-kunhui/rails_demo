class ChatChannel < ApplicationCable::Channel
  def subscribed
    p "=========="
    p params
    p abc
    stream_from "chenkunhui"
  end

  def unsubscribed
    p "====unsubscribed======"
    p params
  end

  def appear(data)
    p "=======ddd"
  end
end