import React from 'react'
import corgiDividerSVG from '../assets/svg/corgi.svg'

interface DividerProps {
  dividerTitle: string;
}

const Divider = (props: DividerProps) => {
  const {dividerTitle} = props;
  return (
    <div className="page-divider">
    <h3 className="page-divider__title">{dividerTitle}</h3>
        <div className="page-divider__media">
            <img className="page-divider__media-icon" src={corgiDividerSVG} alt="" />
            {/* <svg className="page-divider__icon" aria-hidden="true" focusable="false">
                <use xlinkHref={corgiDividerSVG}  />
            </svg> */}
        </div>
    </div>
  )
}

export default Divider