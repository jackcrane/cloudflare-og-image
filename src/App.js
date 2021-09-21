import './App.css';
import { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';

function App() {
  const [ logo, setLogo ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ subtitle, setSubtitle ]= useState('');
  const [ protocol, setProtocol ] = useState('');
  const [ URL_, setURL ] = useState('');
  const [ font, setFont ] = useState('');
  const [ backgroundImage, setBackgroundImage ] = useState('');

  useEffect(() => {
    setLogo(`https://og-image.xyz/og/${title || 'Title'}/${subtitle || 'Subtitle'}/${URL_ || 'URI'}/${protocol || ' '}/${font || 'menlo'}/${backgroundImage || 'candybar'}/black/data.png`);
  }, [title, subtitle, URL_, protocol, font, backgroundImage]);

  return (
    <div className="App">
      <div>
        {/* Imports */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin></script>
      </div>
      <Container>
      <h1>Open Graph image generator</h1>
        <img src={logo} className="preview-image d-flex align-items-center" alt="Preview Image" />
        <pre>
          <code className='bg-dark text-light p-2'>
            {logo}
          </code>
        </pre>
        <>
          <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
            <Form.Control type="text" placeholder="Big title" onKeyUp={(e) => {setTitle(e.target.value)}} />
          </FloatingLabel>
        </>
        <>
          <FloatingLabel controlId="floatingInput" label="Subtitle" className="mb-3">
            <Form.Control type="text" placeholder="Medium subtitle" onKeyUp={(e) => {setSubtitle(e.target.value)}} />
          </FloatingLabel>
        </>
        <>
          <InputGroup className="mb-3">
            <DropdownButton
              title={protocol || 'Protocol'}
              id="input-group-dropdown-1"
              onSelect={(e) => {setProtocol(e)}}
            >
              <Dropdown.Item eventKey="https">https://</Dropdown.Item>
              <Dropdown.Item eventKey="http">http://</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="ftp">ftp://</Dropdown.Item>
              <Dropdown.Item eventKey="mailto">mailto://</Dropdown.Item>
              <Dropdown.Item eventKey="tel">tel://</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey=" ">No Protocol</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-label="URL" onKeyUp={(e) => {setURL(e.target.value)}} />
          </InputGroup>
        </>
        <>
          <InputGroup className="mb-3">
            <DropdownButton onSelect={(e) => {setFont(e)}} title={font || "Font"}>
              <Dropdown.Item eventKey="Menlo">Menlo</Dropdown.Item>
              <Dropdown.Item eventKey="Atkinson">Atkinson</Dropdown.Item>
            </DropdownButton>
            <FormControl disabled aria-label="Font" />
          </InputGroup>
        </>
        <>
          <InputGroup className="mb-3">
            <DropdownButton onSelect={(e) => {setBackgroundImage(e)}} title={backgroundImage || "Background Image"}>
              <Dropdown.Item eventKey="candybar">Candybar</Dropdown.Item>
              <Dropdown.Item eventKey="cheerfulorange">cheerfulorange</Dropdown.Item>
              <Dropdown.Item eventKey="renownedred">renownedred</Dropdown.Item>
              <Dropdown.Item eventKey="unmatchedeclipse">unmatchedeclipse</Dropdown.Item>
              <Dropdown.Item eventKey="virtualshapes">virtualshapes</Dropdown.Item>
              <Dropdown.Item eventKey="flawlessaffinity">flawlessaffinity</Dropdown.Item>
              <Dropdown.Item eventKey="prettyheroic">prettyheroic</Dropdown.Item>
              <Dropdown.Item eventKey="irritablehero">irritablehero</Dropdown.Item>
              <Dropdown.Item eventKey="circleacquired">circleacquired</Dropdown.Item>
              <Dropdown.Item eventKey="descendsun">descendsun</Dropdown.Item>
              <Dropdown.Item eventKey="shatteredfeelings">shatteredfeelings</Dropdown.Item>
            </DropdownButton>
            <FormControl disabled aria-label="Font" />
          </InputGroup>
        </>
      </Container>
    </div>
  );
}

export default App;
