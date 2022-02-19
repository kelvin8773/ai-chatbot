import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          headerText='Chatbot'
          placeholderText='Input placeholder'
        />
      </header>
    </div>
  );
}

export default App;
