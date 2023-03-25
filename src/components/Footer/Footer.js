import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footleft'>
                <a href='https://www.facebook.com/profile.php?id=100008458064754' target='_blank' rel="noreferrer">   <i className="fa-brands fa-facebook" />  </a>
                <a href='https://www.instagram.com/code_world24/' target='_blank' rel="noreferrer"> <i className="fa-brands fa-instagram" /></a>
                <a href='https://twitter.com/Santanu91647754' target='_blank' rel="noreferrer"> <i className="fa-brands fa-twitter" /></a>
                <a href='https://github.com/santanu2402' target='_blank' rel="noreferrer"> <i className="fa-brands fa-github" /></a>
            </div>
            <div className='footright'>
                <a href='https://forms.gle/3cvQhvsyLuyjSnks8' target='_blank' rel="noreferrer">Feedback</a>
            </div>
        </footer>
    )
}

export default Footer
