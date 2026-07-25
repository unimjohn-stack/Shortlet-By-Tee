import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/layout/Navbar'
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card from './components/ui/Card';
import Badge from './components/ui/Badge';
import Loader from './components/ui/Loader';
import Modal from './components/ui/Modal';

function App() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Navbar />
    </>
  )
}

export default App
