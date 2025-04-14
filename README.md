# React Chat App with Tailwind CSS and Local Storage (Powered by Vite)

This is a simple chat application built using React and styled with Tailwind CSS. It leverages Vite as the build tool for a faster development experience. The app features the ability to save and clear chat messages using local storage.

## Features

* Real-time message display
* Styled with Tailwind CSS for a clean and responsive design
* Saves chat messages in the browser's local storage, so chats persist even after closing the tab.
* Provides a button to clear all chat messages from local storage.
* **Built with Vite:** Enjoy faster development server startup and hot module replacement.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Vite:** A next-generation frontend tooling that provides an extremely fast development environment and bundles your code for production.
* **Local Storage:** A web storage API to store data locally within the user's browser.

## How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/allAboutManas/Simple-Chat-App
    ```


2.  **Navigate to the project directory:**
    ```bash
    cd simple-Chat-App

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn add
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open your browser and navigate to the URL provided in your terminal (usually `http://localhost:5173`).

## Usage

* Type your message in the input field.
* Press Enter or click the send button to send the message.
* The message will appear in the chat window.
* Your chat history will be automatically saved in your browser's local storage.
* Click the "Clear Chat" button to remove all saved messages from local storage and clear the chat window.

## Code Highlights

*(You can add specific code snippets here to highlight key functionalities, for example:)*

### Saving messages to local storage:

```javascript
useEffect(() => {
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}, [messages]);
```

### Retrieving messages from local storage on component mount:

```javascript
useEffect(() => {
  const storedMessages = localStorage.getItem('chatMessages');
  if (storedMessages) {
    setMessages(JSON.parse(storedMessages));
  }
}, []);
```

### Clearing messages from local storage:

```javascript
const handleClearChat = () => {
  setMessages([]);
  localStorage.removeItem('chatMessages');
};
```

## Further Improvements

*(Optional: You can list potential future enhancements here, such as:)*

  * Adding user authentication.
  * Implementing real-time communication using WebSockets.
  * Adding timestamps to messages.
  * Improving the user interface and user experience.
  * Adding support for different message types (e.g., images).