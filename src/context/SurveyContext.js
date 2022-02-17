import React, { useState } from 'react';

const SurveyContext = React.createContext([{}, () => {}]);

const SurveyProvider = (props) => {
  const [state, setState] = useState();
  return (
    <SurveyContext.Provider value={[state, setState]}>
      {props.children}
    </SurveyContext.Provider>
  );
};

export { SurveyContext, SurveyProvider };