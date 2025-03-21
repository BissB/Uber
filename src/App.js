import "./App.css";
import { Header, Textbook } from "./component_준철/index";
import { 모음 } from './component_성락/index';
import { QR } from './Component_Qr/Index';
import { Footer } from './Component_다영/index';
import { All } from './Component_진호/index';
import { Form, Cost } from './Component_준완/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Cost />
      <모음 />
      <All />
      <QR />
      <Textbook />
      <Footer />
    </div>
  );
}

export default App;
