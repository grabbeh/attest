import { Notification } from './connectors'

const addNotification = (id, user, action) => {
  Notification.create({
    relatedUser: user._id,
    relatedContract: id,
    masterEntityID: user.masterEntityID,
    action
  })
}

export { addNotification }
