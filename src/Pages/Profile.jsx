import './../styles/profile.scss';
import Header from './../components/Header.jsx';
import React from 'react';
import info from './../info.json'

function Profile(props) {
    

  return (
    <div className="profile">
        <Header></Header>
        <div className='content'>
            <div className='list'>
                <ul>
                    {
                        info.map((inf, i)=>(
                            <li key={i}>{inf.date} - {inf.time} - {inf.name} - {inf.theme}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Profile;
