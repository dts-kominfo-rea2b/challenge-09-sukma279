import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {
        contacts.map((contact) => {
          return <Contact 
          photo = {contact.photo} 
          name = {contact.name} 
          phone = {contact.phone} 
          email = {contact.email}/>
        })
      }
    </div>
  );
}

export default App;
