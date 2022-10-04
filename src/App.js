import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import { useState } from 'react';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects'
    },
    {
        name: 'portraits',
        description: 'Portraits of people in my life'
    },
    {
        name: 'food',
        description: 'Delicious delecacies'
    },
    {
        name: 'landscape',
        description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false)

  return (
    <div>
      <Navigation
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
