import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Card from './components/ui/Card'
import Badge from './components/ui/Badge'

function App() {

  return (
    <>
      <div className="p-10 space-x-4">

      <Button>
        Find a Stay
      </Button>


      <Button variant="secondary">
        Become a Host
      </Button>


      <Button 
        variant="accent"
        size="md"
      >
        Book Now
      </Button>

      </div>
      <div className="p-10 space-y-5">

        <Input
          label="Email Address"
          placeholder="tee@example.com"
          type="email"
        />


        <Input
          label="Location"
          placeholder="Lagos, Nigeria"
        />


        <Input
          label="Password"
          placeholder="********"
          type="password"
          // error="Password is required"
        />

      </div>

      <div className="bg-background min-h-screen p-10">

      <Card>
        <h2 className="text-heading text-2xl font-bold">
          Lekki Apartment
        </h2>

        <p className="text-body mt-2">
          Beautiful 2 bedroom shortlet with WiFi and parking.
        </p>

      </Card>

    </div>
    <div className="p-10 space-x-3">

      <Badge>
        Featured
      </Badge>


      <Badge variant="success">
        Verified Host
      </Badge>


      <Badge variant="accent">
        New Listing
      </Badge>


      <Badge variant="danger">
        Sold Out
      </Badge>

      <Badge variant="premium">
        Premium Stay
      </Badge>

    </div>
    </>
  )
}

export default App
