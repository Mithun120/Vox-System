import React from 'react';
import FilesUploadComponent from './components/files-upload-component';
import UserProfileList from './components/UserProfileList';
import Fileupdate from './components/fileupdate';
import { useState } from 'react';
import DomainList from './components/domainlist';
import DomainUpdate from './components/domainupdate';
import DomainUplaod from './components/domainupload';
import Mail from './mail';
import Navbar from './navbar';
import Header from './components/header';
function App() {

  const [option, setOption] = useState(0);
  const [profile, setProfile] = useState({});
  const [doption,setDoption]=useState(0);
  const [domain,setDomain]=useState({})
  return (<>
  <Header/>
    <div className="App">
      {(option === 0) ? <FilesUploadComponent /> : <Fileupdate profile={profile} setOption={setOption} />}
      <UserProfileList setOption={setOption} setProfile={setProfile} />
    </div>

    <div className='App'>
      {(doption===0)?<DomainUplaod/>:<DomainUpdate domain={domain} setDoption={setDoption}/>}
      <DomainList setDoption={setDoption} setDomain={setDomain}/>
    </div>

    <Mail/>
    </>
  );
}

export default App
