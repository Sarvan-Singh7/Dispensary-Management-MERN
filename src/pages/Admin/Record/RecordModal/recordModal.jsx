import React from 'react'
import './recordModal.css'
export const RecordModal = () => {
  return (
    <div className='record-modal'>
        <div className='student-modal-report'>
            <div>Danish</div>
            <div>Danish@gmail.com</div>
            <div>2410991854</div>
        </div>

        <div className='student-details-scroll'>
            <div className='student-modal-detail'>
                <div className='student-modal-header'>
                    14-01-2026
                </div>

                <div className='student-modal-body-student'>
                    <div className='student-modal-body-header'>
                        <div>Medicine Name</div>
                        <div>Quantity</div>
                    </div>

                    <div className='student-modal-body-item'>
                        <div className='student-item-modal'>
                            <div>Paracetamol</div>
                            <div>20</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecordModal