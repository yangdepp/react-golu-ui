import React from 'react';

interface Props {
  value: { [k: string]: any };
  fileds: Array<{ name: string; label: string; input: { type: string } }>;
}
const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.fileds.map(f => 
        <div>
          {f.label}
          <input type={f.input.type}/>
        </div>
      )}
    </div>
  )
};

export default Form;
