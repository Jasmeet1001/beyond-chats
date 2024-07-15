import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ChatMessages.css";

function ChatMessages({ chatId }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chatId) return;

    fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Chat messages data:", data); // Debug log
        if (Array.isArray(data.data)) {
          setMessages(data.data);
        } else {
          setError(new Error("Invalid data format"));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [chatId]);

  if (loading) return <div className="loading">Loading messages...</div>;
  if (error)
    return (
      <div className="error">Error fetching messages: {error.message}</div>
    );

  return (
    <div className="custom-bg-color">
      <div className="custom-width">
        {messages.map((message) => (
          <div className="message-item message-box" key={message.id}>
            <div className="message-sender">{message.sender.name}</div>
            <div className="message-content">{message.message}</div>
            <div className="message-timestamp">
              {new Date(message.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ChatMessages.propTypes = {
  chatId: PropTypes.number.isRequired,
};

export default ChatMessages;
