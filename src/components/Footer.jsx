import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from './favicon-32x32.png';

export default function App() {
  return (

    <MDBFooter bgColor='dark' className='text-white-50 fixed-bottom'>
      
      <MDBContainer lg='7' md = '5' className='blockquote-footer'>
        <MDBRow>
          <MDBCol lg='5' md='12' className='mb-4 mb-md-0'>
            
            <h5 className='text-uppercase'><img src = {logo}/> &nbsp; Shoppers Delight</h5>

            <p>
            One of the world’s largest digital marketplace for
            crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
            </p>
          </MDBCol>

          <MDBCol lg='2' md='7' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Marketplace</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='' className='text-white-50'>
                  All NFTs
                </a>
              </li>
             
            </ul>
          </MDBCol>

          <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2'>My Account</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='' className='text-white-50'>
                  Profile
                </a>
              </li>
              <li>
                <a href='' className='text-white-50'>
                  Settings
                </a>
              </li>
              <li>
                  <li className='text-uppercase mb-5'></li>

              <h5 className='text-uppercase mb-2'>Stats</h5>
              <ul className='list-unstyled mb-0'>
                  
              </ul>
                <a href='' className='text-white-50'>
                  Rankings
                </a>
              </li>
              <li>
                <a href='' className='text-white-50'>
                  Activity
                </a>
              </li>
            </ul>
            
            
          </MDBCol>

          <MDBCol lg='2' md='7' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2'>Resources</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='' className='text-white-50'>
                  Newsletter
                </a>
              </li>
              <li>
                <a href='' className='text-white-50'>
                Partners
                </a>
              </li>
              <li>
                <a href='' className='text-white-50'>
                 Blog
                </a>
              </li>
              <li>
                <a href='' className='text-white-50'>
                  Docs
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg='1' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2'>Company</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='About' className='text-white-50'>
                  About
                </a>
              </li>
              <li>
                <a href='Careers' className='text-white-50'>
                Careers
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-1 mb-4 mb-md-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href=''>
          ShoppersDelight.com
        </a>
        
      </div>
    </MDBFooter>
  );
}