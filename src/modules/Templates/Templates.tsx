import { Sidebar } from "./Sidebar";

import './Templates.scss';
import { TemplatesContent } from "./TemplatesContent";

export const Templates = () => {
    return (
         <div className="content">
            <Sidebar />
            <TemplatesContent />
         </div>
    );
}