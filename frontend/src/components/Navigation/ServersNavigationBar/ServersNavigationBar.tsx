import * as React from 'react';

const ServersNavigationBar: React.FC = () => {
    return (
        <div className="d-flex flex-column">
            <ul>
                <li>Server 1</li>
                <li>Server 2</li>
                <li>Server 3</li>
            </ul>
        </div>
    );
};

export { ServersNavigationBar };