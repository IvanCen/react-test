import React from "react";
import './index.css'

const Error = () => {
  return (
    <div className='error'>
      <span className='error__text error__text_theme_blood error__text_size_big'>BOOM!</span>
      <span className='error__text error__text_theme_gold'>something has gone terribly wrong</span>
      <span className='error__text error__text_theme_gold'>(but we already sent droids to fix it)</span>
    </div>
  )

}

export default Error
