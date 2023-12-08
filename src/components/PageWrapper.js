import React from 'react';

function PageWrapper(WrappedComponent) {
    return function(props) {
        return (
            <div className="flex flex-col justify-start items-center h-screen w-full bg-gray-900">
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default PageWrapper;