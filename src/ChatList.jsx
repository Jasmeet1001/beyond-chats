import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ChatList.css';
import SearchAppBar from './components/SideNavSearch/sidenavSearch';
import AlignItemsList from './components/UserList/UserList';


function ChatList({ onSelectChat }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => response.json())
      .then(data => {
        console.log('Chat list data:', data);  // Debug log
        if (Array.isArray(data.data.data)) {
          setChats(data.data.data);
        } else {
          setError(new Error('Invalid data format'));
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading chats...</div>;
  if (error) return <div className="error">Error fetching chats: {error.message}</div>;

  return (
    <div className="chat-list">
      <SearchAppBar></SearchAppBar>
      {chats.map(chat => (
        <AlignItemsList
        key={chat.id}
        creatorName={chat.creator.name ? chat.creator.name : "Dummy"}
        creatorStatus={chat.status}
        clickfunc={onSelectChat}
        chatid={chat.id}
        >
        </AlignItemsList>

      ))}
    </div>
  );
}

ChatList.propTypes = {
  onSelectChat: PropTypes.func.isRequired,
};

export default ChatList;
