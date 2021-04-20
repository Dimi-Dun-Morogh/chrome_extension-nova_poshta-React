import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.component';
import Form from './components/form/form.component';
import PackageInfo from './components/package_info/package_info.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <PackageInfo />
    </div>
  );
}

export default App;
