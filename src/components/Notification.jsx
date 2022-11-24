import { NotificationManager } from "react-notifications";

const createNotification = (type, message) => {
    return () => {
        switch (type) {
            case 'success':
                NotificationManager.success({message});
                break
            case 'warning':
                NotificationManager.warning({message});
                break
            case 'error':
                NotificationManager.error({message});
                break
            default:
                NotificationManager.info({message});
                break
        }
    }
}

export default createNotification;