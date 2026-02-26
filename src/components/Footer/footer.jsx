//upiiiiiiiiiiiiiiiiiiiigit a
import React from 'react'
import './footer.css'

import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';

const Footer = () => {
  const todayDate = new Date();
  return (
    <div className = 'footer'>
      <div className = 'foooter-left'>
          <img className = 'footer-logo' src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAgIBwgLBwgICAoIBwgICBAICQgKIB0WIhcRExMkKDQgJCYxJxMTLTEtMTUrLi4uIx8zODMsNygtLisBCgoKDg0OFw8QGS0dHR0tLS0rLS03KystLS0tKy4tLS0tLSstNy0rLS0tKystKystLS0tLSsrLSstKysrKysrN//AABEIAMgAyAMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDCAT/xABCEAABAwAECAsECQQDAAAAAAAAAQIDBAURNQYHExdSVHSSEhYhMXGEk6KxstFRU1WRFCQ2QWF1gYOUFUShwTNzo//EABsBAQACAwEBAAAAAAAAAAAAAAABBQMEBgIH/8QALREBAAECBAUDBAMAAwAAAAAAAAECAwQFETISFDM0URUhMRMWQWIiUnEGI0L/2gAMAwEAAhEDEQA/AI8Uz6kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABusEalirqsfoc8j4WLA+XhRWcK1LOTl6VM9miKqlXmeLqw9HFCdZsKu12k/8An6G1y9LnvXr0/gzYVfr1J7noRy9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8GbCr9epPc9By9J67d8MZsKv16k9z0HL0p9du+EHwuqWKpax+hQSPmZkGS8KWzhWrbycnQhrXrcUy6DLMXViaOKppDB+VrOmoEAAAAAAAAAAAAl+K6/upy+LTZw2nE5/PtfoLhLBxvu5EAAAAAAAAAAAU5jRv7qcXi40MVudlkXRRA1/h0PtpoEIAAAAAAAAAAABtMHa6kqWmfTYYmzvSJ0XAe5WpYtnLb+hlt1xQ0Mdg+at8GuiU5z6dqEHauM84tSz/x6I/8ATOc+nahB2rhzUH29+xnQp2oQdq4c1B9vfsZ0KdqEHauHNQfb37GdCnahB2rhzUH29+xnQp2oQdq4c1B9vfsZ0KdqEHauHNQfb37MZz6dqEHauHNQfb/7Gc+nahB2rhzUH2/+yb4I1zJXVXJTJomwPWV8fAYvCSxPvtNq3VxUqDG4fl65tw3qHv8ADVU7jSv3qcXi40MTudlkPSRA1XQgQAAAAAAAAAAADKIq8iIq/giWqTETLxXXFPvPs5ZN+g7dU9cE+GOMTa/sZN+g7dUcEnM2vJk36Dt1RwScza8mTfoO3VHBJzNryZN+g7dUcEnM2vJk36Dt1RwScza8mTfoO3VHBJzNrywrH86sVETlVeCvIRwz4TGItz+XEj3ZdYmFwYrriTapv9Fjh9jhM37idUxQzQqFO40r96nF4uNHE7nZ5D0kQNV0IEAAAAAAAAAAAAl2LBqOr2xUt+qS8ip+LTaw0fyUGezP0lwZJmg3dQ39HHcc+TJM0G7qEaHHV5MkzQbuoNDjq8mSZoN3UGhx1eTJM0G7qDQ46vJkmaDd1CTjnyZKPQbuoDjny1GFsbEqStVRqJ9QpFi8FNFTxXsbOEqn6tPuogq5fQ6NkLhxW3Gm1T/6LCxscNnHcSmBnVSncaV/dTi8XGhidzssh6SIGq6ECAAAAAAAAAAAAS7Fe5G17atifVJeVV/FptYaf5KDPY1tLgysem3eQ39XHcE+DKx6afNCNThqMrHpt+aDU4KjKx6afNBqcNRlY9NPmg1OCplJGLzORfwRUJ1RNMuQedGowtuOtdgpHlU8XNrawnVpUKVcvotvpwuHFdcSbVMWFjY4bOO5lMDOqlO40r+6nF4uNDE7nZZD0kQNV0IEAAAAAAAAAAAAy1zmraxytWyy1FVq2ExOjzXbpqjSXPLS+9fvqTxVMXKW5jTQy0vvX76jiq8nK2vBlpfev31HFV5OVteDLS+9fvqOOTlbXgy8vvX76jjqROFt/iG1wVllWuqttkcqLS4rUV68qWmazV/JXZlh6acPVOi905k6CxcNLU4W3HWuwUjyqeK9stnCdan/AFQpVy+jW9kLhxXXEm1TFhY2OFzjuZTAzqpTuNK/upxeLjQxO52WQ9JEDVdCBAAAAAAAAAAAAO+g0OkU2dlGocazzyW5ONHI1VsS3nU9U0cXwwYjEU2KeKtuOJeEXwx/bxepl5atX+s4b+xxLwh+GP7eL1HL1nrOH8nEvCH4Y/t4vUcvWes4byLgZhCiWrVr0T/vi9Ry9UJ9Zw/xEtHNE+GSSGVOBJE90cjbUVWvRbFS39DFVTMLKzd46eKGywVvurNsjPdje0c27epficxZvn8tRhbcda7BSPKp5r2y2cJ1qf8AVClXL6Nb2QuHFdcSbVMWFjY4XOO5lMDOqlO40r+6nF4uNDE7nZZD0kQNV0IEAAAAAAAAAAAAkmLz7RUD97yuM+H3KXPO3ldpZOHLEAWIBh3MvQQmPl59r29az/MKV5nFZe3PoWWdvS78Fb7qzbI/EmxueM17epficydBZOAlqMLbjrXYKR5VPNe2WxhOtT/qhSrl9Gt7IXDiuuJNqmLCxscLnHcymBnVSncaV/dTi8XGhidzssh6SIGq6ECAAAAAAAAAAAASTF59oqv/AHvIpnw+5S5528rtLJw7IADi7mXoUhMfLz7Xt61n+YUrzuKy9ufQss7el34K33Vm2R+JNjc8Zr29S/E5k6CycBLUYW3HWuwUjyqea9stjCdan/VClXL6Lb2QuHFdcSbVMWFjY4bOO5lMDOqlO40r+6nF4uNDE7nZZD0kQNV0IEAAAAAAAAAAAAkmLz7RUD97yuM9jcps87eV2lk4ZkABxdzL0KQml59r29az/MKV53FZe3PoWWdvDvwVvqrNsj8SbG94zXt6l9t5v0LN8/n5anC24622CkeVTxc2tnCdalQpVy+i29kLhxXXEm1TFhY2OGzjuZTAzqpTuNK/upxeLjQxO52WQ9JEDV/LoQIAAAAAAAAAAABJMXn2ioCryf8AN5XGxY3KbPO3ldlqe0sXD6M2p7QgtT2gYcqWLy/cQmIefa9vWs/zCleZxWXtz6Flnb0u/BW+qs2yPxJs7nnNe3qX21UsTlTmLN8/mPdqMLVT+h1py/2FI8qnivbLZwkf9tKhirl9Ft9OFw4rlT+hpy/3UxYWdjhc47iUwtT2mdVKdxo371OLxcaGJ3OyyHpIgaroQIAAAAAAAAAAAB20akTUaVs1GldBK23gSRuVr29HzU9U1TDHesUXadK4ffxhrn4nSv5DjJ9eppTlWH02scYa5+J0r+Q4fVr8o9Kw/wDU4w1z8TpX8hw+rX5PSsP/AFZ4w1zzLWdKVPZ9IcR9ao9Kw+usUtbI90j3Pkcr3vcr3ucvCVzl51/ypjmZlv26KaI0hmGV8MjZYXLHIxyOY9q8FzVFMzBct03I0lseMVdfdWdJToncZPrVNCMrw8z70uE1e1rNG+KasKRLHI1zXsdKrmub7F+ZE3Zl6py2xTOsUtceG/8AjSH20StqxojMlRKbPRo7VdwIpXMbb7T3TcqhqXcBZuzrVS7uMNc/FKV/Ice/rVsU5VhvxS+Kl0qkUuTK0qd9Jl4KN4cr1e7g8vJ/lTFVVq27Ni3ZjSh0nln+feQIAAAAAAAAAAAAHuaRMhOqfifYI0AaATMnwEe5pAPc1gGpINUayA+AH+gTERAD2kCNNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z' />
          <div className='footer-text-white'>Chitkara University </div>
          <div className='footer-text-white'>Punjab</div>
          <div className='footer-text-smaller'>Jansla Village, Rajpura, Punjab, 140401</div>
          
          <div className='footer-text-smaller'><PhoneIcon /> 01762507086</div>
          <div className='footer-text-smaller'><LanguageIcon />admissions@chitkara.edu.in</div>
      </div>
      <div className="foooter-center">
            <div className='important-link'>Important Links</div>
                <a href='https://www.chitkara.edu.in/anti-ragging-policy/' target='_blank'>Anti-Ragging Initiative</a>
                <a href='https://www.nituk.ac.in/career-counselling-and-placement/home' target='_blank'>Career Counselling and Placement Section</a>
                <a href='https://www.nituk.ac.in/right-to-informations' target='_blank'>Right To Information</a>
                <a href='https://www.nituk.ac.in/special-cell' target='_blank'>Special Cell</a>
                <a href='https://www.nituk.ac.in/grievance-cell' target='_blank'>Grievance Cell</a>
                <a href='https://nituk.ac.in/nituk-contact' target='_blank'>Contact Us</a>
                <a href='https://nituk.ac.in' target='_blank'>College Official Website</a>


      </div>
      <div className="footer-right">
          <div className="footer-right-name"> <CloudIcon/> Punjab, India</div>
          <div className="today-date-footer">{todayDate.toDateString()}</div>
          {/* ///CONVERT DATE TO STRING */}
      </div>
    </div>
  )
}

export default Footer
