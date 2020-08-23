App.chatChannel = App.cable.subscriptions.create({channel: 'ChatChannel', room: '1'}, {
  //  连接成功时回调
  connected: () => {
    console.log("connected ...")
  },
  // 连接断开时或连接被拒绝时回调
  disconnected: () => {
    console.log("disconnected ..")
  },
  // 接收该频道的消息
  received: function(data) {
    console.log("received：", data)
  }
})

App.chatChannel = App.cable.subscriptions.create({channel: 'ChatChannel', room: '2'}, {
  //  连接成功时回调
  connected: () => {
    console.log("connected2 ...")
  },
  // 连接断开时或连接被拒绝时回调
  disconnected: () => {
    console.log("disconnected2 ..")
  },
  // 接收该频道的消息
  received: function(data) {
    console.log("received2：", data)
  }
})
// 调用 ChatChannel 中的public家方法的方法
// App.chatChannel.perform(<action>, params)