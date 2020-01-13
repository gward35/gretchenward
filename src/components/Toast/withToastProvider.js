import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import ToastContext from './context';
import Toast from './toast';

// Create a random ID

const generateUEID = () => {
  let first = (Math.random() * 46656 | 0);
  let second = (Math.random() * 46656 | 0);
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second
}

const withToastProvider = (Component) => {
  const WithToastProvider = (props) => {
    const [toasts, setToasts] = useState([]);
    const add = content => {
      const id = generateUEID()
      const toastCopy = [...toasts];

      setToasts([...toasts, { id, content }]);
    }
    const remove = (id) => setToasts(toasts.filter(toast => toast.id !== id))

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />
        { createPortal(
          <div className="toasts-wrapper">
            { toasts.map(toast => (
              <Toast key={toast.id} remove={() => remove(toast.id)}>
                {toast.content}
              </Toast>
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    )
  }

  return WithToastProvider;
}

export default withToastProvider;