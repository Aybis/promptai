const addMessage = (
  setMessages: Function,
  message: { text: string; role: string; timestamp: string },
) => {
  setMessages((prev: any) => [...prev, message]);
};

const clearUserInput = (setUserInput: Function) => {
  setUserInput('');
};

const handleError = (error: any) => {
  console.error(error, '<<<< handle send message error');
};

const createMessage = (text: string, role: string) => ({
  text,
  role,
  timestamp: new Date().toISOString(),
});

export { addMessage, clearUserInput, handleError, createMessage };
