import React from 'react'

const StudentModal = ({ selectedHistory }) => {
    return (
        <div className='record-modal'>
            <div className='student-details-scroll'>
                <div className='student-modal-detail'>
                    <div className='student-modal-header'>
                        {selectedHistory?.createdAt?.slice(0, 10).split("-").reverse().join("-")}
                    </div>

                    <div className='student-modal-body-student'>
                        <div className='student-modal-body-header'>
                            <div>Medicine Name</div>
                            <div>Quantity</div>
                        </div>

                        <div className='student-modal-body-item'>
                            {selectedHistory?.medicines?.map((med, idx) => (
                                <div key={idx} className='student-item-modal'>
                                    <div>{med?.name}</div>
                                    <div>{med?.requiredQuantity}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentModal
