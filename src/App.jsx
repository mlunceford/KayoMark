import React from 'react';
import './reset.scss';
import './App.scss';

// todo  below are things i will need later.
{/* <img src="" alt="markPic" />
<img src="" alt="familyPic" /> */}
{/* <a href=""></a> * /} */ }
function App() {
    return (
        <div className="App">
            <div className="nav">
                <img src="data:image/png;base64,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" alt="kayoLogo" />
            </div>
            <div className="markProfile">

            </div>
            <div className="kayo">


            </div>
            <div className="contact">
                {/* im thinking of putting a button to send to a email but lets just put email down right now. */}
                <div className="number">
                    <p>Call or Text</p>
                    <p>(801)318-2313</p>
                </div>
                <div className="email">
                    <p>Email</p>
                    <p>mlunceford@kayoenergy.com</p>
                </div>
            </div>
        </div>
    );
}

export default App;
