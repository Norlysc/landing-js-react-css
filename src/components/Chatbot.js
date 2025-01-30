import React, { useState, useEffect } from "react";
import { BsChatDots } from "react-icons/bs"; // Ícono de chat

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // La vibración dura 0.5s
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      {!isOpen ? (
        <button className="chat-icon" onClick={() => setIsOpen(true)}>
          <BsChatDots size={40} />
        </button>
      ) : (
        <div className={`chatbot ${isShaking ? "shake" : ""}`}>
          <div className="chat-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
