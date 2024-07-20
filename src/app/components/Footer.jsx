import React from 'react';

export default function Footer({ year, fullName, studentId }) {
    return (
        <div className='mt-3'>
            <p className="text-secondary text-center">
                Copyright © {year} {fullName} ({studentId})
            </p>
        </div>
    );
}

