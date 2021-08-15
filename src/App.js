import React, {useState} from 'react';
import 'reset-css';
import './App.scss';
import Templates from './pages/templates/Templates'
import Editor from './pages/editor/Editor';

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const onTemplateSelect = (template) => {
    console.log(template);
    setSelectedTemplate(template);
  }
  return (
    <React.Fragment>
      {
        (() => {
          if(!selectedTemplate) return <Templates onTemplateSelect={onTemplateSelect} />
          else return <Editor selectedTemplate={selectedTemplate} />
        })()
      }
    </React.Fragment>
  );
}

export default App;
