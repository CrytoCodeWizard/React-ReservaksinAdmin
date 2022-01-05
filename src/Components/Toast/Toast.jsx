import toast from 'react-hot-toast';

export const ToastError = (message) => {
    return (
        toast.error(message)
    );
}

export const ToastSuccess = (message) => {
    return (
        toast.success(message)
    );
}
