import { useEffect, useState } from 'react';
import './App.css';

const url = 'sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/';
// [ Base URL: sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/ ]

function App() {
  const [data, setData] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch('http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/3/10');
      console.log(response);
      if (!response.ok) {
        throw new Error('Something went wrong (response is not ok)');
      }
      const data = await response.json();
      console.log(data, 'data');

      // setData(loadedprofiles);

    } catch (error) {
      console.log(error.message, 'error in catch');
    }
  }

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <div className="content">
        <div className='profile'>
          <div className='img'></div>
          <div className='profile-info'>
            <h1>Ms. Nat Hickle</h1>
            <p>Forward Configuration Developer</p>
          </div>
        </div>
        <div className='profile'>
          <div className='img'></div>
          <div className='profile-info'>
            <h1>Ms. Nat Hickle</h1>
            <p>Forward Configuration Developer</p>
          </div>
        </div>
        <div className='profile'>
          <div className='img'></div>
          <div className='profile-info'>
            <h1>Ms. Nat Hickle</h1>
            <p>Forward Configuration Developer</p>
          </div>
        </div>
        <div className='profile'>
          <div className='img'></div>
          <div className='profile-info'>
            <h1>Ms. Nat Hickle</h1>
            <p>Forward Configuration Developer</p>
          </div>
        </div>
        <div className='profile'>
          <div className='img'></div>
          <div className='profile-info'>
            <h1>Ms. Nat Hickle</h1>
            <p>Forward Configuration Developer</p>
          </div>
        </div>
      </div>

      <h1 id='in-profile'>In Profile <span id='in-profile-span'>(delete later)</span></h1>

      <div className='profile-content'>
        <div className='profile-header'>
          <div className='profile-img'></div>
          <div className='in-profile-info'>
            <div className='in-in-profile-info'>
              <p id="float-info">Info</p>
              <h1 className='name'>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
              <div className='informations'>
                <p><span>Email:</span> Lavon65@yahoo.com</p>
                <p><span>Ip Adress:</span> 10.83.35.97</p>
                <p><span>Ip Adress:</span> 10.83.35.97</p>
                <p><span>Job Area:</span> Assurance</p>
                <p><span>Job Type:</span> Supervisor</p>
              </div>
            </div>

          </div>
          <div className='profile-right-header'>
            <div className='in-profile-right-header'>
              <p id='float-adress'>Adress</p>
              <h1>GreenFelder - Effertz LLC</h1>
              <div className='right-header-info'>
                <p><span>City:</span> North Norbertport</p>
                <p><span>Country:</span> Estonia</p>
                <p><span>State:</span> Nevada</p>
                <p><span>Street Adress:</span> 421 Gukotwski Villages</p>
                <p><span>ZIP:</span> 62452</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id='visited'>Ms. Nat Hickle</p>
      <div className='friends'>
        <h1 id='friends'>Friends:</h1>
        <div className="content">
          <div className='profile'>
            <div className='img'></div>
            <div className='profile-info'>
              <h1>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
            </div>
          </div>
          <div className='profile'>
            <div className='img'></div>
            <div className='profile-info'>
              <h1>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
            </div>
          </div>
          <div className='profile'>
            <div className='img'></div>
            <div className='profile-info'>
              <h1>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
            </div>
          </div>
          <div className='profile'>
            <div className='img'></div>
            <div className='profile-info'>
              <h1>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
            </div>
          </div>
          <div className='profile'>
            <div className='img'></div>
            <div className='profile-info'>
              <h1>Ms. Nat Hickle</h1>
              <p>Forward Configuration Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const loadedprofiles = [];

// for (const key in data) {
//   loadedprofiles.push({
//     id: key,
//     imageUrl: data[key].imageUrl,
//     lastName: data[key].lastName,
//     name: data[key].name,
//     prefix: data[key].prefix,
//     title: data[key].title
//   });
// };