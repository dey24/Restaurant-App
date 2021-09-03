import React from 'react';

export const showError = (err) => {
    <div className="alert alert-danger" role="alert">
        {err};
    </div>
}