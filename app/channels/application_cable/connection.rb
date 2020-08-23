module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :abc
    def connect
      p "=====ApplicationCable::Connection============"
      self.abc = 'chenkunhui'
      # reject_unauthorized_connection
    end
  end
end
