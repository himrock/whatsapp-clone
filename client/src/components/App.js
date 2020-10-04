import React from 'react'
import { ContactsProvider } from '../contexts/ContactsProvider.js';
import { ConversationsProvider } from '../contexts/ConversationsProvider.js';
import { SocketProvider } from '../contexts/SocketProvider.js';
import useLocalStorage from '../hooks/useLocalStorage.js';
import Dashboard from './Dashboard.js';
import Login from './Login.js'

function App() {

  const [id, setId] = useLocalStorage('key');

  const dashboard = (
    <SocketProvider id ={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id ={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App
