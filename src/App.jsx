import { useState } from 'react';
import ChatList from './ChatList';
import ChatMessages from './ChatMessages';
import './App.css';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleSelectChat = (chatId) => {
    console.log('Selected chat ID:', chatId);  // Debug log
    setSelectedChatId(chatId);
  };

  return (
    <div className="app">
      <div className="chat-list-container">
        <ChatList onSelectChat={handleSelectChat} />
      </div>
      <div className="chat-messages-container">
        {selectedChatId && <ChatMessages chatId={selectedChatId} />}
      </div>
    </div>
  );
}

export default App;
