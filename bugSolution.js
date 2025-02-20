```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log('Home location changed', location);
  return <h1>Home</h1>;
}

function About() {
  const location = useLocation();
  console.log('About location changed', location);
  return <h1>About</h1>;
}
```