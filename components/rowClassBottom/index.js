import React from 'react'
import Image from 'next/image';

import { RowClassBottomContainer } from './style'

function RowClassBottom({classCss, imageOneRow, imageTwoRow, imageThreeRow, colOneTxt, colTwoTxtOne, colTwoTxtTwo, colThreeTxtOne, colThreeTxtTwo}) {
  return (
    <RowClassBottomContainer className={classCss}>
      <div className='row_class_bottom_cont'>
        <div className='row_class_bottom_col1'>
          <Image
            src={imageOneRow}
            width={90}
            height={90}
            alt="Icone"
          />
          <p>{colOneTxt}</p>          
        </div>
        <div className='row_class_bottom_col2'>
          <Image
            src={imageTwoRow}
            width={90}
            height={90}
            alt="Icone"
          />
          <div>
            <p>{colTwoTxtOne}</p>
            <p>{colTwoTxtTwo}</p>
          </div>
        </div>
        <div className='row_class_bottom_col3'>
          <Image
            src={imageThreeRow}
            width={90}
            height={90}
            alt="Icone"
          />
          <div>
            <p>{colThreeTxtOne}</p>
            <p>{colThreeTxtTwo}</p>
          </div>
        </div>
      </div>
    </RowClassBottomContainer>
  )
}

export default RowClassBottom