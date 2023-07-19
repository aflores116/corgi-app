import React from 'react'
import corgiDividerSVG from '../assets/svg/corgi.svg'

interface DividerProps {
  dividerTitle: string;
}

const Divider = (props: DividerProps) => {
  const {dividerTitle} = props;
  return (
    <div className="page-divider">
    <h2 className="page-divider__title">{dividerTitle}</h2>
        <div className="page-divider__media">
            <img className="page-divider__media-icon" src={corgiDividerSVG} alt="content divider" />
        </div>
    </div>
  )
}

export default Divider