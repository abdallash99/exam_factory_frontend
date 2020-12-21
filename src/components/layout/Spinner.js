import React from 'react'
export default function MySpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <div className="spinner-border text-primary" style={{ width: '4rem', height: '4rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
