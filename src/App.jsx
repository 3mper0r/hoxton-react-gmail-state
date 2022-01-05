import { useState } from 'react'
import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import emails from './data/emails'

function App() {
  // Use initialEmails for state
  const [initialEmails, setInitialEmails] = useState(emails)

  // const [emails, setEmails] = useState([
  //   {
  //     id: 1,
  //     sender: `Zoom`,
  //     title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
  //     starred: false,
  //     read: true
  //   }
  // ])

  console.log(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{initialEmails.id}</main>
    </div>
  )
}

export default App
